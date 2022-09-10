var person1, person2;
function start() {
  person1 = prompt("Enter 1st user name");
  person2 = prompt("Enter 2nd User name");
  console.log(person1);
  console.log(person2);
  document.getElementById("user1").innerHTML = person1;
  document.getElementById("user2").innerHTML = person2;

  document.getElementById("a1").disabled = false;
  document.getElementById("a2").disabled = false;
  document.getElementById("a3").disabled = false;
  document.getElementById("b1").disabled = false;
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("c1").disabled = false;
  document.getElementById("c2").disabled = false;
  document.getElementById("c3").disabled = false;

  document.getElementById("a1").value = "";
  document.getElementById("a2").value = "";
  document.getElementById("a3").value = "";
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("c1").value = "";
  document.getElementById("c2").value = "";
  document.getElementById("c3").value = "";
  flag = 1;
}
//Game Play ine1
flag = 1;
function play1() {
  if (flag == 1) {
    document.getElementById("a1").value = "O";
    document.getElementById("a1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("a1").value = "X";
    document.getElementById("a1").disabled = true;
    flag = 1;
  }
}
function play2() {
  if (flag == 1) {
    document.getElementById("a2").value = "O";
    document.getElementById("a2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("a2").value = "X";
    document.getElementById("a2").disabled = true;
    flag = 1;
  }
}
function play3() {
  if (flag == 1) {
    document.getElementById("a3").value = "O";
    document.getElementById("a3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("a3").value = "X";
    document.getElementById("a3").disabled = true;
    flag = 1;
  }
}
// game playline2
function play4() {
  if (flag == 1) {
    document.getElementById("b1").value = "O";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
}
function play5() {
  if (flag == 1) {
    document.getElementById("b2").value = "O";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
}
function play6() {
  if (flag == 1) {
    document.getElementById("b3").value = "O";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
}
function play7() {
  if (flag == 1) {
    document.getElementById("c1").value = "O";
    document.getElementById("c1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c1").value = "X";
    document.getElementById("c1").disabled = true;
    flag = 1;
  }
}
function play8() {
  if (flag == 1) {
    document.getElementById("c2").value = "O";
    document.getElementById("c2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c2").value = "X";
    document.getElementById("c2").disabled = true;
    flag = 1;
  }
}
function play9() {
  if (flag == 1) {
    document.getElementById("c3").value = "O";
    document.getElementById("c3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c3").value = "X";
    document.getElementById("c3").disabled = true;
    flag = 1;
  }
}

function restart() {
  person1 = "";
  person2 = "";
  document.getElementById("user1").innerHTML = person1;
  document.getElementById("user2").innerHTML = person2;
  document.getElementById("a1").disabled = false;
  document.getElementById("a2").disabled = false;
  document.getElementById("a3").disabled = false;
  document.getElementById("b1").disabled = false;
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("c1").disabled = false;
  document.getElementById("c2").disabled = false;
  document.getElementById("c3").disabled = false;

  document.getElementById("a1").value = "";
  document.getElementById("a2").value = "";
  document.getElementById("a3").value = "";
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("c1").value = "";
  document.getElementById("c2").value = "";
  document.getElementById("c3").value = "";
  start();
}
function game() {
  var a1 = document.getElementById("a1").value;
  var a2 = document.getElementById("a2").value;
  var a3 = document.getElementById("a3").value;
  var b1 = document.getElementById("b1").value;
  var b2 = document.getElementById("b2").value;
  var b3 = document.getElementById("b3").value;
  var c1 = document.getElementById("c1").value;
  var c2 = document.getElementById("c2").value;
  var c3 = document.getElementById("c3").value;
  if (
    (a1 == "X" && a2 == "X" && a3 == "X") ||
    (b1 == "X" && b2 == "X" && b3 == "X") ||
    (c1 == "X" && c2 == "X" && c3 == "X") ||
    (a1 == "X" && b1 == "X" && c1 == "X") ||
    (a2 == "X" && b2 == "X" && c2 == "X") ||
    (a3 == "X" && b3 == "X" && c3 == "X") ||
    (a1 == "X" && b2 == "X" && c3 == "X") ||
    (a3 == "X" && b2 == "X" && c1 == "X")
  ) {
    document.getElementById("a1").disabled = true;
    document.getElementById("a2").disabled = true;
    document.getElementById("a3").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("c1").disabled = true;
    document.getElementById("c2").disabled = true;
    document.getElementById("c3").disabled = true;
    document.getElementById("winner").innerHTML = person2 + "Wins";
  } else if (
    (a1 == "O" && a2 == "O" && a3 == "O") ||
    (b1 == "O" && b2 == "O" && b3 == "O") ||
    (c1 == "O" && c2 == "O" && c3 == "O") ||
    (a1 == "O" && b1 == "O" && c1 == "O") ||
    (a2 == "O" && b2 == "O" && c2 == "O") ||
    (a3 == "O" && b3 == "O" && c3 == "O") ||
    (a1 == "O" && b2 == "O" && c3 == "O") ||
    (a3 == "O" && b2 == "O" && c1 == "O")
  ) {
    document.getElementById("a1").disabled = true;
    document.getElementById("a2").disabled = true;
    document.getElementById("a3").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("c1").disabled = true;
    document.getElementById("c2").disabled = true;
    document.getElementById("c3").disabled = true;
    // alert(person1+" Won");
    document.getElementById("winner").innerHTML = person1 + "Wins";
  } else if (
    (a1 == "X" || a1 == "O") &&
    (a2 == "X" || a2 == "O") &&
    (a3 == "X" || a3 == "O") &&
    (b1 == "X" || b1 == "O") &&
    (b2 == "X" || b2 == "O") &&
    (b3 == "X" || b3 == "O") &&
    (c1 == "X" || c1 == "O") &&
    (c2 == "X" || c2 == "O") &&
    (c3 == "X" || c3 == "O")
  ) {
    document.getElementById("winner").innerHTML = "Match Tie ";
  } else {
    if (flag == 1) {
      document.getElementById("winner").innerHTML = person1 + "Turn";
    } else {
      document.getElementById("winner").innerHTML = person2 + "Turn";
    }
  }
}
