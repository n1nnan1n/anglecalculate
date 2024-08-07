function calculateAngle(vertical, horizontal) {
    if (horizontal === 0) {
        return "Undefined (horizontal cannot be zero)";
    }
    var radian = Math.atan(vertical / horizontal);
    var degree = radian * (180 / Math.PI);
    return degree.toFixed(2); // Returns the angle rounded to two decimal places as a string
}
function calculateAndDisplayAngle() {
    var verticalInput = document.getElementById('vertical');
    var horizontalInput = document.getElementById('horizontal');
    var verticalDistance = parseFloat(verticalInput.value);
    var horizontalDistance = parseFloat(horizontalInput.value);
    var angle = calculateAngle(verticalDistance, horizontalDistance);
    var resultElement = document.getElementById('result');
    resultElement.innerText = "The calculated angle is ".concat(angle, " degrees.");
}
