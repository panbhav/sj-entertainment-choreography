"""Prepare the owner-supplied Display Video for the homepage without changing its edit."""
import hashlib
import json
from pathlib import Path
import subprocess
import imageio_ffmpeg

root = Path(__file__).resolve().parents[1]
source = root / 'Assets' / 'Display Video.mp4'
output = root / 'public' / 'media'
evidence = root / 'artifacts' / 'hero-display'
output.mkdir(parents=True, exist_ok=True)
evidence.mkdir(parents=True, exist_ok=True)
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

def encode(name, filters, maxrate):
    destination = output / name
    subprocess.run([
        ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-threads', '2', '-i', str(source),
        '-map', '0:v:0', '-vf', filters, '-an', '-c:v', 'libx264', '-threads', '2',
        '-preset', 'slow', '-crf', '19', '-maxrate', maxrate, '-bufsize', '12M',
        '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-movflags', '+faststart', str(destination),
    ], check=True)
    poster = destination.with_name(destination.stem + '-poster.jpg')
    subprocess.run([
        ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-ss', '5', '-i', str(destination),
        '-frames:v', '1', '-q:v', '2', str(poster),
    ], check=True)
    print(f'{name}: {destination.stat().st_size / 1048576:.2f} MiB', flush=True)
    return {'video': name, 'poster': poster.name, 'bytes': destination.stat().st_size}

desktop = encode('hero-display-desktop.mp4', 'fps=30,scale=1920:1080:flags=lanczos,setsar=1', '6M')
# Retain the full width of the group choreography. Bottom padding blends into the mobile hero.
mobile = encode('hero-display-mobile.mp4', 'fps=30,scale=1080:608:flags=lanczos,setsar=1,pad=1080:810:0:0:color=0x0b1016', '4M')
(evidence / 'manifest.json').write_text(json.dumps({
    'source': 'Assets/Display Video.mp4',
    'source_sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
    'edit': 'Complete original clip; no new cuts, speed changes or added transitions.',
    'desktop': desktop, 'mobile': mobile,
    'mobile_framing': 'Full 16:9 picture, padded below to the existing 4:3 mobile video area; no dancers cropped.',
    'playback': 'Silent H.264 MP4, 30 fps, faststart; original source left unchanged.',
}, indent=2))
