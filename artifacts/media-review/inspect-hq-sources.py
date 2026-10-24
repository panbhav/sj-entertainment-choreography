from pathlib import Path
import subprocess, json
from PIL import Image,ImageDraw
import imageio_ffmpeg
root=Path(r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography'); out=Path('artifacts/media-review'); ff=imageio_ffmpeg.get_ffmpeg_exe()
rows=[('Sangeet Highlit/Aayush Monika Sangeet.webm',[20,55,85]),('Sangeet Highlit/Drov X Meenu.mp4',[8,24,42]),('Sangeet Highlit/Akshye x Vidhi.MP4',[8,20,33]),('performance/Sanchit.mp4',[15,45,75]),('Sajid Practice video/IMG_9744.MOV',[12,35,60]),('BTS Video/Agarwal Family 24 June.mp4',[10,30,50])]
sheet=Image.new('RGB',(1440,len(rows)*300),'#191919'); draw=ImageDraw.Draw(sheet)
for r,(file,times) in enumerate(rows):
 for c,t in enumerate(times):
  target=out/f'hq-candidate-{r}-{t}.jpg'
  subprocess.run([ff,'-v','error','-ss',str(t),'-i',str(root/file),'-frames:v','1','-vf','scale=468:264:force_original_aspect_ratio=decrease','-q:v','2','-y',str(target)],capture_output=True,timeout=45)
  if target.exists():
   frame=Image.open(target); sheet.paste(frame,(c*480+(480-frame.width)//2,r*300+28))
  draw.text((c*480+8,r*300+7),f'{Path(file).name} | {t}s',fill='white')
sheet.save(out/'hq-candidates.jpg',quality=93)
# A full-size frame reveals source softness that thumbnails can conceal.
subprocess.run([ff,'-v','error','-ss','55','-i',str(root/rows[0][0]),'-frames:v','1','-q:v','2','-y',str(out/'aayush-4k-frame.jpg')],capture_output=True,timeout=45)
print('High-quality candidate frames ready')
