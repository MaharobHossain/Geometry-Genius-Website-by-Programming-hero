function calculateRectangleArea() {

    //  get length of the Rectangle
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthText);
    console.log(rectangleLength);

    //  get width of the Rectangle
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangWidthText = rectangleWidthInput.value;
    const rectangWidth = parseFloat(rectangWidthText);
    console.log(rectangWidth);

    // Calculate Rectangle Area
    const area = rectangleLength * rectangWidth;
    console.log("Area of the rectengle is: ", area);

    // Display Rectangle Area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}
