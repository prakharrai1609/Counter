let count = document.querySelector('#count');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');

decrease.addEventListener('click' , () => {
    let c = count.textContent;
    c--;
    count.textContent = c;
    if (c < 0) {
        document.querySelector('#count').style.color = 'red';
    }

    if (c == 0) {
        count.style.color = 'hsl(209, 61%, 16%)';
    }

})

increase.addEventListener('click' , () => {
    let c = count.textContent;
    c++;
    count.textContent = c;
    if (c > 0) {
        count.style.color = 'green';
    }

    if (c == 0) {
        count.style.color = 'hsl(209, 61%, 16%)';
    }
})

reset.addEventListener('click' , () => {
    count.textContent = 0;
    count.style.color = 'hsl(209, 61%, 16%)';
})