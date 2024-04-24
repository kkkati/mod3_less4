document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  } else {
    if (event.target.dataset.type === "update") {
      const id = event.target.dataset.id;

      const newTitleNode = prompt("Введите новое название");
      update(id, newTitleNode).then((rawResponse) => console.log(rawResponse));
      event.target.closest("li").querySelector("span").textContent =
        newTitleNode;
    }
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}

async function update(id, newTitleNode) {
  await fetch(`/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      id,
      title: newTitleNode,
    }),
  });
}

// module.exports = {
//   getNewTitle,
// };
