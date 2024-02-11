import Crono from './img/Crono2.png';
import Frog from './img/Frog.png';
import Lucca from './img/Lucca2.png';
import Marle from './img/Marle2.png';
import Robo from './img/Robo2.png';
import Ayla from './img/Ayla.png';
import Magus from './img/Magus2.png';
import Active from './img/full-stop.png';
import Inactive from './img/period.png';

export default function slider() {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    const windowWrapper = document.createElement('div');
    windowWrapper.classList.add('window-wrapper');
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

    const dotArray = [];

    const navDotContainer = document.createElement('div');
    navDotContainer.classList.add('navdots');
    for (let i = 0; i < imgCarousel.length; i += 1) {
        const dot = new Image();
        dot.src = Inactive;
        dotArray.push(dot);
    }

    dotArray.forEach((dot) => navDotContainer.appendChild(dot));

    const replaceImg = () => {
        const currImg = new Image();
        currImg.src = imgCarousel[index];
        window.firstChild.remove();
        window.appendChild(currImg);
        console.log(dotArray[index]);
    };

    nextButton.addEventListener('click', () => {
        if (index === imgCarousel.length - 1) {
            index = 0;
        } else {
            index += 1;
        }
        replaceImg();
    });

    prevButton.addEventListener('click', () => {
        if (index === 0) {
            index = imgCarousel.length - 1;
        } else {
            index -= 1;
        }
        replaceImg();
    });
    // const active = new Image();
    // active.src = Active;
    // navDotContainer.firstChild.remove();
    // navDotContainer.prepend(active);

    windowWrapper.appendChild(prevButton);
    windowWrapper.appendChild(window);
    windowWrapper.appendChild(nextButton);
    sliderContainer.appendChild(windowWrapper);
    sliderContainer.appendChild(navDotContainer);
    return sliderContainer;
}
