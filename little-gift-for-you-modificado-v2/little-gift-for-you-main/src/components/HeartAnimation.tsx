import { useEffect, useRef } from "react";

// Corazón paramétrico (igual que en el código original)
const N = 1600;
const XS: number[] = [];
const YS: number[] = [];
for (let i = 0; i < N; i++) {
  const t = (i / (N - 1)) * 2 * Math.PI;
  XS.push(16 * Math.pow(Math.sin(t), 3));
  YS.push(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
}

const TOTAL_FRAMES = 240;
const DRAW_FRAMES = 185;

export function HeartAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = 560;
    const H = 460;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    // mundo matemático: x ∈ [-18, 18], y ∈ [-17, 16]
    const toPx = (x: number, y: number): [number, number] => [
      ((x + 18) / 36) * W,
      ((16 - y) / 33) * H,
    ];

    let frame = 0;
    let raf = 0;
    let last = 0;

    const render = (now: number) => {
      if (now - last >= 35) {
        last = now;
        frame = Math.min(frame + 1, TOTAL_FRAMES - 1);

        // fondo
        ctx.fillStyle = "#090914";
        ctx.fillRect(0, 0, W, H);

        // cuadrícula tenue
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.setLineDash([4, 5]);
        ctx.lineWidth = 1;
        for (let gx = -16; gx <= 16; gx += 4) {
          const [px] = toPx(gx, 0);
          ctx.beginPath();
          ctx.moveTo(px, 0);
          ctx.lineTo(px, H);
          ctx.stroke();
        }
        for (let gy = -16; gy <= 14; gy += 4) {
          const [, py] = toPx(0, gy);
          ctx.beginPath();
          ctx.moveTo(0, py);
          ctx.lineTo(W, py);
          ctx.stroke();
        }
        ctx.setLineDash([]);

        // corazón fantasma
        ctx.strokeStyle = "rgba(232,84,122,0.06)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const [px, py] = toPx(XS[i]!, YS[i]!);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        // trazo progresivo
        let n = N;
        if (frame < DRAW_FRAMES) {
          const progress = Math.pow(frame / (DRAW_FRAMES - 1), 1.25);
          n = Math.max(2, Math.floor(progress * N));
        }
        const grad = ctx.createLinearGradient(0, 0, W, H);
        grad.addColorStop(0, "#f2a7bb");
        grad.addColorStop(1, "#e8547a");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.8;
        ctx.shadowColor = "rgba(232,84,122,0.7)";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
          const [px, py] = toPx(XS[i]!, YS[i]!);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // cursor
        if (frame < DRAW_FRAMES) {
          const [px, py] = toPx(XS[n - 1]!, YS[n - 1]!);
          ctx.fillStyle = "#f6d7de";
          ctx.shadowColor = "#e8547a";
          ctx.shadowBlur = 16;
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

      }

      if (frame < TOTAL_FRAMES - 1) {
        raf = requestAnimationFrame(render);
      }
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "auto", aspectRatio: "560 / 460" }}
      className="rounded-2xl outline outline-1 -outline-offset-1 outline-white/10"
      aria-label="Animación de un corazón dibujado con Python"
    />
  );
}
