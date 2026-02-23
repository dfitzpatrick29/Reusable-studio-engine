import { setupCanvas } from "./src/canvas/setupCanvas.js";
import { startLoop } from "./src/canvas/loop.js";
import { initInput } from "./src/input/input.js";

const canvas = document.getElementById("studio-canvas");
const ctx = canvas.getContext("2d");

const state = {
  time: 0,
  dpi: window.devicePixelRatio || 1,
  mouseX: 0, // one signal for now
};

setupCanvas(canvas, ctx, state);
initInput(canvas, state);
startLoop(canvas, ctx, state);
