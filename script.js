function triggerFlash() {
    let flashArea = document.getElementById("flashArea");
    flashArea.style.display = "block"; // Show the text
    let colors = ["black", "white"];
    let i = 0;

    let interval = setInterval(function() {
        document.body.className = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 ms

    setTimeout(function() {
        clearInterval(interval);
        document.body.className = "";
        flashArea.style.display = "none"; // Hide the text after flashing
    }, 2000); // Flash for 3 seconds
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) { // Spacebar key code
        triggerFlash();
    }
};

document.addEventListener('click', function() {
    triggerFlash();
});
