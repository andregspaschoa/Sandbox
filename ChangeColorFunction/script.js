function changeAlert() {
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
  
    div2.addEventListener('mouseenter', () => {
      div1.style.backgroundColor = " rgb(233, 87, 87)";
    });
  
    div2.addEventListener('mouseleave', () => {
      div1.style.backgroundColor = "transparent";
    });
  }

  /**
   * @fonte :
   * https://www.w3schools.com/jsref/event_onmouseenter.asp
   */