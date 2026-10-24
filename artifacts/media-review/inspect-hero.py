from PIL import Image, ImageDraw
from pathlib import Path
import subprocess, imageio_ffmpeg
out=Path('artifacts/media-review'); root=Path(r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography')
ff=imageio_ffmpeg.get_ffmpeg_exe()
# Render transparency on a solid background for inspection only.
canvas=Image.new('RGB',(900,300),'#202020')
for i,name in enumerate(['sj-logo-white-sm.png','sj-logo-gold-sm.png','sj-logo-white.png']):
 im=Image.open(Path('public/media')/name).convert('RGBA'); im.thumbnail((280,280)); canvas.paste(im,(i*300,10),im)
canvas.save(out/'logo-inspection.jpg')
# Closely inspect a range of high-resolution moments before choosing the edit.
rows=[('Sangeet Highlit/Rs Sangeet Highlights.mp4',[12,20,30,40,50,60,70,80,90]),('Sangeet Highlit/jaipur highlight.mp4',[15,25,35,45,55,65,90,115,135]),('Sangeet Reels/Bridegroom.mp4',[12,25,40,55,70,85,100,120,145])]
for row,(source,times) in enumerate(rows):
 sheet=Image.new('RGB',(1200,750),'#151515'); draw=ImageDraw.Draw(sheet)
 for n,t in enumerate(times):
  frame=out/f'candidate-{row}-{t}.jpg'
  subprocess.run([ff,'-v','error','-ss',str(t),'-i',str(root/source),'-frames:v','1','-vf','scale=390:218:force_original_aspect_ratio=decrease','-y',str(frame)],capture_output=True,timeout=30)
  if frame.exists():
   im=Image.open(frame); x=(n%3)*400; y=(n//3)*250
   sheet.paste(im,(x+(400-im.width)//2,y+25)); draw.text((x+8,y+5),f'{Path(source).name} / {t}s',fill='white')
 sheet.save(out/f'candidate-sheet-{row}.jpg')
print('Inspection sheets ready')
