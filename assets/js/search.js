// read read
document.addEventListener('DOMContentLoaded', function() {
    var content = document.querySelector('.read-more-div');
    var readMore = document.querySelector('.read-more');

    readMore.addEventListener('click', function(e) {
        e.preventDefault();
        content.classList.toggle('open');

        if (content.classList.contains('open')) {
            content.style.maxHeight = 'none';
            readMore.textContent = 'read less';
        } else {
            content.style.maxHeight = '5.5em'; // Adjust to match your CSS max-height
            readMore.textContent = '... read more';
        }
    });
});

// Hide the read more if five lines or less
function checkAndToggleReadMore() {
  var contentElement = document.getElementById('overview');
  var readMoreElement = document.getElementById('read-more');

  // Check the line count
  var lineCount = contentElement.getBoundingClientRect().height / parseFloat(getComputedStyle(contentElement).lineHeight);

  // Show or hide "read more" based on the line count
  if (lineCount > 5) {
    readMoreElement.style.display = 'block';
  } else {
    readMoreElement.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Initial check
  checkAndToggleReadMore();

  // Add event listener for window resize
  window.addEventListener('resize', checkAndToggleReadMore);
});




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

function toggler1() {
  document.getElementById("toggle-content1").classList.toggle("show2");
}

function toggler2() {
  document.getElementById("toggle-content2").classList.toggle("show2");
}

function toggler3() {
  document.getElementById("droppy2").classList.toggle("show2");
}

function toggler4() {
  document.getElementById("droppy1").classList.toggle("show2");
}


// Change the display
function fruitInside() {
  document.getElementById("theImage1").src = "varieties/Variety Photos/Vietnam White/Vietnam White - Fruit 4.jpg";
  document.getElementById("theImage2").src = "varieties/Variety Photos/Common Red/Common Red - Fruit 4.jpg";
  document.getElementById("theImage3").src = "varieties/Variety Photos/Jade Red/Jade Red - Fruit 4.jpg";
  document.getElementById("theImage4").src = "varieties/Variety Photos/Malaysian Purple/Malaysian Purple - Fruit 4.jpg";
  document.getElementById("theImage5").src = "varieties/Variety Photos/Pink Panther/Pink Panther - Fruit 4.jpg";
  document.getElementById("theImage6").src = "varieties/Variety Photos/Cosmic Charlie/Cosmic Charlie - Fruit 4.jpg";
  document.getElementById("theImage7").src = "varieties/Variety Photos/Sugar Dragon/Sugar Dragon - Fruit 4.jpg";
  document.getElementById("theImage8").src = "varieties/Variety Photos/American Beauty/American Beauty - Fruit 4.jpg";
}

function fruitOutside() {
  document.getElementById("theImage1").src = "varieties/Variety Photos/Vietnam White/Vietnam White - Fruit 3.jpg";
  document.getElementById("theImage2").src = "varieties/Variety Photos/Common Red/Common Red - Fruit 3.jpg";
  document.getElementById("theImage3").src = "varieties/Variety Photos/Jade Red/Jade Red - Fruit 3.jpg";
  document.getElementById("theImage4").src = "varieties/Variety Photos/Malaysian Purple/Malaysian Purple - Fruit 3.jpg";
  document.getElementById("theImage5").src = "varieties/Variety Photos/Pink Panther/Pink Panther - Fruit 3.jpg";
  document.getElementById("theImage6").src = "varieties/Variety Photos/Cosmic Charlie/Cosmic Charlie - Fruit 3.jpg";
  document.getElementById("theImage7").src = "varieties/Variety Photos/Sugar Dragon/Sugar Dragon - Fruit 3.jpg";
  document.getElementById("theImage8").src = "varieties/Variety Photos/American Beauty/American Beauty - Fruit 3.jpg";

}

function fruitFlowers() {
  document.getElementById("theImage1").src = "varieties/Variety Photos/Vietnam White/Vietnam White - Flower 3.jpg";
  document.getElementById("theImage2").src = "varieties/Variety Photos/Common Red/Common Red - Flower 3.jpg";
  document.getElementById("theImage3").src = "varieties/Variety Photos/Jade Red/Jade Red - Flower 3.jpg";
  document.getElementById("theImage4").src = "varieties/Variety Photos/Malaysian Purple/Malaysian Purple - Flower 3.jpg";
  document.getElementById("theImage5").src = "varieties/Variety Photos/Pink Panther/Pink Panther - Flower 3.jpg";
  document.getElementById("theImage6").src = "varieties/Variety Photos/Cosmic Charlie/Cosmic Charlie - Flower 3.jpg";
  document.getElementById("theImage7").src = "varieties/Variety Photos/Sugar Dragon/Sugar Dragon - Flower 3.jpg";
  document.getElementById("theImage8").src = "varieties/Variety Photos/American Beauty/American Beauty - Flower 3.jpg";


}
