
function calculatePentagonArea(){

    //Pentagon Base Value find
    const pentagonBaseInput = document.getElementById('pentagon-base');
    const pentagonBaseText = pentagonBaseInput.value;
    const pentagonBase = parseFloat(pentagonBaseText);
    console.log(pentagonBase);

    //Pentagon Height Value find
    const pentagonHeightInput = document.getElementById('pentagon-height');
    const pentagonHeightText = pentagonHeightInput.value;
    const pentagonHeight = parseFloat(pentagonHeightText);
    console.log(pentagonHeight);

    //Calculate Pentagon Area
    const pentagonArea = 0.5 * pentagonHeight * pentagonBase;
    console.log('Area of Pentagon is: ', pentagonArea);

    //Display Pentagon Area
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = pentagonArea;
}