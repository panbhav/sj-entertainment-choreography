"""Create compact WebP delivery variants; preserve all original photographs."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from PIL import Image, ImageOps
import json
files=list(Path('public/images').rglob('*.jpg'))+list(Path('public/media/portfolio').glob('*.jpg'))
def convert(p):
 dest=p.with_suffix('.webp')
 with Image.open(p) as source:
  im=ImageOps.exif_transpose(source).convert('RGB');im.thumbnail((1600,1600),Image.Resampling.LANCZOS);im.save(dest,'WEBP',quality=84,method=5)
 return {'original':'/'+p.relative_to('public').as_posix(),'optimized':'/'+dest.relative_to('public').as_posix(),'before':p.stat().st_size,'after':dest.stat().st_size}
if __name__=='__main__':
 with ThreadPoolExecutor(max_workers=4) as pool: results=list(pool.map(convert,files))
 for file in Path('src').rglob('*.tsx'):
  source=file.read_text(encoding='utf-8');updated=source
  for row in results:updated=updated.replace(row['original'],row['optimized'])
  updated=updated.replace('/images/celebrations/subtypes/${item.id}.jpg','/images/celebrations/subtypes/${item.id}.webp')
  if updated!=source:file.write_text(updated,encoding='utf-8')
 for file in Path('src/content').glob('*.ts'):
  source=file.read_text(encoding='utf-8');updated=source
  for row in results:updated=updated.replace(row['original'],row['optimized'])
  if updated!=source:file.write_text(updated,encoding='utf-8')
 Path('artifacts/site-audit/image-optimization.json').write_text(json.dumps(results,indent=2))
 print(json.dumps({'images':len(results),'beforeMB':round(sum(r['before'] for r in results)/1048576,2),'afterMB':round(sum(r['after'] for r in results)/1048576,2)}))
