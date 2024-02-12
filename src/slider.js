import navDots from './navDots';
import imgCarousel from './imgCarousel';
import replaceImg from './replaceImg';

export default function slider() {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    const windowWrapper = document.createElement('div');
    windowWrapper.classList.add('window-wrapper');
    const window = document.createElement('div');
    window.className = 'window';
    const nextButton = document.createElement('div');
    nextButton.innerText = 'Next';
    nextButton.classList.add('nav-button');
    const prevButton = document.createElement('div');
    prevButton.innerText = 'Prev';
    prevButton.classList.add('nav-button');
    const initialImg = new Image();
    [initialImg.src] = imgCarousel;
    window.appendChild(initialImg);
    let index = 0;

    const navDotContainer = navDots(imgCarousel);

    nextButton.addEventListener('click', () => {
        const oldIndex = index;
        if (index === imgCarousel.length - 1) {
            index = 0;
        } else {
            index += 1;
        }
        navDotContainer.innerText = '';
        replaceImg(oldIndex, index, navDotContainer, window);
    });

    prevButton.addEventListener('click', () => {
        const oldIndex = index;
        if (index === 0) {
            index = imgCarousel.length - 1;
        } else {
            index -= 1;
        }
        navDotContainer.innerText = '';
        replaceImg(oldIndex, index, navDotContainer, window);
    });

    navDotContainer.addEventListener('click', (e) => {
        const activeImg = document.querySelector('.active');
        const oldIndex = Number(activeImg.id);
        navDotContainer.innerText = '';
        index = Number(e.target.id);
        replaceImg(oldIndex, index, navDotContainer, window);
    });

    windowWrapper.appendChild(prevButton);
    windowWrapper.appendChild(window);
    windowWrapper.appendChild(nextButton);
    sliderContainer.appendChild(windowWrapper);
    sliderContainer.appendChild(navDotContainer);
    return sliderContainer;
}
