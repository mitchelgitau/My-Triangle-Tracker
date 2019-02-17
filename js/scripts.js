function triangle(){
  var side1 = parseInt(document.getElementById("side one").value);
  var side2 = parseInt(document.getElementById("side two").value);
  var side3 = parseInt(document.getElementById("side three").value);
}
if(side1 === side2 && side2 === side3){
alert ("This is an equilateral triangle!");
}
else if(side1 === side2 || side2 === side3){
alert ("This is an isosceles triangle!");
}
else if((side1+side2)<=side3 || (side2+side3)<=side1 || (side1+side2)<=side3){
alert ("This is not a triangle!");
}
else((side1 + side2) <= side3 && (side1 + side3) <= side2 || (side2 + side3)
alert ("This is a scalene triangle!");
}
