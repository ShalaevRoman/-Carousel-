class carousel {
  constructor(arr) {
    this.arr = arr;
  }

  next() {
    let index = 0,

    return {
      next: function () {
        let element;
        element = this.arr[index];
        index++;
        return element
      }
    }    
  }
}





