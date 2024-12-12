const heading = document.querySelector('.card__heading');
const paragraph = document.querySelector('.card__paragraph');
const btnGenerator = document.querySelector('.btn');

function fetchAdvice() {
  fetch('https://api.adviceslip.com/advice', {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Something happened :( BIG L');
      }
      return res.json();
    })
    .then((data) => {
      heading.textContent = `Advice #${data.slip.id}`;
      paragraph.textContent = data.slip.advice;
    })
    .catch((error) => {
      heading.textContent = error;
    });
}
btnGenerator.addEventListener('click', fetchAdvice);
