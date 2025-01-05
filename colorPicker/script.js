const redRange = document.querySelector("#redRange");
const greenRange = document.querySelector("#greenRange");
const blueRange = document.querySelector("#blueRange");
const hexRange = document.querySelector("#hexRange");

const redRangeSpan = document.querySelector("#redRangeSpan");
const greenRangeSpan = document.querySelector("#greenRangeSpan");
const blueRangeSpan = document.querySelector("#blueRangeSpan");
const hexRangeSpan = document.querySelector("#hexRangeSpan");

const colorPreview = document.querySelector("#colorPreview");

const copyButton = document.querySelector("#copyButton");

copyButton.addEventListener("click", () => {
  const colorCode = colorPreview.textContent;
  navigator.clipboard.writeText(colorCode).then(() => {
    copyButton.querySelector(".icon").classList.replace("fa-copy", "fa-check");
    setTimeout(() => {
      copyButton
        .querySelector(".icon")
        .classList.replace("fa-check", "fa-copy");
    }, 2000);
  });
});

function updateColorFromRGB() {
  let r = parseInt(redRange.value);
  let g = parseInt(greenRange.value);
  let b = parseInt(blueRange.value);

  redRangeSpan.textContent = r;
  greenRangeSpan.textContent = g;
  blueRangeSpan.textContent = b;

  // Add smooth transition
  requestAnimationFrame(() => {
    colorPreview.style.backgroundColor = `rgb(${r},${g},${b})`;
    colorPreview.textContent = `rgb(${r},${g},${b})`;

    // Adjust text color based on background brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    colorPreview.style.color = brightness > 128 ? "#000" : "#fff";
    copyButton.style.color = brightness > 128 ? "#000" : "#fff";
  });

  let hex = rgbToHex(r, g, b);
  hexRange.value = parseInt(hex.slice(1), 16);
  document.querySelector("#hexDecimal").textContent = parseInt(
    hex.slice(1),
    16
  );
  hexRangeSpan.textContent = hex;
  copyButton.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function rgbToHex(r, g, b) {
  return `#${((r << 16) | (g << 8) | b)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase()}`;
}

function updateColorFromHexRange() {
  document.querySelector("#hexDecimal").textContent = hexRange.value;
  let decimal = parseInt(hexRange.value);
  const r = (decimal >> 16) & 255;
  const g = (decimal >> 8) & 255;
  const b = decimal & 255;

  redRange.value = r;
  greenRange.value = g;
  blueRange.value = b;
  redRangeSpan.textContent = r;
  greenRangeSpan.textContent = g;
  blueRangeSpan.textContent = b;

  let hex = rgbToHex(r, g, b);

  colorPreview.style.backgroundColor = hex;
  colorPreview.textContent = hex;
  hexRangeSpan.textContent = hex;
  copyButton.style.backgroundColor = `rgb(${r},${g},${b})`;

  requestAnimationFrame(() => {
    colorPreview.style.backgroundColor = `rgb(${r},${g},${b})`;
    colorPreview.textContent = `rgb(${r},${g},${b})`;

    // Adjust text color based on background brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    colorPreview.style.color = brightness > 128 ? "#000" : "#fff";
    copyButton.style.color = brightness > 128 ? "#000" : "#fff";
  });
}

redRange.addEventListener("input", updateColorFromRGB);
greenRange.addEventListener("input", updateColorFromRGB);
blueRange.addEventListener("input", updateColorFromRGB);
hexRange.addEventListener("input", updateColorFromHexRange);

updateColorFromRGB();
