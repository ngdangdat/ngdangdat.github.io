// Confetti! https://www.kirilv.com/canvas-confetti/

const colors = [
  "#ff5acd",
  "#64ffda",
];


$(".btn").on('click', (event) => {
  var position = $(event.target).position();
  console.log(`position=[${JSON.stringify(position)}]`);
  confetti({
    startVelocity: 30,
    particleCount: 100,
    angle: 60,
    spread: 100,
    origin: { x: position.x, y: position.y },
    colors,
    disableForReducedMotion: true,
  });
});
