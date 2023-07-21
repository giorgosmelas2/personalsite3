/*show the different pages*/ 

function showPage(pageId) {
    var pages = document.getElementsByClassName('content');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }

    var selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
  }

document.addEventListener("DOMContentLoaded", function(event) {
  showPage("home");
});
  
function showPage(pageId) {
  var pages = document.getElementsByClassName("content");
  for (var i = 0; i < pages.length; i++) {
    if (pages[i].id === pageId) {
      pages[i].style.display = "block";
    } else {
      pages[i].style.display = "none";
    }
  }
}
/*this shows the back background when i mouse over and click it */

document.addEventListener("DOMContentLoaded", function(event) {
  showPage("home");
  
  var overlayListItems = document.getElementsByClassName("overlayli");
  for (var i = 0; i < overlayListItems.length; i++) {
    overlayListItems[i].addEventListener("mouseover", function() {
      this.style.backgroundColor = "black";
      this.style.color = "white";
    });
  
    overlayListItems[i].addEventListener("mouseout", function() {
      if (!this.classList.contains("active")) {
        this.style.backgroundColor = "";
        this.style.color = "";
      }
    });
  
    overlayListItems[i].addEventListener("click", function() {
      for (var j = 0; j < overlayListItems.length; j++) {
        overlayListItems[j].classList.remove("active");
        overlayListItems[j].style.backgroundColor = "";
        overlayListItems[j].style.color = "";
      }
  
      this.classList.add("active");
      this.style.backgroundColor = "black";
      this.style.color = "white";
    });
  }
  overlayListItems[0].click();
});

//Process bars
document.addEventListener("DOMContentLoaded", function(event) {
  showPage("home");

  var overlayListItems = document.getElementsByClassName("overlayli");
  for (var i = 0; i < overlayListItems.length; i++) {
    overlayListItems[i].addEventListener("click", function() {
      for (var j = 0; j < overlayListItems.length; j++) {
        overlayListItems[j].classList.remove("active");
      }

      this.classList.add("active");

      if (this.getAttribute("onclick") === "showPage('about')") {
        animateProgressBar(75, 2000); // Set the desired percentage and duration here for the first progress bar
        animateProgressBar2(50, 1500); // Set the desired percentage and duration here for the second progress bar
        animateProgressBar3(80, 2500); // Set the desired percentage and duration here for the third progress bar
        animateProgressBar4(60, 1200); // Set the desired percentage and duration here for the fourth progress bar
        animateProgressBar5(55, 1600);
        animateProgressBar6(40, 1000);
        // Add more function calls to animate additional progress bars if needed
      } else {
        // Reset the progress bars
        document.getElementById('progress1').style.width = '0%';
        document.getElementById('progress2').style.width = '0%';
        document.getElementById('progress3').style.width = '0%';
        document.getElementById('progress4').style.width = '0%';
        document.getElementById('progress5').style.width = '0%';
        document.getElementById('progress6').style.width = '0%';
        // Add more lines to reset other progress bars if needed
      }
    });
  }
});

function animateProgressBar(targetWidth, duration) {
  var progressBar = document.getElementById('progress1');
  var currentWidth = 0;
  var increment = targetWidth / (duration / 10); // Divide by 10 to make it smoother

  var interval = setInterval(function() {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
    } else {
      currentWidth += increment;
      progressBar.style.width = currentWidth + '%';
    }
  }, 10);
}

function animateProgressBar2(targetWidth, duration) {
  var progressBar = document.getElementById('progress2');
  var currentWidth = 0;
  var increment = targetWidth / (duration / 10); // Divide by 10 to make it smoother

  var interval = setInterval(function() {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
    } else {
      currentWidth += increment;
      progressBar.style.width = currentWidth + '%';
    }
  }, 10);
}

function animateProgressBar3(targetWidth, duration) {
  var progressBar = document.getElementById('progress3');
  var currentWidth = 0;
  var increment = targetWidth / (duration / 10); // Divide by 10 to make it smoother

  var interval = setInterval(function() {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
    } else {
      currentWidth += increment;
      progressBar.style.width = currentWidth + '%';
    }
  }, 10);
}

function animateProgressBar4(targetWidth, duration) {
  var progressBar = document.getElementById('progress4');
  var currentWidth = 0;
  var increment = targetWidth / (duration / 10); // Divide by 10 to make it smoother

  var interval = setInterval(function() {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
    } else {
      currentWidth += increment;
      progressBar.style.width = currentWidth + '%';
    }
  }, 10);
}

function animateProgressBar5(targetWidth, duration) {
  var progressBar = document.getElementById('progress5');
  var currentWidth = 0;
  var increment = targetWidth / (duration / 10); // Divide by 10 to make it smoother

  var interval = setInterval(function() {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
    } else {
      currentWidth += increment;
      progressBar.style.width = currentWidth + '%';
    }
  }, 10);
}

function animateProgressBar6(targetWidth, duration) {
  var progressBar = document.getElementById('progress6');
  var currentWidth = 0;
  var increment = targetWidth / (duration / 10); // Divide by 10 to make it smoother

  var interval = setInterval(function() {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
    } else {
      currentWidth += increment;
      progressBar.style.width = currentWidth + '%';
    }
  }, 10);
}

