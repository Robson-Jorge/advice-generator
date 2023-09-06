const adviceUpdateButton = document.querySelector('.advice-update');

adviceUpdateButton.addEventListener('click', async () => {
    const adviceNumber = document.querySelector('.advice-number');
    const adviceRandom = document.querySelector('.advice-random');

    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    const content = await resposta.json();

    adviceNumber.innerHTML = `Advice # ${content.slip.id}`;
    adviceRandom.innerHTML = `"${content.slip.advice}"`;
})