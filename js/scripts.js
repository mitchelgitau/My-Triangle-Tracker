function button(){
  var side1 = parseInt(document.getElementById("sideOne").value);
  var side2 = parseInt(document.getElementById("sideTwo").value);
  var side3 = parseInt(document.getElementById("sideThree").value);



  if(side1 === side2 && side2 === side3 && side1 === side3){
  alert ("This is an equilateral triangle!");
  }
  else if(side1 === side2 || side2 === side3 || side1 === side3){
  alert ("This is an isosceles triangle!");
  }
  else if((side1+side2)<=side3 || (side2+side3)<=side1 || (side1+side3)<=side2){
  alert ("This is not a triangle!");
  }
  else{
  alert ("This is a scalene triangle!")
  }
}
