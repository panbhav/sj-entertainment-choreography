import os
import subprocess
import json

src_dir = r"C:\Users\Lenovo\OneDrive\Pictures\SJ Choreography"
ffmpeg_exe = r"C:\Users\Lenovo\AppData\Local\Programs\Python\Python312\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"

print(f"Scanning: {src_dir}\n")

categories = {}

for root, dirs, files in os.walk(src_dir):
    rel_folder = os.path.relpath(root, src_dir)
    video_files = [f for f in files if f.lower().endswith(('.mp4', '.mov', '.m4v', '.avi'))]
    image_files = [f for f in files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
    if video_files or image_files:
        categories[rel_folder] = {
            'videos': video_files,
            'images': image_files
        }

total_vids = 0
total_imgs = 0

for folder, data in sorted(categories.items()):
    num_vids = len(data['videos'])
    num_imgs = len(data['images'])
    total_vids += num_vids
    total_imgs += num_imgs
    print(f"[{folder}] -> {num_vids} videos, {num_imgs} images")
    if data['images']:
        print(f"   Images: {', '.join(data['images'][:4])}")
    if data['videos']:
        print(f"   Videos: {', '.join(data['videos'][:5])}")

print(f"\nTOTAL: {total_vids} videos, {total_imgs} images across {len(categories)} categories.")
