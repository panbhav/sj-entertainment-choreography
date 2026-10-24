import pathlib,subprocess,imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe();out=pathlib.Path('public/media/hero-film-mobile-responsive.mp4')
subprocess.run([ff,'-hide_banner','-loglevel','error','-y','-threads','2','-i','public/media/hero-film-montage-desktop.mp4','-vf','fps=30,crop=1440:1080:240:0,scale=1080:810:flags=lanczos,setsar=1','-an','-c:v','libx264','-threads','2','-preset','veryfast','-crf','18','-maxrate','5M','-bufsize','10M','-profile:v','main','-level:v','3.1','-pix_fmt','yuv420p','-movflags','+faststart',str(out)],check=True)
subprocess.run([ff,'-hide_banner','-loglevel','error','-y','-ss','2','-i',str(out),'-frames:v','1','-q:v','2','public/media/hero-film-mobile-responsive-poster.jpg'],check=True)
print('Mobile film reframed and encoded at 1080x810, square pixels, H.264 Main level 3.1, 30 fps.')
