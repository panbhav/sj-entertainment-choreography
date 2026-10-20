'use client';
import { useRef, type PointerEvent } from 'react';

/** CSS sculpture with no canvas, model downloads, or animation library. */
export default function CelebrationSculpture() {
  const scene = useRef<HTMLDivElement>(null);
  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    scene.current?.style.setProperty('--turn-x', `${((event.clientY - bounds.top) / bounds.height - 0.5) * -8}deg`);
    scene.current?.style.setProperty('--turn-y', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 10}deg`);
  }
  function reset() {
    scene.current?.style.setProperty('--turn-x', '0deg');
    scene.current?.style.setProperty('--turn-y', '0deg');
  }
  return <div ref={scene} className="celebration-scene" onPointerMove={move} onPointerLeave={reset} role="img" aria-label="Sculptural golden rings floating on a burgundy stage, celebrating two lives in harmony">
    <div className="scene-grain" /><span className="scene-index">A CELEBRATION OF CONNECTION</span>
    <div className="scene-arch arch-back" /><div className="scene-arch arch-front" />
    <div className="sculpture-world"><div className="sculpture-shadow" /><div className="sculpture-rings"><div className="sculpture-ring ring-one" /><div className="sculpture-ring ring-two" /></div><div className="sculpture-plinth" /><div className="sculpture-plinth plinth-lower" /></div>
    <span className="scene-star star-one">✧</span><span className="scene-star star-two">✦</span>
    <div className="scene-poem">Two stories.<br /><em>One beautiful rhythm.</em></div>
    <span className="scene-edition">SJ / THE CELEBRATION EDIT</span>
    <span className="scene-seal" aria-hidden="true">made<br /><em>with love</em><br />✦</span>
  </div>;
}
