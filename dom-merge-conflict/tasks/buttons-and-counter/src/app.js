//increments the number in a node's text
import { main } from "./main.js";
import { header } from "./header.js";

function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
<<<<<<< HEAD
  const body = document.createElement("div");

  const header = document.createElement("header");
  header.innerHTML = `
        <h1>Number Counter</h1>
        <p>A simple counter. Press increment or decrement to change the count.</p>
    `;
  body.appendChild(header);

  const main = document.createElement("main");
  main.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
    `;
  body.appendChild(main);
=======
  const body = document.createElement("body");
  main(body);
  header(body);

  const button = body.querySelector("#increment");
>>>>>>> 188a80f8492a18f66f9b07e250cc28e035a5f654
  const counter = body.querySelector("#counter");

  const incButton = body.querySelector("#increment");
  incButton.addEventListener("click", () => {
    increment(counter);
  });

  const decButton = body.querySelector("#decrement");
  decButton.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
