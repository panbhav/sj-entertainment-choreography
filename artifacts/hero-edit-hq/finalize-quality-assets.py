from pathlib import Path
import subprocess, imageio_ffmpeg
p=Path('src/components/home/CinematicHero.tsx'); t=p.read_text(encoding='utf-8-sig')
t=t.replace('function chooseFilm(video: HTMLVideoElement, mobile: boolean)', 'function chooseFilm(video: HTMLVideoElement, mobile: boolean, forceCompatible = false)')
t=t.replace("return video.canPlayType('video/webm; codecs=\"vp9\"') ? desktopFilm : desktopFallback;", "return !forceCompatible && video.canPlayType('video/webm; codecs=\"vp9\"') ? desktopFilm : desktopFallback;")
t=t.replace('  const manualPlayback = useRef(false);', '  const manualPlayback = useRef(false);\n  const useCompatibleDesktop = useRef(false);')
t=t.replace('chooseFilm(video, mobile.matches)', 'chooseFilm(video, mobile.matches, useCompatibleDesktop.current)').replace("chooseFilm(video, window.matchMedia('(max-width: 700px)').matches)", "chooseFilm(video, window.matchMedia('(max-width: 700px)').matches, useCompatibleDesktop.current)")
t=t.replace("if (video?.getAttribute('src') === withBasePath(desktopFilm)) {", "if (video?.getAttribute('src') === withBasePath(desktopFilm)) {\n      useCompatibleDesktop.current = true;")
p.write_text(t,encoding='utf-8')
p=Path('scripts/build-hero-film.py'); t=p.read_text(encoding='utf-8-sig').replace("['-ss', '2', '-i'", "['-ss', '20.5', '-i'"); p.write_text(t,encoding='utf-8')
ff=imageio_ffmpeg.get_ffmpeg_exe()
for video,poster in [('hero-film-4k-desktop.webm','hero-film-4k-desktop-poster.jpg'),('hero-film-hq-mobile.mp4','hero-film-hq-mobile-poster.jpg')]:
 r=subprocess.run([ff,'-v','error','-y','-ss','20.5','-i',str(Path('public/media')/video),'-frames:v','1','-q:v','2',str(Path('public/media')/poster)],capture_output=True,text=True)
 if r.returncode: raise RuntimeError(r.stderr)
print('Quality sources, fallback recovery, and sharper cover frames updated.')
