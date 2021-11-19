class Сarousel {
  constructor(arr) {
    this.arr = arr;
    this.index = 0;
  }

  next() {
    this.index++;
    const element = this.arr[this.index];
    if(!this.hasNext()) {
      return null;
    }
    return element;
  }

  previous() {
    this.index--;
    const element = this.arr[this.index];
    if(!this.hasPrev()) {
       return null;
    }
    return element;
  }

  current() {
    return this.arr[this.index];
  }

  hasNext() {
    return this.index < this.arr.length;
  }

  hasPrev() {
    return this.index >= 0;
  }

  rewind() {
    this.index = 0;
  }

  lastElem() {
    this.index = this.arr.length - 1;
  }

};

const DATAIMG = ["img/Leonid.png", "img/Recruits.png", "img/Homework.png"];
const carousel = new Сarousel(DATAIMG);
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", function(event) {
  let value = carousel.next();
  if(!value){
    carousel.rewind();
    value = carousel.current();
  };
  document.querySelector(".pictures").innerHTML =`<img src="${value}" alt="img"">`;
});

prev.addEventListener("click", function(event) {
  let value = carousel.previous();
  if(!value){
    carousel.lastElem();
    value = carousel.current();
  }
  document.querySelector(".pictures").innerHTML =`<img src="${value}" alt="img"">`;
  console.log(carousel.index)
});

document.querySelector(".pictures").innerHTML = `<img src="${carousel.current()}" alt="img">`





