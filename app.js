var header = document.querySelector(".navbuttons");
    var btns = header.getElementsByClassName("navbtns");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    var activeWidth = current[0].getBoundingClientRect().width;
    var activeLeft = current[0].getBoundingClientRect().left;
    const middle = ( (activeWidth / 2) - 17.5 );
    var indicator = document.querySelector(".indicator");

    indicator.style.left = activeLeft + "px";
    indicator.style.marginLeft = "0px";
    indicator.style.marginLeft = middle + "px";

    });
    }

function changeColor(index) {
      const divs = document.querySelectorAll('.navtab');
      const buttons = document.querySelectorAll('navbtns');

      // Reset all divs and buttons to default color
      for (let i = 0; i < divs.length; i++) {
        divs[i].style.margin = '100%';
        divs[i].style.opacity = '0';
      }

      // Change the background color of the clicked div and button
      divs[index].style.marginLeft = '0px';
      divs[index].style.opacity = '1';
}


