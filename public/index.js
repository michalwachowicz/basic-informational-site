(() => {
  const pathname = window.location.pathname;
  const page = pathname !== "/" ? pathname.split("/").pop() : "index.html";
  const title = document.title;

  console.log(page, title);

  const links = {
    "index.html": "Home Page",
    "about.html": "About",
    "contact-me.html": "Contact Me",
  };

  const container = document.querySelector(".container");
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = title;

  const list = document.createElement("ul");
  Object.entries(links).forEach(([key, value]) => {
    const listItem = document.createElement("li");
    if (key === page) listItem.classList.add("active");

    const link = document.createElement("a");
    link.href = `./${key}`;
    link.textContent = value;

    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  container.append(pageTitle, list);
})();
