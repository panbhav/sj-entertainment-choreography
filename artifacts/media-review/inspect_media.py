from pathlib import Path
import subprocess, re, json
from PIL import Image, ImageOps, ImageDraw
import imageio_ffmpeg
root=Path(r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography')
out=Path('artifacts/media-review')
ffmpeg=imageio_ffmpeg.get_ffmpeg_exe()
choices=[('Sangeet Highlit','Anuj x Ramya.MP4'),('Sangeet Highlit','jaipur highlight.mp4'),('Sangeet Highlit','Piyush x Chetna.MOV'),('Sangeet Highlit','Sakshi x Aditya Goa .mp4'),('Sangeet Highlit','Rs Sangeet Highlights.mp4'),('Entry','Entry Final.mp4'),('BTS Video','04 BTS VIDEO.mp4'),('Sajid Practice video','After Befor.mp4'),('Sangeet Reels','Anant Akshita.mp4')]
canvas=Image.new('RGB',(1200,len(choices)*255),'#171717')
draw=ImageDraw.Draw(canvas)
info=[]
for row,(folder,name) in enumerate(choices):
    source=root/folder/name
    result=subprocess.run([ffmpeg,'-hide_banner','-i',str(source)],capture_output=True,text=True,errors='replace').stderr
    match=re.search(r'Duration: (\d+):(\d+):(\d+\.\d+)',result)
    duration=sum(float(x)*m for x,m in zip(match.groups(),(3600,60,1))) if match else 30
    video=next((line.strip() for line in result.splitlines() if 'Video:' in line),'')
    info.append({'file':str(source.relative_to(root)),'seconds':round(duration,1),'stream':video})
    draw.text((10,row*255+5),f'{folder} / {name} | {duration:.1f}s',fill='white')
    for col,fraction in enumerate((.18,.45,.72)):
        target=out/f'sample-{row}-{col}.jpg'
        command=[ffmpeg,'-hide_banner','-loglevel','error','-ss',str(duration*fraction),'-i',str(source),'-frames:v','1','-vf','scale=390:210:force_original_aspect_ratio=decrease','-y',str(target)]
        completed=subprocess.run(command,capture_output=True,timeout=45)
        if target.exists():
            frame=Image.open(target).convert('RGB')
            canvas.paste(frame,(col*400+(400-frame.width)//2,row*255+30+(210-frame.height)//2))
        else: draw.text((col*400+10,row*255+90),'Frame unavailable',fill='white')
canvas.save(out/'video-shortlist.jpg',quality=88)
(out/'shortlist-metadata.json').write_text(json.dumps(info,indent=2))
print(json.dumps(info,indent=2))
