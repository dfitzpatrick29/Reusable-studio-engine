export function initInput(canvas, state) {
  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    state.mouseX = x / rect.width; // normalize 0–1
  });
}
