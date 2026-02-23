export function initInput(canvas, state) {
  // ONE SIGNAL: mouse X position (0 to 1)
  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    state.mouseX = (event.clientX - rect.left) / rect.width;
  });
}
