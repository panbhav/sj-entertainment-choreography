from pathlib import Path
from PIL import Image, ImageDraw
import subprocess, imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe(); source=Path('public/media/hero-film-4k-desktop.webm'); out=Path('artifacts/media-review')
info=subprocess.run([ff,'-hide_banner','-i',str(source)],capture_output=True,text=True,errors='replace').stderr
print('\n'.join(line.strip() for line in info.splitlines() if 'Duration:' in line or 'Video:' in line))
sheet=Image.new('RGB',(1440,300),'#151515'); draw=ImageDraw.Draw(sheet)
for i,t in enumerate([0,2,10]):
 p=out/f'native-hq-{t}.jpg'
 subprocess.run([ff,'-v','error','-ss',str(t),'-i',str(source),'-frames:v','1','-vf','scale=468:-2','-q:v','2','-y',str(p)],capture_output=True,timeout=40)
 if p.exists():
  im=Image.open(p);sheet.paste(im,(i*480,25));draw.text((i*480,5),f'Native desktop film, {t}s',fill='white')
sheet.save(out/'native-hq-check.jpg',quality=93)
