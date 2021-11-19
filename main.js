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

  previous() {
        this.index = this.index - 1;
        const element = this.arr[this.index];
        if(this.hasPrev()) {
          return null;
        }
        return element;
  }

  hasNext() {
    return this.index <= this.arr.length;
  }

  hasPrev() {
    return this.index < 0;
  }

  rewind() {
    this.index = 0;
  }

  lastElem() {
    this.index = this.arr.length;
  }

};

const DATAIMG = ["img/Leonid.png", "img/Recruits.png", "img/Homework.png"];
const carousel = new Сarousel(DATAIMG);
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

document.querySelector(".pictures").innerHTML = `<img src="${carousel.next()}" alt="img">`
  
next.addEventListener("click", function(event) {
  let value = carousel.next();
  if(value === null){
    carousel.rewind();
    value = carousel.next();
  }
  document.querySelector(".pictures").innerHTML =`<img src="${value}" alt="img"">`;
});

prev.addEventListener("click", function(event) {
  let value = carousel.previous();
  if(value === null){
    carousel.lastElem();
    value = carousel.previous();
  }
  document.querySelector(".pictures").innerHTML =`<img src="${value}" alt="img"">`;
});






