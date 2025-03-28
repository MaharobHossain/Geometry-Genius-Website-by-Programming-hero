
function calculateParallelogramArea(){

    //  get width of the Parallelogram
     const parallelogramWidthInput = document.getElementById('parallelogram-width');
     const parallelogramWidthText = parallelogramWidthInput.value;
     const parallelogramWidth = parseFloat(parallelogramWidthText);
     console.log(parallelogramWidth);

    //  get height of the Parallelogram
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
     const parallelogramHeightText = parallelogramHeightInput.value;
     const parallelogramHeight = parseFloat(parallelogramHeightText);
     console.log(parallelogramHeight);

    // Calculate Parallelogram Area
    const area = parallelogramWidth * parallelogramHeight;
    console.log("Area of the rectengle is: ", area);

    // Display Parallelogram Area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;

}