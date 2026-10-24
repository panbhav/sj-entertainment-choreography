"""Publish a sharper hero excerpt from the professionally filmed 4K original.
The primary desktop WebM preserves the original VP9 frames without re-encoding.
"""
import argparse, json, subprocess
from pathlib import Path
import imageio_ffmpeg
parser = argparse.ArgumentParser()
parser.add_argument('--media-root', type=Path, default=Path(r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography'))
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
out = root / 'public' / 'media'
work = root / 'artifacts' / 'hero-edit-hq'
work.mkdir(parents=True, exist_ok=True)
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
source = args.media_root / 'Sangeet Highlit' / 'Aayush Monika Sangeet.webm'
if not source.is_file(): raise FileNotFoundError(source)
start, duration = 51, 23

def run(arguments):
 result = subprocess.run([ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', *arguments], capture_output=True, text=True, errors='replace')
 if result.returncode: raise RuntimeError(result.stderr[-4000:])

def publish(filename, arguments):
 destination = out / filename
 temporary = out / (destination.stem + '.tmp' + destination.suffix)
 run([*arguments, str(temporary)])
 temporary.replace(destination)
 print(f'{filename}: {destination.stat().st_size / 1048576:.2f} MiB', flush=True)
 return destination

# Original 4K VP9 bitstream: no scaling, second compression, or added soft fades.
webm = publish('hero-film-4k-desktop.webm', ['-i', str(source), '-ss', str(start), '-t', str(duration), '-map', '0:v:0', '-c:v', 'copy', '-an', '-avoid_negative_ts', 'make_zero'])
# A high-quality, broadly compatible fallback for browsers without VP9 support.
common = ['-threads', '2', '-ss', str(start), '-i', str(source), '-t', str(duration), '-an']
encoding = ['-c:v', 'libx264', '-preset', 'fast', '-crf', '18', '-pix_fmt', 'yuv420p', '-g', '50', '-threads', '4', '-movflags', '+faststart']
publish('hero-film-hq-desktop.mp4', [*common, '-vf', 'scale=2560:1440:flags=lanczos,setsar=1', *encoding])
publish('hero-film-hq-mobile.mp4', [*common, '-vf', 'crop=1214:2160:1312:0,scale=1080:1920:flags=lanczos,setsar=1', *encoding])
run(['-ss', '20.5', '-i', str(webm), '-frames:v', '1', '-q:v', '2', str(out / 'hero-film-4k-desktop-poster.jpg')])
run(['-ss', '20.5', '-i', str(out / 'hero-film-hq-mobile.mp4'), '-frames:v', '1', '-q:v', '2', str(out / 'hero-film-hq-mobile-poster.jpg')])
(work / 'edit-manifest.json').write_text(json.dumps({'source': str(source.relative_to(args.media_root)), 'start_seconds': start, 'requested_duration_seconds': duration, 'desktop_native': '3840x2160 VP9, stream copy', 'desktop_fallback': '2560x1440 H264 CRF18', 'mobile': '1080x1920 H264 CRF18 from the 4K original', 'audio': False, 'added_dissolves': False}, indent=2))
print('Native 4K film, MP4 fallback, mobile film, and posters are ready.', flush=True)

