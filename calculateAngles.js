function calculateAngles() {
    var direct = parseFloat(document.getElementById('direct').value);
    var horizontal = parseFloat(document.getElementById('horizontal').value);
    var vertical = parseFloat(document.getElementById('vertical').value);
    var angleAcrossVertical = Math.atan2(vertical, horizontal) * (180 / Math.PI);
    var angleAcrossHorizontal = Math.atan2(horizontal, vertical) * (180 / Math.PI);
    var rightAngle = 90;
    var results = "\n        <p>Angle across the vertical side: ".concat(angleAcrossVertical.toFixed(2), " degrees</p>\n        <p>Angle across the horizontal side: ").concat(angleAcrossHorizontal.toFixed(2), " degrees</p>\n        <p>Right angle: ").concat(rightAngle, " degrees</p>\n    ");
    document.getElementById('results').innerHTML = results;
}
// Export to make it available after compilation
window.calculateAngles = calculateAngles;
