function generateGradientDataURL() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();

  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 100;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 200, 100);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 200, 100);

  return canvas.toDataURL();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default generateGradientDataURL;
