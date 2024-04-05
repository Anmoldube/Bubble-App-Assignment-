function moveArrow(targetCircleClass) {
    const targetCircle = document.querySelector(targetCircleClass);
    const arrow = document.querySelector('.long-arrow-left');

    const targetRect = targetCircle.getBoundingClientRect();
    const arrowRect = arrow.getBoundingClientRect();

    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;

    const arrowX = arrowRect.left + arrowRect.width / 2;
    const arrowY = arrowRect.top + arrowRect.height / 2;

    const deltaX = targetX - arrowX;
    const deltaY = targetY - arrowY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const speed = 1; // Adjust speed as needed

    const duration = distance / speed;

    arrow.style.transition = `transform ${duration}ms linear`;
    arrow.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    setTimeout(() => {
        targetCircle.classList.add('active'); // Change color of the circle
    }, duration);
}

function resetApp() {
    const arrow = document.querySelector('.long-arrow-left');
    const circles = document.querySelectorAll('.a2, .a3, .a4, .a5');

    arrow.style.transition = 'none';
    arrow.style.transform = 'none';

    circles.forEach(circle => {
        circle.classList.remove('active'); // Reset circle colors
    });
}


function resetApp() {
    const arrow = document.querySelector('.long-arrow-left');
    const circles = document.querySelectorAll('.a2, .a3, .a4, .a5');

    arrow.style.transition = 'none';
    arrow.style.transform = 'none';

    circles.forEach(circle => {
        circle.classList.remove('active');
    });
}
