
function calculateEllipseArea(){

     //Ellipse Base Value find
     const ellipseSemiMajorInput = document.getElementById('ellipse-semi-major-axis');
     const ellipseSemiMajorText = ellipseSemiMajorInput.value;
     const ellipseSemiMajor = parseFloat(ellipseSemiMajorText);
     console.log(ellipseSemiMajor);
 
     //Ellipse Height Value find
     const ellipseSemiMinorInput = document.getElementById('ellipse-semi-minor-axis');
     const ellipseSemiMinorText = ellipseSemiMinorInput.value;
     const ellipseSemiMinor = parseFloat(ellipseSemiMinorText);
     console.log(ellipseSemiMinor);
 
     //Calculate Ellipse Area
     const ellipseArea = 3.1416 * ellipseSemiMajor * ellipseSemiMinor;
     console.log('Area of Ellipse is: ', ellipseArea);
 
     //Display Ellipse Area
     const ellipseAreaSpan = document.getElementById('ellipse-area');
     ellipseAreaSpan.innerText = ellipseArea;

}