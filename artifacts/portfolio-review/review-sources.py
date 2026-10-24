from pathlib import Path
import subprocess, concurrent.futures
from PIL import Image, ImageDraw
import imageio_ffmpeg
root=Path(r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography'); out=Path('artifacts/portfolio-review'); ff=imageio_ffmpeg.get_ffmpeg_exe()
groups={
 'performances': [
 ('performance/C0274.MP4',[30,80,140]),('performance/C0293.MP4',[25,90,150]),('performance/Pragya Solo.MP4',[30,75,120]),('performance/Sanchit x Pragya.MP4',[30,90,145]),('performance/Tapan Pragya.MP4',[30,100,180]),('performance/Cousings.MP4',[35,100,185]),('performance/Dadi ji.MP4',[8,15,25]),('performance/Frineds.MP4',[25,85,140])],
 'entries': [
 ('Entry/VID_20260920_110857_343.mp4',[4,12,21]),('Entry/VID_20260920_110057_695.mp4',[3,10,19]),('Entry/VID_20260920_110204_315.mp4',[3,10,18]),('Entry/VID_20260920_110312_925.mp4',[5,20,38]),('Entry/VID_20260920_110718_275.mp4',[5,25,45]),('Entry/VID_20260920_111139_351.mp4',[5,22,40]),('Entry/VID_20260920_115418_744.mp4',[3,9,16]),('Entry/VID_20260920_121344_785.mp4',[3,10,19]),('Entry/VID_20260628_032717_490.mp4',[4,15,28]),('Entry/VID_20260628_032904_927.mp4',[4,13,23])]
}
def extract(job):
 group,row,file,col,stamp=job; target=out/f'{group}-{row}-{col}.jpg'
 result=subprocess.run([ff,'-v','error','-threads','2','-ss',str(stamp),'-i',str(root/file),'-frames:v','1','-vf','scale=468:264:force_original_aspect_ratio=decrease','-q:v','2','-y',str(target)],capture_output=True,timeout=45)
 return target
for group,rows in groups.items():
 jobs=[(group,row,file,col,t) for row,(file,times) in enumerate(rows) for col,t in enumerate(times)]
 with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool: list(pool.map(extract,jobs))
 sheet=Image.new('RGB',(1440,300*len(rows)),'#171717'); draw=ImageDraw.Draw(sheet)
 for row,(file,times) in enumerate(rows):
  for col,t in enumerate(times):
   p=out/f'{group}-{row}-{col}.jpg'; x=col*480; y=row*300
   if p.exists():
    im=Image.open(p); sheet.paste(im,(x+(480-im.width)//2,y+28))
   draw.text((x+8,y+5),f'{Path(file).name} / {t}s',fill='white')
 sheet.save(out/f'{group}-sheet.jpg',quality=92)
 print(f'{group} sheet ready',flush=True)
