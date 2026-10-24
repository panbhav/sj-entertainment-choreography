from pathlib import Path
path=Path('src/components/home/CinematicHero.tsx')
text=path.read_text(encoding='utf-8-sig')
text=text.replace("const desktopFilm = '/media/hero-film-desktop.mp4';", "const desktopFilm = '/media/hero-film-4k-desktop.webm';\nconst desktopFallback = '/media/hero-film-hq-desktop.mp4';")
text=text.replace("const mobileFilm = '/media/hero-film-mobile.mp4';", '''const mobileFilm = '/media/hero-film-hq-mobile.mp4';

function chooseFilm(video: HTMLVideoElement, mobile: boolean) {
  if (mobile) return mobileFilm;
  return video.canPlayType('video/webm; codecs="vp9"') ? desktopFilm : desktopFallback;
}''')
text=text.replace('mobile.matches ? mobileFilm : desktopFilm', 'chooseFilm(video, mobile.matches)').replace("window.matchMedia('(max-width: 700px)').matches ? mobileFilm : desktopFilm", "chooseFilm(video, window.matchMedia('(max-width: 700px)').matches)")
text=text.replace('/media/hero-film-mobile-poster.jpg','/media/hero-film-hq-mobile-poster.jpg').replace('/media/hero-film-desktop-poster.jpg','/media/hero-film-4k-desktop-poster.jpg')
text=text.replace('  async function togglePlayback() {', '''  function handleVideoError() {
    const video = videoRef.current;
    if (video?.getAttribute('src') === withBasePath(desktopFilm)) {
      // Some browsers report VP9 support but cannot decode this 4K stream.
      video.src = withBasePath(desktopFallback);
      video.load();
      if (!pausedByVisitor.current && !document.hidden) void video.play().catch(() => setIsPlaying(false));
      return;
    }
    setHasError(true);
    setIsReady(false);
    setIsPlaying(false);
  }

  async function togglePlayback() {''')
text=text.replace('onError={() => { setHasError(true); setIsReady(false); setIsPlaying(false); }}','onError={handleVideoError}')
path.write_text(text,encoding='utf-8')
path=Path('src/components/home/CinematicHero.css')
text=path.read_text(encoding='utf-8-sig').replace('object-position: 62% center;','object-position: center;').replace('rgba(6,9,13,.8) 0%, rgba(6,9,13,.48) 38%, rgba(6,9,13,.13) 78%', 'rgba(6,9,13,.72) 0%, rgba(6,9,13,.36) 38%, rgba(6,9,13,.08) 78%')
path.write_text(text,encoding='utf-8')
