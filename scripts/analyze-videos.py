import os
import subprocess
import json

src_dir = r"C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography"
ffmpeg_exe = r"C:\Users\Lenovo\AppData\Local\Programs\Python\Python312\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"

def get_video_info(filepath):
    # Run ffprobe via ffmpeg to get duration and dimensions
    cmd = [
        ffmpeg_exe,
        "-i", filepath,
        "-hide_banner"
    ]
    res = subprocess.run(cmd, stderr=subprocess.PIPE, stdout=subprocess.PIPE, text=True, errors='ignore')
    output = res.stderr
    
    duration = None
    width = None
    height = None
    
    for line in output.splitlines():
        if "Duration:" in line:
            parts = line.split("Duration:")[1].split(",")[0].strip()
            duration = parts
        if "Video:" in line:
            # find dimensions e.g. 1920x1080 or 1080x1920
            import re
            m = re.search(r"(\d{3,4})x(\d{3,4})", line)
            if m:
                width, height = int(m.group(1)), int(m.group(2))
    return {
        'path': filepath,
        'filename': os.path.basename(filepath),
        'size_mb': round(os.path.getsize(filepath) / (1024 * 1024), 1),
        'duration': duration,
        'dimensions': f"{width}x{height}" if width and height else None,
        'width': width,
        'height': height,
        'is_vertical': (height > width) if (width and height) else False
    }

# Probe select high-potential folders
targets = [
    os.path.join(src_dir, "Sangeet Highlit"),
    os.path.join(src_dir, "Entry"),
    os.path.join(src_dir, "BTS Video"),
    os.path.join(src_dir, "Sangeet Reels"),
    os.path.join(src_dir, "performance"),
    os.path.join(src_dir, "Dandiya"),
]

for target in targets:
    folder_name = os.path.basename(target)
    print(f"\n--- Checking: {folder_name} ---")
    if not os.path.exists(target):
        continue
    files = [os.path.join(target, f) for f in os.listdir(target) if f.lower().endswith(('.mp4', '.mov')) and not f.startswith('.trashed')]
    for f in files[:8]:
        try:
            info = get_video_info(f)
            print(f"  {info['filename']}: {info['size_mb']}MB | {info['duration']} | {info['dimensions']} | {'Vertical (Reel)' if info['is_vertical'] else 'Horizontal (Landscape)'}")
        except Exception as e:
            print(f"  Error reading {f}: {e}")
