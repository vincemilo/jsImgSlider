import replaceImg from './replaceImg';

export default function advanceSlide(
    index,
    imgCarousel,
    navDotContainer,
    window
) {
    const oldIndex = index;
    let newIndex = index;
    if (index === imgCarousel.length - 1) {
        newIndex = 0;
    } else {
        newIndex += 1;
    }
    replaceImg(oldIndex, newIndex, navDotContainer, window);
    return newIndex;
}
