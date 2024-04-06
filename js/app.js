document.addEventListener('DOMContentLoaded', () => {

    const adviceDiv = document.querySelector('.advice');
    const diceBtn = document.querySelector('.icon-dice');
    const cardMessage = document.querySelector('.card__message');
    diceBtn.addEventListener('click', generateAdvice);


    async function generateAdvice() {
        
        const url = 'https://api.adviceslip.com/advice';
        const response = await fetch(url);
        const data = await response.json();
        createHTML(data);
    }

    function createHTML(data) {
        while(adviceDiv.firstChild) {
            adviceDiv.removeChild(adviceDiv.firstChild)
        }
        const { slip } = data;

        const adviceNumber = document.createElement('P');
        adviceNumber.classList.add('advice__number');
        adviceNumber.textContent = `Advice #${slip.id}`;
        const adviceText = document.createElement('P');
        adviceText.classList.add('advice__text');
        adviceText.textContent = `${slip.advice}`;


        adviceDiv.appendChild(adviceNumber);
        adviceDiv.appendChild(adviceText);
        deleteMessage();

    }

    function deleteMessage() {
        if(adviceDiv.firstChild) {
            cardMessage.remove();
        }
    }
});

