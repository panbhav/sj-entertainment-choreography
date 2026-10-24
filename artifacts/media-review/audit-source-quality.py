from pathlib import Path
import subprocess,re,json,concurrent.futures
import imageio_ffmpeg
root=Path(r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography')
ff=imageio_ffmpeg.get_ffmpeg_exe()
paths=[p for p in root.rglob('*') if p.is_file() and p.suffix.lower() in ('.mp4','.mov','.webm') and not p.name.startswith('.trashed')]
def probe(p):
 try:
  output=subprocess.run([ff,'-hide_banner','-i',str(p)],capture_output=True,text=True,errors='replace',timeout=30).stderr
  video=next((s for s in output.splitlines() if 'Video:' in s),'')
  dim=re.search(r'(?<!\w)(\d{3,5})x(\d{3,5})(?!\w)',video)
  dur=re.search(r'Duration: (\d+):(\d+):(\d+\.\d+)',output)
  w,h=map(int,dim.groups()) if dim else (0,0)
  seconds=sum(float(x)*m for x,m in zip(dur.groups(),(3600,60,1))) if dur else 0
  return {'file':str(p.relative_to(root)),'width':w,'height':h,'seconds':round(seconds,2),'size_mb':round(p.stat().st_size/1048576,1),'stream':video.strip(),'rotation':re.findall(r'rotation of ([-\d.]+)',output)}
 except Exception as e:return {'file':str(p.relative_to(root)),'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool: rows=list(pool.map(probe,paths))
Path('artifacts/media-review/all-video-metadata.json').write_text(json.dumps(rows,indent=2))
for row in sorted(rows,key=lambda r:r.get('width',0)*r.get('height',0),reverse=True)[:65]:
 print(f"{row.get('width',0)}x{row.get('height',0)} | {row.get('seconds',0):.1f}s | {row['file']}")
