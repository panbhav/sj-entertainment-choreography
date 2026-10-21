import os
import shutil
import subprocess

src_dir = r"C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography"
ffmpeg_exe = r"C:\Users\Lenovo\AppData\Local\Programs\Python\Python312\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
dest_media_dir = os.path.abspath(r"public\media")

os.makedirs(dest_media_dir, exist_ok=True)

# 1. Copy Brand Logos
logo_src = os.path.join(src_dir, "SJ Logos", "new1", "golden-sj-logo-png.png")
if os.path.exists(logo_src):
    shutil.copy2(logo_src, os.path.join(dest_media_dir, "sj-logo-gold.png"))
    print("Copied golden logo to public/media/sj-logo-gold.png")

logo_white = os.path.join(src_dir, "SJ Logos", "new1", "sj-logo-png-white.png")
if os.path.exists(logo_white):
    shutil.copy2(logo_white, os.path.join(dest_media_dir, "sj-logo-white.png"))
    print("Copied white logo to public/media/sj-logo-white.png")

# Plan: Mapping of slots to raw video files, trim range, and target dimensions
video_jobs = [
    {
        "id": "hero-main",
        "raw_path": os.path.join(src_dir, "Sangeet Highlit", "Drov X Meenu.mp4"),
        "start": "00:00:05",
        "duration": "20",
        "output_name": "hero-main.mp4",
        "poster_name": "hero-main-poster.jpg",
        "scale": "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2",
        "title": "Drov & Meenu — Signature Sangeet Celebration",
    },
    {
        "id": "home-slot-couple",
        "raw_path": os.path.join(src_dir, "Sangeet Reels", "Bridegroom.mp4"),
        "start": "00:00:10",
        "duration": "25",
        "output_name": "slot-couple.mp4",
        "poster_name": "slot-couple-poster.jpg",
        "scale": "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2",
        "title": "Bespoke Couple First Dance",
    },
    {
        "id": "home-slot-family",
        "raw_path": os.path.join(src_dir, "Sangeet Highlit", "02 REEL.mp4"),
        "start": "00:00:02",
        "duration": "25",
        "output_name": "slot-family.mp4",
        "poster_name": "slot-family-poster.jpg",
        "scale": "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2",
        "title": "Grand Family Sangeet Finale",
    },
    {
        "id": "home-slot-entry",
        "raw_path": os.path.join(src_dir, "Entry", "VID_20260628_032818_092.mp4"),
        "start": "00:00:00",
        "duration": "24",
        "output_name": "slot-entry.mp4",
        "poster_name": "slot-entry-poster.jpg",
        "scale": "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2",
        "title": "Royal Couple Entrance with Cold Pyro",
    },
    {
        "id": "about-bts-rehearsal",
        "raw_path": os.path.join(src_dir, "BTS Video", "Agarwal Family 24 June.mp4"),
        "start": "00:00:05",
        "duration": "25",
        "output_name": "bts-rehearsal.mp4",
        "poster_name": "bts-rehearsal-poster.jpg",
        "scale": "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2",
        "title": "Rehearsal Studio Moments with Sajid & Joya",
    },
    {
        "id": "about-stage-production",
        "raw_path": os.path.join(src_dir, "BTS Video", "Raja BTS Video.mp4"),
        "start": "00:00:15",
        "duration": "25",
        "output_name": "stage-production.mp4",
        "poster_name": "stage-production-poster.jpg",
        "scale": "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2",
        "title": "On-Ground Stage & Sound Coordination",
    },
    {
        "id": "choreography-hero",
        "raw_path": os.path.join(src_dir, "Sangeet Reels", "Haldi Dance.mp4"),
        "start": "00:00:05",
        "duration": "25",
        "output_name": "choreography-showcase.mp4",
        "poster_name": "choreography-showcase-poster.jpg",
        "scale": "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2",
        "title": "Vibrant Haldi & Sangeet Celebrations",
    },
    {
        "id": "entries-hero",
        "raw_path": os.path.join(src_dir, "Entry", "Entry Final.mp4"),
        "start": "00:00:30",
        "duration": "25",
        "output_name": "entries-showcase.mp4",
        "poster_name": "entries-showcase-poster.jpg",
        "scale": "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2",
        "title": "Grand Theatrical Entry Production",
    },
]

for job in video_jobs:
    raw_path = job["raw_path"]
    if not os.path.exists(raw_path):
        print(f"File not found: {raw_path}")
        continue

    out_video = os.path.join(dest_media_dir, job["output_name"])
    out_poster = os.path.join(dest_media_dir, job["poster_name"])

    print(f"\nProcessing {job['id']} from {os.path.basename(raw_path)}...")

    # 1. Transcode trimmed, web-optimized video (H.264, 2M bitrate, faststart, aac)
    cmd_video = [
        ffmpeg_exe,
        "-y",
        "-ss", job["start"],
        "-i", raw_path,
        "-t", job["duration"],
        "-vf", job["scale"],
        "-c:v", "libx264",
        "-preset", "fast",
        "-crf", "23",
        "-maxrate", "2.5M",
        "-bufsize", "5M",
        "-c:a", "aac",
        "-b:a", "128k",
        "-movflags", "+faststart",
        out_video
    ]
    subprocess.run(cmd_video, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    if os.path.exists(out_video):
        size_mb = round(os.path.getsize(out_video) / (1024 * 1024), 2)
        print(f"  -> Generated {job['output_name']} ({size_mb} MB)")
    else:
        print(f"  -> Failed to generate {job['output_name']}")

    # 2. Extract high quality poster frame
    cmd_poster = [
        ffmpeg_exe,
        "-y",
        "-ss", "00:00:02",
        "-i", out_video,
        "-vframes", "1",
        "-q:v", "2",
        out_poster
    ]
    subprocess.run(cmd_poster, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if os.path.exists(out_poster):
        print(f"  -> Extracted poster {job['poster_name']}")

print("\nAll target videos processed successfully!")
