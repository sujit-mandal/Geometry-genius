// Triangle area
function calculateTriangleArea() {
  const baseName = document.getElementById("triangle").innerText;
  const triangleBase = getInputValue("triangle-base");
  const triangleHeight = getInputValue("triangle-height");
  if (
    isNaN(triangleBase) ||
    isNaN(triangleHeight) ||
    triangleBase <= 0 ||
    triangleHeight <= 0
  ) {
    alert(
      `Your ${baseName} input is invalid or blank or not a number. Please enter a valid input.`
    );
    setElementValue("triangle-area", 0);
  } else {
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    setElementValue("triangle-area", triangleArea.toFixed(2));
    displayData(triangleArea, baseName);
  }
}
// Rectangle area
function calculateRectangleArea() {
  const baseName = document.getElementById("rectangle").innerText;
  const rectangleWidth = getInputValue("rectangle-width");
  const rectangleLength = getInputValue("rectangle-length");
  if (
    isNaN(rectangleWidth) ||
    isNaN(rectangleLength) ||
    rectangleWidth <= 0 ||
    rectangleLength <= 0
  ) {
    alert(
      `Your ${baseName} input is invalid or blank or not a number. Please enter a valid input.`
    );
    setElementValue("triangle-area", 0);
  } else {
    const rectangleArea = rectangleWidth * rectangleLength;
    setElementValue("rectangle-area", rectangleArea.toFixed(2));
    displayData(rectangleArea, baseName);
  }
}

function calculateParallelogramArea() {
  const parallelogramBase = getInputValue("parallelogram-base");
  const parallelogramHeight = getInputValue("parallelogram-height");
  const parallelogramArea = parallelogramBase * parallelogramHeight;
  setElementValue("parallelogram-area", parallelogramArea.toFixed(2));
}
function calculateRhombusArea() {
  const rhombusd1 = getInputValue("rhombus-d1");
  const rhombusd2 = getInputValue("rhombus-d2");
  const rhombusArea = 0.5 * rhombusd1 * rhombusd2;
  setElementValue("rhombus-area", rhombusArea.toFixed(2));
}
function calculatePentagonArea() {
  const pentagonPerimeter = getInputValue("pentagon-perimeter");
  const pentagonApothem = getInputValue("pentagon-apothem");
  const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem;
  setElementValue("pentagon-area", pentagonArea.toFixed(2));
}
function calculateEllipseArea() {
  const ellipseMajorAxis = getInputValue("ellipse-major-axis");
  const ellipseMinorAxis = getInputValue("ellipse-minor-axis");
  const ellipseArea = 3.1416 * ellipseMajorAxis * ellipseMinorAxis;
  setElementValue("ellipse-area", ellipseArea.toFixed(2));
}
