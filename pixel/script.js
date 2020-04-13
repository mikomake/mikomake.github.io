var penColour = 'black';

function setPenColour(pen)
{
  penColour = pen;
  document.getElementById("penshow").innerHTML = "Colour: " + penColour;
}

function setPixelColour(pixel)
{
  pixel.style.backgroundColor = penColour;
}