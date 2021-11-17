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

const DATAIMG = ["/img/Leonid.png", "/img/Recruits.png", "/img/Homework.png"],
      carousel = new Сarousel(DATAIMG),
      next = document.querySelector(".next"),
      img = document.querySelector(".pictures img"),
      path = "file:///D:/front_end/Sparta_camp/Shalaiev_Roman_hw1"

console.dir(img)     
next.onclick = function() {
  img.src = path + carousel.next();
}      





