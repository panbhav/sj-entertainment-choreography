from pathlib import Path
import re
folder=Path('src/components/home')
css=(folder/'CinematicHero.module.css').read_text(encoding='utf-8-sig')
# The project's Tailwind Turbopack loader handles .css as global styles;
# use namespaced selectors so this component remains isolated.
names=set(re.findall(r'\.([a-zA-Z][a-zA-Z0-9_-]*)',css))
for name in sorted(names,key=len,reverse=True):
 css=re.sub(r'\.'+re.escape(name)+r'(?![\w-])','.cinema-'+name,css)
css=css.replace('.cinema-background {', '.cinema-background > picture { position: absolute; inset: 0; display: block; }\n.cinema-background {')
(folder/'CinematicHero.css').write_text(css,encoding='utf-8')
component=(folder/'CinematicHero.tsx').read_text(encoding='utf-8-sig')
component=component.replace("import styles from './CinematicHero.module.css';", "import './CinematicHero.css';")
component=re.sub(r'styles\.(\w+)',lambda m: "'cinema-"+m.group(1)+"'",component)
(folder/'CinematicHero.tsx').write_text(component,encoding='utf-8')
(folder/'CinematicHero.module.css').unlink()
