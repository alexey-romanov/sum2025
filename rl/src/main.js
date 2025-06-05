import { f } from "./module.js";
import { add } from "./math.js";
import { Pane } from "tweakpane";

window.addEventListener("load", () => {
  const PARAMS = {
    factor: 123,
    title: "hello",
    color: "#ff0055",
  };

  const pane = new Pane();

  pane.addBinding(PARAMS, "factor");
  pane.addBinding(PARAMS, "title");
  pane.addBinding(PARAMS, "color");

  f();
  add(1, 1);
});
