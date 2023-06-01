const getHtmlElemWidth = (el: HTMLElement) =>
  Number.parseInt(window.getComputedStyle(el).getPropertyValue('width'));

export default getHtmlElemWidth;
