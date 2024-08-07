function calculateAngles(): void {
    const direct = parseFloat((document.getElementById('direct') as HTMLInputElement).value);
    const horizontal = parseFloat((document.getElementById('horizontal') as HTMLInputElement).value);
    const vertical = parseFloat((document.getElementById('vertical') as HTMLInputElement).value);

    const angleAcrossVertical = Math.atan2(vertical, horizontal) * (180 / Math.PI);
    const angleAcrossHorizontal = Math.atan2(horizontal, vertical) * (180 / Math.PI);
    const rightAngle = 90;

    const results = `
        <p>Angle across the vertical side: ${angleAcrossVertical.toFixed(2)} degrees</p>
        <p>Angle across the horizontal side: ${angleAcrossHorizontal.toFixed(2)} degrees</p>
        <p>Right angle: ${rightAngle} degrees</p>
    `;

    document.getElementById('results').innerHTML = results;
}

// Export to make it available after compilation
window.calculateAngles = calculateAngles;
