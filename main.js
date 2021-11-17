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

  previous() {
    const element = this.arr[this.index];
    this.index = this.index - 1;
    if
  }

  rewind() {
    this.index = 0;
  }
};

const DATAIMG = ["img/Leonid.png", "img/Recruits.png", "img/Homework.png"];
const carousel = new Сarousel(DATAIMG);
const next = document.querySelector(".next");

document.querySelector(".pictures").innerHTML = `<img src="${carousel.next()}" alt="img">`
  
next.addEventListener("click", function(event) {
  let value = carousel.next();
  if(value === null){
    carousel.rewind();
    value = carousel.next();
  }
  document.querySelector(".pictures").innerHTML =`<img src="${value}" alt="img"">`;
})





