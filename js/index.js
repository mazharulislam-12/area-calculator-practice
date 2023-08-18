// Triangle function
function calculateTriangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = 0.5 * base * height;
    if (isNaN(base) || isNaN(height)) {
        alert('please input number');
        return;
    }
    setElementInnerText('triangle-area', area)
    
// add to calculation entry
addToCalculationEntry('Triangle',area );
}

// Rectangle function
function calculateRectangleArea() {
    const w = getInputValue('rectangle-w');
    const l = getInputValue('rectangle-l');
    const area = w * l;
    if (isNaN (w) || isNaN(l)) {
        alert('please input number');
        return;
    }
    setElementInnerText('rectangle-area', area);
    
// add to calculation entry
addToCalculationEntry('Rectangle',area );
}
//  Parallelogram
function calculateParallelogramArea() {
    const pb = getInputValue('parallelogram-b');
    const pl = getInputValue('parallelogram-h');
    const area = pb* pl;
    if (isNaN(pb) || isNaN(pl)) {
        alert('please input number');
        return;
    }
    setElementInnerText('parallelogram-area', area);
    
// add to calculation entry
addToCalculationEntry('Parallelogram',area );
}
// Rhombus
function calculateRhombusArea() {
    const RhombusD1 = getInputValue('rhombus-d1');
    const RhombusD2 = getInputValue('rhombus-d2');
    const area = 0.5 * RhombusD1 * RhombusD2;
    if (isNaN(RhombusD1) || isNaN(RhombusD2)) {
        alert('please input number');
        return;
    }
    setElementInnerText('rhombus-area', area);
    
// add to calculation entry
addToCalculationEntry('Rhombus',area );
}

// Pentagon
function calculatePentagonArea() {
    const pentagonPP = getInputValue('pentagon-pp');
    const pentagonPB = getInputValue('pentagon-pb');
    const area = 0.5 * pentagonPP * pentagonPB;
    if (isNaN(pentagonPP) || isNaN(pentagonPB)) {
        alert('please input number');
        return;
    }
    setElementInnerText('pentagon-area', area);
    
// add to calculation entry
addToCalculationEntry('Pentagon',area );
}

// Ellipse
function calculateEllipseArea() {
    const ellipseA = getInputValue('ellipse-a');
    const ellipseB = getInputValue('ellipse-b');
    const area = 3.1415 * ellipseA * ellipseB;
    // tofixed
    const areaToDecimal = area.toFixed(2);
    if (isNaN(ellipseA) || isNaN (ellipseB)) {
        alert('please input number');
        return;
    }
setElementInnerText('ellipse-area',areaToDecimal );

// add to calculation entry
    addToCalculationEntry('Ellipse',areaToDecimal );

}

// reuseable function
// 01.
function getInputValue(fieldId) {
    const inputFiled = document.getElementById(fieldId);
    const inputValueText = inputFiled.value;
    const value = parseFloat(inputValueText);
    return value;
}
//02.
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// calculation entry
function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    // p.innerHTML =areaType + ' ' + area;
    p.classList.add('my-4');
    p.innerHTML = `
        ${count + 1}.
        ${areaType} ${area} cm <sup>2</sup>
        <button class = "btn btn-success btn-sm  mt-2">Convert</button>
    `;
    calculationEntry.appendChild(p);


}