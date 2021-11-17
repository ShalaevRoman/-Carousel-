let btn_prev = document.querySelector(".prev"),
    btn_next = document.querySelector(".next"),
    images = document.querySelectorAll(".pictures img");
    i = 0;

function next() {
  images[i].style.display = "none";
  i++;
  if(i >= images.length){
    i = 0;
  }
  images[i].style.display = "block";
};

function prev() {
  images[i].style.display = "none";
  i = i - 1;
  if(i < 0) {
    i = images.length - 1;
  }
  images[i].style.display = "block";
}

btn_next.onclick = next;
btn_prev.onclick = prev;





