import React from "react";
import $ from "jquery";

/*
  setInterval(function () {
    var rand = Math.floor(Math.random() * 4);
    document.getElementById("key").innerHTML = food[rand];
  }, 2000);
*/


function Sp() {
  var count = 0;
  var food = ["sushi?", "burger?", "beer?", "chinese?"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(400, function () {
      $(this)
        .text(food[count % food.length])
        .fadeIn(400);
    });
  }, 4000);
}

export default Sp;
