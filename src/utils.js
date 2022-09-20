export function createElement({
  tag = "div",
  classNames = [],
  textContent = "",
  dataset = {},
}) {
  // Create elm with tag
  const elm = document.createElement(tag);

  // Add classes
  classNames.forEach((className) => {
    elm.classList.add(className);
  });

  // Set textContent
  elm.textContent = textContent;

  // Set dataset
  for (const key in dataset) {
    elm.dataset[key] = dataset[key];
  }

  return elm;
}
