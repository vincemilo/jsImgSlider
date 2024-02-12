import navDots from './navDots';
import imgCarousel from './imgCarousel';
import replaceImg from './replaceImg';
import Prev from './img/prev.png';
import Next from './img/next.png';
import advanceSlide from './advanceSlide';

export default function slider() {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    const windowWrapper = document.createElement('div');
    windowWrapper.classList.add('window-wrapper');
    const window = document.createElement('div');
    window.className = 'window';
    const nextButton = new Image();
    nextButton.src = Next;
    nextButton.classList.add('nav-button');
    const prevButton = new Image();
    prevButton.src = Prev;
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
        replaceImg(oldIndex, index, navDotContainer, window);
    });

    prevButton.addEventListener('click', () => {
        const oldIndex = index;
        if (index === 0) {
            index = imgCarousel.length - 1;
        } else {
            index -= 1;
        }
        replaceImg(oldIndex, index, navDotContainer, window);
    });

    navDotContainer.addEventListener('click', (e) => {
        const activeImg = document.querySelector('.active');
        const oldIndex = Number(activeImg.id);
        navDotContainer.innerText = '';
        index = Number(e.target.id);
        replaceImg(oldIndex, index, navDotContainer, window);
    });

    const play = document.createElement('div');
    play.innerText = 'Play';
    play.addEventListener('click', () => {
        const newIndex = advanceSlide(
            index,
            imgCarousel,
            navDotContainer,
            window
        );
        index = newIndex;
    });

    windowWrapper.appendChild(prevButton);
    windowWrapper.appendChild(window);
    windowWrapper.appendChild(nextButton);
    sliderContainer.appendChild(windowWrapper);
    sliderContainer.appendChild(navDotContainer);
    sliderContainer.appendChild(play);
    return sliderContainer;
}
