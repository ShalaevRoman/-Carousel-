class Сarousel {
  constructor(arr) {
    this.arr = arr;
    this.index = 0;
  }

  next() {
      let element;
        element = this.arr[this.index];
        this.index++;
        return element;
  }
}

let data = ["pic1", "img2", "photo3"]

let carousel = new Сarousel(data);

console.log(carousel.next())
console.log(carousel.next())



