const btns = document.querySelectorAll(".explan_open");
const explanations = document.querySelectorAll(".explanation");

const arr = [];

if (btns.length && explanations.length) {
  explanations.forEach((e) => {
    const content = e.innerHTML;
    const index = +e.parentElement.id.toLowerCase().replace(/[^0-9]/g, "");
    arr[index] = content;
  });

  btns.forEach((e, i) => {
    const parent = e.parentElement;
    const id = e.id;
    const index = e.parentElement.parentElement.parentElement.id
      .toLowerCase()
      .replace(/[^0-9]/g, "");
    const text = e.innerHTML;
    e.remove();
    const btn = document.createElement("span");
    btn.classList.add("q-btn");
    btn.classList.add("button-gray");
    btn.classList.add("explan_open");
    btn.id = id;
    btn.innerHTML = text;
    btn.addEventListener("click", () => {
      const elem = document.querySelector(`#q${index} .explanation`);
      elem.innerHTML = arr[index];
      const display = elem.style.display;
      if (display === "none") {
        elem.style.display = "block";
        btn.innerHTML = "Сховати коментар";
      } else {
        elem.style.display = "none";
        btn.innerHTML = text;
      }
    });
    parent.append(btn);
  });
}
