const scrollTo = (e) => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href").replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);
};

export default scrollTo;
