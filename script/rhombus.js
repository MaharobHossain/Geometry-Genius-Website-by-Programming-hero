function calculateRhombusArea(){
    //Rhombus Diagonal 1 Value find
    const rhombusBaseInput = document.getElementById('rhombus-Diagonal1');
    const rhombusBaseText = rhombusBaseInput.value;
    const rhombusDiagonal1 = parseFloat(rhombusBaseText);
    console.log(rhombusDiagonal1);

    //Rhombus Diagonal 2 Value find
    const rhombusHeightInput = document.getElementById('rhombus-Diagonal2');
    const rhombusHeightText = rhombusHeightInput.value;
    const rhombusDiagonal2 = parseFloat(rhombusHeightText);
    console.log(rhombusDiagonal2);

    //Calculate Rhombus Area
    const rhombusArea = 0.5 * rhombusDiagonal1 * rhombusDiagonal2;
    console.log('Area of Rhombus is: ', rhombusArea);

    //Display Rhombus Area
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = rhombusArea;
}