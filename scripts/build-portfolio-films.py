import pathlib, subprocess, json, imageio_ffmpeg
from PIL import Image,ImageDraw
root=pathlib.Path(r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography')
out=pathlib.Path('public/media/portfolio');out.mkdir(parents=True,exist_ok=True)
ff=imageio_ffmpeg.get_ffmpeg_exe()
films=[
 dict(id='couple-dance',source='performance/Sanchit x Pragya.MP4',start=23,duration=40,poster=8),
 dict(id='sangeet-highlights',source='Sangeet Highlit/Aayush Monika Sangeet.webm',start=29,duration=18,poster=8),
 dict(id='family-celebration',source='performance/Dadi ji.MP4',start=3,duration=31,poster=12),
 dict(id='friends-performance',source='performance/Frineds.MP4',start=78,duration=38,poster=12),
 dict(id='couple-reveal',source='Sangeet Highlit/Aayush Monika Sangeet.webm',start=66,duration=14,poster=6),
 dict(id='rehearsal',source='Sajid Practice video/IMG_9744.MOV',start=12,duration=32,poster=12),
]
if __name__=='__main__':
 for f in films:
  dest=out/(f['id']+'.mp4')
  if not dest.exists():
   building=dest.with_name(dest.stem+'.building.mp4')
   subprocess.run([ff,'-hide_banner','-loglevel','error','-y','-ss',str(f['start']),'-i',str(root/f['source']),'-t',str(f['duration']),'-map','0:v:0','-map','0:a:0?','-vf','fps=25,scale=1920:1080:force_original_aspect_ratio=decrease,setsar=1','-c:v','libx264','-threads','2','-preset','veryfast','-crf','20','-maxrate','10M','-bufsize','20M','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-af','afade=t=in:d=0.2,afade=t=out:st='+str(f['duration']-.6)+':d=0.6','-movflags','+faststart',str(building)],check=True)
   building.replace(dest)
  subprocess.run([ff,'-hide_banner','-loglevel','error','-y','-ss',str(f['poster']),'-i',str(dest),'-frames:v','1','-q:v','2',str(out/(f['id']+'.jpg'))],check=True)
  print(f['id']+' ready',flush=True)
 sheet=Image.new('RGB',(1200,1140),'#161312');d=ImageDraw.Draw(sheet)
 for i,f in enumerate(films):
  im=Image.open(out/(f['id']+'.jpg'));im.thumbnail((590,330));x=(i%2)*600;y=(i//2)*380;sheet.paste(im,(x,y+30));d.text((x+8,y+8),f['id'],fill='white')
 sheet.save('artifacts/portfolio-review/selected-films.jpg')
 pathlib.Path('artifacts/portfolio-review/selection.json').write_text(json.dumps(films,indent=2))
