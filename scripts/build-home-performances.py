"""Prepare the three owner-supplied homepage showcase films, preserving their full edits and audio."""
import concurrent.futures
import hashlib
import json
from pathlib import Path
import subprocess
import imageio_ffmpeg

root = Path(__file__).resolve().parents[1]
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
output = root / 'public' / 'media' / 'home-performances'
evidence = root / 'artifacts' / 'home-performances'
output.mkdir(parents=True, exist_ok=True)
evidence.mkdir(parents=True, exist_ok=True)
clips = [('1st.mp4', 'bridegroom-performance', 12), ('2nd .mp4', 'cousins-performance', 12), ('3rd.mp4', 'individual-performance', 4)]

def prepare(clip):
    filename, slug, poster_time = clip
    source = root / 'Assets' / '123' / filename
    destination = output / f'{slug}.mp4'
    subprocess.run([ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-threads', '2', '-filter_threads', '1', '-i', str(source),
        '-map', '0:v:0', '-map', '0:a:0?', '-vf', 'scale=1920:1080:flags=lanczos,setsar=1',
        '-c:v', 'libx264', '-threads', '2', '-preset', 'veryfast', '-crf', '21', '-maxrate', '5M', '-bufsize', '10M',
        '-pix_fmt', 'yuv420p', '-c:a', 'copy', '-movflags', '+faststart', str(destination)], check=True)
    poster = output / f'{slug}-poster.jpg'
    subprocess.run([ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-ss', str(poster_time),
        '-i', str(destination), '-frames:v', '1', '-q:v', '2', str(poster)], check=True)
    print(f'{filename} -> {destination.name}: {destination.stat().st_size / 1048576:.2f} MiB', flush=True)
    return {'source': f'Assets/123/{filename}', 'source_sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
        'video': destination.name, 'poster': poster.name, 'poster_time_seconds': poster_time,
        'bytes': destination.stat().st_size, 'dimensions': '1920x1080', 'edit': 'Complete supplied edit; original audio preserved.'}

with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
    records = list(pool.map(prepare, clips))
(evidence / 'manifest.json').write_text(json.dumps(records, indent=2))
