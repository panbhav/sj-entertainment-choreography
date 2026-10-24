"""Build the website's silent hero loops from original client footage.
Originals are read only. Pass --media-root to use a different source folder.
"""
import argparse, json, subprocess
from pathlib import Path
import imageio_ffmpeg

parser = argparse.ArgumentParser()
parser.add_argument('--media-root', type=Path, default=Path(r'C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography'))
parser.add_argument('--reuse-clips', action='store_true', help='Reuse already prepared shots for this edit')
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
work = root / 'artifacts' / 'hero-edit'
out = root / 'public' / 'media'
work.mkdir(parents=True, exist_ok=True)
out.mkdir(parents=True, exist_ok=True)
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
# Each shot is 4.4s. Four 0.35s dissolves create a 20.6s edit.
shots = {
    'desktop': [
        ('Sangeet Highlit/Rs Sangeet Highlights.mp4', 59.7, 'Couple dance'),
        ('Sangeet Highlit/jaipur highlight.mp4', 43.5, 'Family duet'),
        ('Sangeet Highlit/Rs Sangeet Highlights.mp4', 48.6, 'Family and friends'),
        ('Sangeet Highlit/Rs Sangeet Highlights.mp4', 68.7, 'Bridal performance'),
        ('Sangeet Highlit/jaipur highlight.mp4', 88.4, 'Stage finale'),
    ],
    'mobile': [
        ('Sangeet Highlit/Anuj x Ramya.MP4', 104.8, 'Couple dance, portrait original'),
        ('Sangeet Highlit/jaipur highlight.mp4', 43.5, 'Family duet, centre framing'),
        ('Sangeet Highlit/Rs Sangeet Highlights.mp4', 48.6, 'Family and friends, centre framing'),
        ('Sangeet Highlit/Anuj x Ramya.MP4', 64.2, 'Bridal performance, portrait original'),
        ('Sangeet Highlit/Rs Sangeet Highlights.mp4', 68.7, 'Stage finale, centre framing'),
    ],
}

def run(arguments):
    result = subprocess.run([ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', *arguments], capture_output=True, text=True, errors='replace')
    if result.returncode:
        raise RuntimeError(result.stderr[-3000:])

for variant, sequence in shots.items():
    width, height = (1600, 900) if variant == 'desktop' else (720, 1280)
    clips = []
    for index, (relative, start, label) in enumerate(sequence):
        source = args.media_root / relative
        if not source.is_file():
            raise FileNotFoundError(source)
        clip = work / f'{variant}-{index}.mp4'
        if not (args.reuse_clips and clip.exists() and clip.stat().st_size > 1000):
            run(['-ss', str(start), '-i', str(source), '-t', '4.4', '-an', '-vf', f'fps=30,scale={width}:{height}:force_original_aspect_ratio=increase,crop={width}:{height},setsar=1,format=yuv420p', '-c:v', 'libx264', '-preset', 'fast', '-crf', '20', '-threads', '2', str(clip)])
        clips.append(clip)
        print(f'{variant}: prepared {label}', flush=True)
    inputs = [item for clip in clips for item in ['-i', str(clip)]]
    graph = [f'[{i}:v]settb=AVTB,setpts=PTS-STARTPTS,fps=30[v{i}]' for i in range(len(clips))]
    last = 'v0'
    for index in range(1, len(clips)):
        tag = f'mix{index}'
        graph.append(f'[{last}][v{index}]xfade=transition=fade:duration=0.35:offset={4.05*index:.2f},fps=30[{tag}]')
        last = tag
    # Close the loop by dissolving into the opening frame near the end.
    graph.append(f'[0:v]trim=duration=0.35,setpts=PTS-STARTPTS,settb=AVTB,fps=30[opening]')
    graph.append(f'[{last}][opening]xfade=transition=fade:duration=0.35:offset=20.25,format=yuv420p[final]')
    target = out / f'hero-film-{variant}.mp4'
    run([*inputs, '-filter_complex_threads', '2', '-filter_complex', ';'.join(graph), '-map', '[final]', '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '25', '-maxrate', '2400k' if variant == 'desktop' else '1500k', '-bufsize', '4800k' if variant == 'desktop' else '3000k', '-threads', '2', '-g', '60', '-movflags', '+faststart', '-t', '20.6', str(target)])
    run(['-ss', '1', '-i', str(target), '-frames:v', '1', '-q:v', '3', str(out / f'hero-film-{variant}-poster.jpg')])
    print(f'{target.name}: {target.stat().st_size / 1048576:.2f} MiB', flush=True)
(work / 'edit-manifest.json').write_text(json.dumps({'duration_seconds': 20.6, 'audio': False, 'transition_seconds': .35, 'shots': shots}, indent=2))
print('Both hero films and posters are ready.', flush=True)

