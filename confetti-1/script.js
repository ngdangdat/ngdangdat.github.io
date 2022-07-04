$('.btn').on('click', (event) => {
  confetti({
      particleCount: 100,
      spread: 150,
      startVelocity: 80,
      ticks: 500,
      origin: {
          y: 0.2,
      },
      gravity: 1,
  });
});
