document.getElementById('noButton').addEventListener('mouseover', function() {
    // Randomly position the 'No' button within the viewport bounds.
    const button = this;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});

document.getElementById('yesButton').addEventListener('click', function() {
    alert("You've made the right choice! Happy Valentine's Day!");
});
