import os
import shutil

images = {
    r"C:\Users\howar\.gemini\antigravity\brain\18078a07-d6b8-49c9-8bfd-123f620c35ff\usa_made_1775423788605.png": r"c:\Users\howar\Desktop\APPS\LANDING PAGES\highland-bridge-co\public\benefit_usa.png",
    r"C:\Users\howar\.gemini\antigravity\brain\18078a07-d6b8-49c9-8bfd-123f620c35ff\legacy_20_years_1775423802162.png": r"c:\Users\howar\Desktop\APPS\LANDING PAGES\highland-bridge-co\public\benefit_legacy.png",
    r"C:\Users\howar\.gemini\antigravity\brain\18078a07-d6b8-49c9-8bfd-123f620c35ff\heavy_capacity_1775423816877.png": r"c:\Users\howar\Desktop\APPS\LANDING PAGES\highland-bridge-co\public\benefit_capacity.png",
    r"C:\Users\howar\.gemini\antigravity\brain\18078a07-d6b8-49c9-8bfd-123f620c35ff\nationwide_map_1775423829995.png": r"c:\Users\howar\Desktop\APPS\LANDING PAGES\highland-bridge-co\public\benefit_nationwide.png",
    r"C:\Users\howar\.gemini\antigravity\brain\18078a07-d6b8-49c9-8bfd-123f620c35ff\custom_specs_1775423843516.png": r"c:\Users\howar\Desktop\APPS\LANDING PAGES\highland-bridge-co\public\benefit_specs.png",
    r"C:\Users\howar\.gemini\antigravity\brain\18078a07-d6b8-49c9-8bfd-123f620c35ff\fast_delivery_1775423858223.png": r"c:\Users\howar\Desktop\APPS\LANDING PAGES\highland-bridge-co\public\benefit_delivery.png"
}

for src, dst in images.items():
    if os.path.exists(src):
        shutil.copy(src, dst)
        print(f"Copied {os.path.basename(src)} to {os.path.basename(dst)}")
    else:
        print(f"FAILED: {src} not found")
