function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let index = 0;
setInterval(() => {
  console.log(getRandomInt(100));
}, 6000);
