let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function trafficLight() {
  red.style.backgroundColor = "red";
  green.style.backgroundColor = "grey";
  yellow.style.backgroundColor = "grey";

  await delay(5000);

  red.style.backgroundColor = "grey";
  green.style.backgroundColor = "grey";
  yellow.style.backgroundColor = "yellow";

  await delay(2000);

  red.style.backgroundColor = "grey";
  yellow.style.backgroundColor = "grey";
  green.style.backgroundColor = "green";

  await delay(5000);

  red.style.backgroundColor = "grey";
  yellow.style.backgroundColor = "yellow";
  green.style.backgroundColor = "grey";

  await delay(5000);
}

trafficLight();
setInterval(trafficLight, 14000);

// ---------------------------------------------------

// function trafficLight() {
//   red.style.backgroundColor = "red";
//   green.style.backgroundColor = "grey";
//   yellow.style.backgroundColor = "grey";

//   setTimeout(() => {
//     red.style.backgroundColor = "grey";
//     green.style.backgroundColor = "grey";
//     yellow.style.backgroundColor = "yellow";

//     setTimeout(() => {
//       red.style.backgroundColor = "grey";
//       yellow.style.backgroundColor = "grey";
//       green.style.backgroundColor = "green";

//       setTimeout(() => {
//         red.style.backgroundColor = "grey";
//         yellow.style.backgroundColor = "yellow";
//         green.style.backgroundColor = "grey";
//       }, 5_000);
//     }, 2_000);
//   }, 5_000);
// }
// trafficLight();
// setInterval(trafficLight, 14_000);
