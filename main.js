class Сarousel {
  constructor(arr) {
    this.arr = arr;
    this.index = 0;
  }

  next() {
        const element = this.arr[this.index];
        this.index++;
        if(!this.hasNext()) {
          return null;
        }
        return element;
  }
  hasNext() {
    return this.index <= this.arr.length;
  }

  rewind() {
    this.index = 0;
  }
};

const DATAIMG = ["img/Leonid.png", "img/Recruits.png", "img/Homework.png"],
      carousel = new Сarousel(DATAIMG),
      next = document.querySelector(".next");

  
next.addEventListener("click", function(event) {
  document.querySelector(".pictures").innerHTML =`<img src="${carousel.next()}" alt="img"">`;
})





