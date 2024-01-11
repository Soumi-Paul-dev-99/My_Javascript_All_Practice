function counter() {
  var count = 0;
  this.incrementcounter = function () {
    count++;
    console.log(count);
  };
  this.decrementcounter = function () {
    count--;
    console.log(count);
  };
}
var counter1 = new counter();
counter1.incrementcounter();
counter1.incrementcounter();
counter1.decrementcounter();
