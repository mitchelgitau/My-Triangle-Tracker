if(side1 === side2 && side2 === side3){
alert ("This is an equilateral triangle!");
}
else if(side1 === side2 || side2 === side3){
alert ("This is an isosceles triangle!");
}
else if((side1+side2)<=side3 || (side2+side3)<=side1 || (side1+side2)<=side3){
alert ("This is not a triangle!");
}
