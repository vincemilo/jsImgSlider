import Crono from './img/Crono2.png';
import Frog from './img/Frog.png';
import Lucca from './img/Lucca2.png';
import Marle from './img/Marle2.png';
import Robo from './img/Robo2.png';
import Ayla from './img/Ayla.png';
import Magus from './img/Magus2.png';

export default function slider() {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider');
    const window = document.createElement('div');
    window.className = 'window';
    const imgCarousel = [Crono, Frog, Lucca, Marle, Robo, Ayla, Magus];
    const nextButton = document.createElement('div');
    nextButton.innerText = 'Next';
    nextButton.classList.add('nav-buttons');
    const prevButton = document.createElement('div');
    prevButton.innerText = 'Prev';
    prevButton.classList.add('nav-buttons');
    const initialImg = new Image();
    [initialImg.src] = imgCarousel;
    window.appendChild(initialImg);
    let index = 0;
    // imgCarousel.forEach((src) => {
    //     const img = document.createElement('img');
    //     img.src = src;
    // });

    nextButton.addEventListener('click', () => {
        if (index === imgCarousel.length - 1) {
            index = 0;
        } else {
            index += 1;
        }
        const currImg = new Image();
        currImg.src = imgCarousel[index];
        window.firstChild.remove();
        window.appendChild(currImg);
    });

    prevButton.addEventListener('click', () => {
        if (index === 0) {
            index = imgCarousel.length - 1;
        } else {
            index -= 1;
        }
        const currImg = new Image();
        currImg.src = imgCarousel[index];
        window.firstChild.remove();
        window.appendChild(currImg);
    });

    sliderContainer.appendChild(prevButton);
    sliderContainer.appendChild(window);
    sliderContainer.appendChild(nextButton);
    return sliderContainer;
}
