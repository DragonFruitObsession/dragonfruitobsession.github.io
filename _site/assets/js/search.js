function myFunction1() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchbar1');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function myFunction2() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchbar2');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



// fancy features

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("droppy1");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("droppy2");
var btns = btnContainer.getElementsByClassName("btn2");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
}





// Change the display
function fruitInside() {
  document.getElementById("theImage1").src = "varieties/Variety Photos/Vietnam White/Vietnam White - Fruit 4.jpg";
  document.getElementById("theImage2").src = "varieties/Variety Photos/Common Red/Common Red - Fruit 4.jpg";
  document.getElementById("theImage3").src = "varieties/Variety Photos/Jade Red/Jade Red - Fruit 4.jpg";
}

function fruitOutside() {
  document.getElementById("theImage1").src = "varieties/Variety Photos/Vietnam White/Vietnam White - Fruit 3.jpg";
  document.getElementById("theImage2").src = "varieties/Variety Photos/Common Red/Common Red - Fruit 3.jpg";
  document.getElementById("theImage3").src = "varieties/Variety Photos/Jade Red/Jade Red - Fruit 3.jpg";
}

function fruitFlowers() {
  document.getElementById("theImage1").src = "varieties/Variety Photos/Vietnam White/Vietnam White - Flower 3.jpg";
  document.getElementById("theImage2").src = "varieties/Variety Photos/Common Red/Common Red - Flower 3.jpg";
  document.getElementById("theImage3").src = "varieties/Variety Photos/Jade Red/Jade Red - Flower 3.jpg";
}
