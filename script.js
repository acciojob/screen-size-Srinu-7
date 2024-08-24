//your JS code here. If required.
function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.getElementById('sizeInfo');
    sizeInfo.querySelector('h1').textContent = `Width: ${width} and Height: ${height}`;
}

// Initial call to display the size when the page loads
updateWindowSize();

// Event listener to update the size whenever the window is resized
window.addEventListener('resize', updateWindowSize);
