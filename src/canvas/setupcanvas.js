export function setupCanvas(canvas, ctx, state) {
  function resize() {
    const { innerWidth, innerHeight } = window;
    const dpi = state.dpi;

    canvas.width = innerWidth * dpi;
    canvas.height = innerHeight * dpi;
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";

    ctx.setTransform(dpi, 0, 0, dpi, 0, 0);
  }

  window.addEventListener("resize", resize);
  resize();
}
