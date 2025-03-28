/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number. use parseFloat
 * 
 */


function calculateTriangleArea(){
    //Triangle Base Value find
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseText);
    console.log(triangleBase);

    //Triangle Height Value find
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeigh = parseFloat(triangleHeightText);
    console.log(triangleHeigh);

    //Calculate Triangle Area
    const triangleArea = 0.5 * triangleBase * triangleHeigh;
    console.log('Area of triangle is: ', triangleArea);

    //Display Triangle Area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}