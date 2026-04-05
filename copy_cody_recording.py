import shutil
import os

src = r"C:\Users\howar\Downloads\cody\Recording 2026-04-05 142311.mp4"
dst = r"c:\Users\howar\Desktop\APPS\LANDING PAGES\highland-bridge-co\public\cody_recording.mp4"

if os.path.exists(src):
    shutil.copy2(src, dst)
    print("Copied Successfully")
else:
    print(f"Source not found: {src}")
