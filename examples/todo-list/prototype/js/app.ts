import { DOM } from "./dom";

let uid = 1;

DOM.onload(() => {
  //
  // Init
  //
  const items = DOM.div[1].children.div[1].html("");
  const item = items.children.div[1];
  const input = DOM.div[0].children.input;

  DOM.a[0].click(() => {
    let text = input.val();
    input.val("");
    let newItem = item.clone();
    let id = `todo${uid++}`;
    newItem.children.input.id = id;
    newItem.children.label.for = id;
    newItem.children.label.text = text;
    items.append(newItem);
  });
});
// document.addEventListener("DOMContentLoaded", function(event) {});
