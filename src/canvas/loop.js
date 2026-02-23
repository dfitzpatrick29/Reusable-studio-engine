export function startLoop(canvas, ctx, state) {
  function frame(timestamp) {
    state.time = timestamp / 1000; // seconds

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    ctx.clearRect(0, 0, w, h);

    const centerX = w * state.mouseX;
    const centerY = h / 2;
    const baseRadius = 30;
    const pulse = 10 * Math.sin(state.time * 4);
    const radius = baseRadius + pulse;

    ctx.fillStyle = "#f94144";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
