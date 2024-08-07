function calculateAngle(vertical: number, horizontal: number): string {
    if (horizontal === 0) {
        return "Undefined (horizontal cannot be zero)";
    }
    const radian: number = Math.atan(vertical / horizontal);
    const degree: number = radian * (180 / Math.PI);
    return degree.toFixed(2); // Returns the angle rounded to two decimal places as a string
}

function calculateAndDisplayAngle(): void {
    const verticalInput: HTMLInputElement = document.getElementById('vertical') as HTMLInputElement;
    const horizontalInput: HTMLInputElement = document.getElementById('horizontal') as HTMLInputElement;
    const verticalDistance: number = parseFloat(verticalInput.value);
    const horizontalDistance: number = parseFloat(horizontalInput.value);
    const angle: string = calculateAngle(verticalDistance, horizontalDistance);
    const resultElement: HTMLElement = document.getElementById('result');
    resultElement.innerText = `The calculated angle is ${angle} degrees.`;
}
