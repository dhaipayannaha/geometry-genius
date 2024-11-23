

// For Triangle
function calculateTriangleArea (){
    const base = getInputValueById('triangle-base');
    
    const height = getInputValueById('triangle-height');
    

    const area = 0.5 * base * height;
    console.log(area);
    
    setInnerTextById('triangle-area', area);
}


// For Rectangle
function calculaterectangleArea (){
    const width = getInputValueById('rectangle-width');
    
    const length = getInputValueById('rectangle-length');
    

    const area = 0.5 * width * length;
    console.log(area);
    
    setInnerTextById('rectangle-area', area);
}




// For Parallelogram
function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    // console.log(base);

    const height = getInputValueById('parallelogram-height');
    // console.log(height);

    const area = base * height;
    console.log('area of peralelogram', area);

    setInnerTextById('parallelogram-area', area)
}



// For Rhombus
function calculateRhombusArea (){
    const diagonalOne = getInputValueById('rhombus-diagonalOne');
    
    const diagonalTwo = getInputValueById('rhombus-diagonalTwo');
    

    const area = 0.5 * diagonalOne * diagonalTwo;
    
    setInnerTextById('rhombus-area', area);
}



// For Pentagon
function calculatepentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    
    const area = 0.5 * perimeter * apothem;
    
    setInnerTextById('pentagon-area', area);
    

}


function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, inputValueText){ 
    const element = document.getElementById(elementId);
    element.innerText = inputValueText;
}