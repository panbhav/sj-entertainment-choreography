from pathlib import Path
import subprocess, imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe()
files=['hero-film-4k-desktop.webm','hero-film-hq-desktop.mp4','hero-film-hq-mobile.mp4']
for filename in files:
 p=Path('public/media')/filename
 report=subprocess.run([ff,'-hide_banner','-i',str(p)],capture_output=True,text=True,errors='replace').stderr
 print(filename)
 print('\n'.join(s.strip() for s in report.splitlines() if 'Duration:' in s or 'Video:' in s))
 assert 'Audio:' not in report
 assert p.stat().st_size>100000
source=r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography\Sangeet Highlit\Aayush Monika Sangeet.webm'
def frame_hash(file,seek):
 result=subprocess.run([ff,'-v','error','-threads','2','-ss',str(seek),'-i',str(file),'-map','0:v:0','-frames:v','1','-pix_fmt','yuv420p','-f','hash','-hash','sha256','-'],capture_output=True,text=True,timeout=40)
 return result.stdout.strip()
reference=frame_hash(source,51.2)
export=frame_hash(Path('public/media/hero-film-4k-desktop.webm'),0)
print('First native 4K frame is pixel-identical to the original:',reference==export)
Path('artifacts/hero-edit-hq/quality-verification.txt').write_text(f'Native VP9 first frame matches source at 51.2s: {reference==export}\nSource {reference}\nExport {export}\n')
