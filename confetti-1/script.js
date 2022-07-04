var confetti = $('.confetti').first();

$('.btn').on('click', (event) => {
    confetti.removeClass('hidden');
    setInterval(() => {
        confetti.addClass('hidden');
    }, 3000);
});