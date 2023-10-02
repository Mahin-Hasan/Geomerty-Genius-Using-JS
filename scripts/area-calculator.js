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

    // add to calculation entry
    addToCalculationEntry('Triangle', area)

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

    // add to calculation entry
    addToCalculationEntry('Rectangle', area)
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

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area)
}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);

    setElementInnerText('ellipse-area', areaTwoDecimal);

    // add to calculation entry
    addToCalculationEntry('Ellipse', areaTwoDecimal)
}

function calculateRhombusArea() {
    const firstDiagonal = getInputValue('rhombus-diagonal-one');
    const secondDiagonal = getInputValue('rhombus-diagonal-one');

    const area = 0.5 * firstDiagonal * secondDiagonal;

    setElementInnerText('rhombus-area', area);
    // add to calculation entry
    addToCalculationEntry('Rhombus', area)
}
function calculatePentagonArea() {
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;

    setElementInnerText('pentagon-area', area);
    // add to calculation entry
    addToCalculationEntry('Pentagon', area)
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

// add to calculation entry
/*
1.Get the element where you want to add the Dynamic HTML
2.create an element you want to add
3.if needed add some class
4.set innerHTMl it could be dynamic Template String
5. append the created element as a child of the parent
*/
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    // p.innerHTML = areaType + ' ' + area;
    p.classList.add('text-xl', 'p-2');
    // for counting
    const count = calculationEntry.childElementCount;
    p.innerHTML = `${count + 1} ${areaType} ${area} cm<sup>2</sup>
    <button class="btn btn-sm btn-success">Convert</button>
    `;
    calculationEntry.appendChild(p);
}