function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    const area = width * length;

    // validation
    if (isNaN(width) || isNaN(length)) {
        alert('Please Insert A Number');
        return;
    }
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // validation
    if (isNaN(base) || isNaN(height)) {
        alert('Please Insert A Number');
        return;
    }

    const area = base * height;

    setElementInnerText('parallelogram-area', area);
}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);

    setElementInnerText('ellipse-area', areaTwoDecimal);
}

function calculateRhombusArea(){
    const firstDiagonal = getInputValue('rhombus-diagonal-one');
    const secondDiagonal = getInputValue('rhombus-diagonal-one');

    const area = 0.5 * firstDiagonal * secondDiagonal;

    setElementInnerText('rhombus-area', area);
}
function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;

    setElementInnerText('pentagon-area', area);
}

// Reuseable Function to get input field value in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value
}

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}