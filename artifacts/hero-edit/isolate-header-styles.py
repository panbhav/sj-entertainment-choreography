from pathlib import Path
csspath=Path('src/app/globals.css')
css=csspath.read_text(encoding='utf-8-sig')
marker='/* The homepage navigation sits over the opening film. */'
head, sep, film=css.partition(marker)
if not sep: raise RuntimeError('Film header styles not found')
Path('src/components/common/FilmHeader.css').write_text(marker+film,encoding='utf-8')
csspath.write_text(head.rstrip()+'\n',encoding='utf-8')
header=Path('src/components/common/Header.tsx')
text=header.read_text(encoding='utf-8-sig').replace("import Monogram from './Monogram';", "import Monogram from './Monogram';\nimport './FilmHeader.css';")
header.write_text(text,encoding='utf-8')
