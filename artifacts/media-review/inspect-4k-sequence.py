from pathlib import Path
from PIL import Image, ImageDraw
import subprocess, imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe(); root=Path(r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography'); out=Path('artifacts/media-review')
jobs=[('aayush-sequence','Sangeet Highlit/Aayush Monika Sangeet.webm',[24,28,32,36,40,44,48,52,58,62,66,72,78,90,100]),('camera-samples','Sakshi Sangeet/C0264.MP4',[15,40,70])]
for tag,file,times in jobs:
 sheet=Image.new('RGB',(1440,((len(times)+2)//3)*300),'#151515'); draw=ImageDraw.Draw(sheet)
 for n,t in enumerate(times):
  frame=out/f'{tag}-{t}.jpg'
  subprocess.run([ff,'-v','error','-ss',str(t),'-i',str(root/file),'-frames:v','1','-vf','scale=468:264:force_original_aspect_ratio=decrease','-q:v','2','-y',str(frame)],capture_output=True,timeout=45)
  if frame.exists():
   im=Image.open(frame); x=n%3*480; y=n//3*300; sheet.paste(im,(x+(480-im.width)//2,y+25));draw.text((x+8,y+5),f'{tag} / {t}s',fill='white')
 sheet.save(out/f'{tag}-sheet.jpg',quality=94)
print('Detailed quality review ready')
