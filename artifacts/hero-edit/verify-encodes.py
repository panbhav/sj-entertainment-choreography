from pathlib import Path
import subprocess, imageio_ffmpeg, re
ff=imageio_ffmpeg.get_ffmpeg_exe()
for variant in ['desktop','mobile']:
 p=Path('public/media')/f'hero-film-{variant}.mp4'
 result=subprocess.run([ff,'-hide_banner','-i',str(p)],capture_output=True,text=True,errors='replace').stderr
 print(p.name, round(p.stat().st_size/1048576,2),'MiB')
 print('\n'.join(line.strip() for line in result.splitlines() if 'Duration:' in line or 'Video:' in line or 'Audio:' in line))
 assert 'Audio:' not in result, 'Hero should be silent'
 assert 'yuv420p' in result
 assert '00:00:20.60' in result
