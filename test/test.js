import { APNotification } from "../index.js";

const APN = new APNotification({ position: "bottom-right" });

const variations = ["warning", "error", "notification"];

[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((item, index) => {
  setTimeout(() => {
    const currentVariation = variations[Math.floor(Math.random() * 3)];
    APN.emit(currentVariation, `This is an ap-${currentVariation}  ${item}`);
  }, 300 * index);
});
