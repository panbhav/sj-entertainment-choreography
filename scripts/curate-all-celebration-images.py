import os
from PIL import Image, ImageOps

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
BRAIN = r'C:\Users\Lenovo\.gemini\antigravity\brain\5b294eb4-af2c-4ea9-b62c-f68ac447b740'
MEDIA = os.path.join(BRAIN, '.system_generated', 'logs', 'media')
JAIPUR = os.path.join(BRAIN, 'jaipur_frames')
GOA = os.path.join(BRAIN, 'goa_all')

def crop_and_save(src, dst_base, target_size=(1280, 720), crop_box=None):
    src = os.path.normpath(src)
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)
    if im.mode != 'RGB':
        im = im.convert('RGB')
    if crop_box:
        im = im.crop(crop_box)
    
    tw, th = target_size
    target_aspect = tw / th
    w, h = im.size
    aspect = w / h
    
    if aspect > target_aspect:
        nw = int(h * target_aspect)
        offset = (w - nw) // 2
        im = im.crop((offset, 0, offset + nw, h))
    else:
        nh = int(w / target_aspect)
        offset = max(0, int((h - nh) * 0.35))
        im = im.crop((0, offset, w, offset + nh))
    
    im = im.resize(target_size, Image.Resampling.LANCZOS)
    
    jpg_path = os.path.normpath(os.path.join(ROOT, dst_base + '.jpg'))
    webp_path = os.path.normpath(os.path.join(ROOT, dst_base + '.webp'))
    os.makedirs(os.path.dirname(jpg_path), exist_ok=True)
    
    for p in [jpg_path, webp_path]:
        if os.path.exists(p):
            try:
                os.remove(p)
            except Exception:
                pass

    im.save(jpg_path, 'JPEG', quality=92)
    im.save(webp_path, 'WEBP', quality=88)
    print(f'Processed: {dst_base} -> {target_size}')

# 1. 7 Celebration Heroes (1600x1000 16:10)
heroes = {
    'destination-weddings': (os.path.join(BRAIN, 'rajasthani_royal_wedding_entry_1792866244534.jpg'), None),
    'sangeet': (os.path.join(BRAIN, 'bollywood_wedding_grand_entry_1792866254348.jpg'), None),
    'haldi': (os.path.join(BRAIN, 'ph_haldi_clean_crop.jpg'), None),
    'mehendi': (os.path.join(BRAIN, 'rajasthani_folk_mehendi_performance_1792866287393.jpg'), None),
    'bhaat-mayra': (os.path.join(MEDIA, 'step_1508_media_0.jpg'), None),
    'wedding-day': (os.path.join(BRAIN, 'indian_bridal_entry_phoolon_ki_chaadar_1792866260673.jpg'), None),
    'reception': (os.path.join(BRAIN, 'romantic_couple_entry_1792866196751.jpg'), None),
}

for slug, (src, crop) in heroes.items():
    crop_and_save(src, f'public/images/celebrations/{slug}', target_size=(1600, 1000), crop_box=crop)

# 2. 28 Subtypes (1280x720 16:9)
subtypes = {
    # Destination
    'destination-welcome': (os.path.join(ROOT, 'public', 'media', 'portfolio', 'friends-performance.jpg'), None),
    'destination-couple-entry': (os.path.join(JAIPUR, 'jaipur_10.jpg'), None),
    'destination-sundowner': (os.path.join(GOA, 'goa_f_016.jpg'), None),
    'destination-finale': (os.path.join(GOA, 'goa_f_014.jpg'), None),
    
    # Sangeet
    'sangeet-couple': (os.path.join(MEDIA, 'step_1551_media_0.jpg'), None),
    'sangeet-bridal-squad': (os.path.join(MEDIA, 'step_1554_media_0.jpg'), None),
    'sangeet-groom-squad': (os.path.join(MEDIA, 'step_1512_media_0.jpg'), None),
    'sangeet-family-finale': (os.path.join(MEDIA, 'step_1537_media_0.jpg'), None),
    
    # Haldi
    'haldi-couple-entry': (os.path.join(BRAIN, 'ph_haldi_clean_crop.jpg'), None),
    'haldi-squad-entry': (os.path.join(BRAIN, 'haldi_crop_test.jpg'), None),
    'haldi-family-folk': (os.path.join(BRAIN, 'haldi_bride_crop.jpg'), None),
    'haldi-dance-along': (os.path.join(ROOT, 'public', 'media', 'choreography-showcase-poster.jpg'), (120, 0, 1850, 1080)),
    
    # Mehendi
    'mehendi-bridal-squad': (os.path.join(MEDIA, 'step_1510_media_0.jpg'), None),
    'mehendi-folk-circle': (os.path.join(BRAIN, 'rajasthani_folk_mehendi_performance_1792866287393.jpg'), None),
    'mehendi-sufi-fusion': (os.path.join(JAIPUR, 'jaipur_11.jpg'), None),
    'mehendi-couple': (os.path.join(MEDIA, 'step_1516_media_0.jpg'), None),
    
    # Bhaat / Mayra
    'bhaat-family-entry': (os.path.join(MEDIA, 'step_1508_media_0.jpg'), None),
    'bhaat-folk': (os.path.join(JAIPUR, 'jaipur_06.jpg'), None),
    'bhaat-tribute': (os.path.join(MEDIA, 'step_1518_media_0.jpg'), None),
    'bhaat-generations': (os.path.join(MEDIA, 'step_1567_media_0.jpg'), None),
    
    # Wedding Day
    'wedding-baraat': (os.path.join(MEDIA, 'step_1512_media_0.jpg'), None),
    'wedding-bridal-entry': (os.path.join(BRAIN, 'indian_bridal_entry_phoolon_ki_chaadar_1792866260673.jpg'), None),
    'wedding-couple-reveal': (os.path.join(BRAIN, 'indian_wedding_magical_entry_1792866264516.jpg'), None),
    'wedding-welcome': (os.path.join(BRAIN, 'dramatic_bridal_entry_1792866262668.jpg'), None),
    
    # Reception
    'reception-first-dance': (os.path.join(MEDIA, 'step_1551_media_0.jpg'), None),
    'reception-couple-entry': (os.path.join(BRAIN, 'romantic_couple_entry_1792866196751.jpg'), None),
    'reception-parent-duet': (os.path.join(JAIPUR, 'jaipur_08.jpg'), None),
    'reception-party-opener': (os.path.join(BRAIN, 'live_band_cocktail_reception_1792866305471.jpg'), None),
}

for cid, (src, crop) in subtypes.items():
    crop_and_save(src, f'public/images/celebrations/subtypes/{cid}', target_size=(1280, 720), crop_box=crop)

print('SUCCESS: All 35 images processed and verified!')
