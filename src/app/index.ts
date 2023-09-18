import { App } from "./core/app";

window.addEventListener('load', (e) => {
  const container = document.querySelector('.container') as HTMLDivElement;
  container.innerHTML = `<h1>This is <span style="color: #3178C6">TypeScript</span> starter</h1>`;
  container.innerHTML += `<h2>${App.getInstance().message}</h2>`;
});