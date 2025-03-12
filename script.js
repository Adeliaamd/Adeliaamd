function moveToSelected(element) {
    let selected;
    
    if (element === "next") {
      selected = document.querySelector(".selected").nextElementSibling;
    } else if (element === "prev") {
      selected = document.querySelector(".selected").previousElementSibling;
    } else {
      selected = element;
    }
  
    if (!selected) return;
  
    let next = selected.nextElementSibling;
    let prev = selected.previousElementSibling;
    let prevSecond = prev ? prev.previousElementSibling : null;
    let nextSecond = next ? next.nextElementSibling : null;
  
    document.querySelectorAll("#carousel div").forEach(div => div.className = "");
  
    selected.classList.add("selected");
    if (prev) prev.classList.add("prev");
    if (next) next.classList.add("next");
    if (nextSecond) nextSecond.classList.add("nextRightSecond");
    if (prevSecond) prevSecond.classList.add("prevLeftSecond");
  
    let hideLeft = prevSecond ? prevSecond.previousElementSibling : null;
    let hideRight = nextSecond ? nextSecond.nextElementSibling : null;
  
    while (hideLeft) {
      hideLeft.classList.add("hideLeft");
      hideLeft = hideLeft.previousElementSibling;
    }
  
    while (hideRight) {
      hideRight.classList.add("hideRight");
      hideRight = hideRight.nextElementSibling;
    }
  }
  
  // Event listeners for keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveToSelected("prev");
    } else if (e.key === "ArrowRight") {
      moveToSelected("next");
    }
  });
  
  // Event listeners for click events
  document.querySelectorAll("#carousel div").forEach(div => {
    div.addEventListener("click", function () {
      moveToSelected(this);
    });
  });
  
  document.getElementById("prev").addEventListener("click", function () {
    moveToSelected("prev");
  });
  
  document.getElementById("next").addEventListener("click", function () {
    moveToSelected("next");
  });
  