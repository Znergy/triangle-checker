$(document).ready(function(){


    var userSide1 = parseInt(prompt("Enter side 1 length"));
    var userSide2 = parseInt(prompt("Enter side 2 length"));
    var userSide3 = parseInt(prompt("Enter side 3 length"));

    calculateTriangle(userSide1, userSide2, userSide3);

    function calculateTriangle(side1, side2, side3) {
      if ((side1 + side2) > side3 && (side2 + side3) >side1 && (side3 + side1) > side2) {
        if (side1 === side2 && side2 === side3) {
          alert("Equilateral!");
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
          alert("Isosceles");
        } else if (side1 != side2 && side2 != side3 && side1 != side3) {
          alert("Scalene")
        } else {
          alert("It's not a triangle or we messed up!")
        }
      } else {
        alert("That is NOT a viable triangle.")
      }

  };
});
