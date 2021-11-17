class Сarousel {
  constructor(arr) {
    this.arr = arr;
    this.index = 0;
  }

  next() {
        let element = this.arr[this.index];
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
}

let data = ["pic1", "img2", "photo3"]

let carousel = new Сarousel(data);

console.log(carousel.next())
console.log(carousel.next())
console.log(carousel.next())
console.log(carousel.next())




