var arr = [];
function calc0() {
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("0");
  arr.push("0");
}
function calc1() {
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("1");
  arr.push("1");
}
function calc2() { 
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("2");
  arr.push("2");
}
function calc3() { 
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("3");
  arr.push("3");
}
function calc4() { 
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("4");
  arr.push("4");
}
function calc5() { 
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("5");
  arr.push("5");
}
function calc6() { 
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("6");
  arr.push("6");
}
function calc7() { 
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("7");
  arr.push("7");
}
function calc8() { 
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("8");
  arr.push("8");
}
function calc9() { 
  if ($("#textbox").html() != "" && arr[0] == "=") {
    $("#textbox").html("");
    arr = [];
  }
  $("#textbox").append("9");
  arr.push("9");
}
function calc_divide() { 
  arr.push("/");
  $("#textbox").html("");
}
function calc_add() { 
  arr.push("+");
  $("#textbox").html("");
}
function calc_subtract() {
  arr.push("-");
  $("#textbox").html("");
}
function calc_multiply() {
  arr.push("*");
  $("#textbox").html("");
}
function calc_equal() { 
  if (arr.length > 2) {
    var i = 0;var num = 0;var denom = 0;
    for (i = 0;i<arr.length;i++) {
      if (arr[i]=="+"||arr[i]=="-"||arr[i]=="/"||arr[i]=="*") {
        num = arr.slice(0,i).join("");
        denom = arr.slice(i+1).join("");
        num = parseFloat(num);
        denom = parseFloat(denom);
        break;
      }
    }
    if (arr[i] == "+") {
      arr.push(num+denom);
      $("#textbox").html(num+denom);
    }
    else if (arr[i] == "-") {
      arr.push(num-denom);
      $("#textbox").html(num-denom);
    }
    else if (arr[i] == "*") {
      arr.push(num*denom);
      $("#textbox").html(num*denom);
    }
    else if (arr[i] == "/") {
      arr.push(num/denom);
      $("#textbox").html(num/denom);
    }
    arr=[];
    arr.push("=");
  }
}
function calcans() {
  arr = [];
  arr.push($("#textbox").html());
}
function clearAll() {
  $("#textbox").html("");  
  arr = [];
}
function clearChar() {
  if (arr[arr.length-1]!="/"||arr[arr.length-1]!="*"||arr[arr.length-1]!="+"||arr[arr.length-1]!="-") {
    console.log(JSON.stringify(arr));
    var str = $("#textbox").html();
    str = str.slice(0,-1);
    $("#textbox").html(str);
  }
  arr.pop();
}