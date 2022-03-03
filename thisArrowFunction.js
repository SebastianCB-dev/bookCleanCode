const counter = {
  number: 0,
  increase() {
    setInterval( ()=> {
       ++this.number;
       console.log(this.number);
    }, 1000 );
  }
};
// counter.increase();
// --------------------------------------------------------------------------------------
const counter2 = {
  number: 0,
  increase() {
    setInterval( function(){ ++this.number }, 1000 );
  }
};
// counter2.increase();
// ---------------------------------------------------------------------------------------
const counter3 = {
  number: 0,
  increase() {
    const that = this;
    setInterval( function(){ ++that.number}, 1000 );
  }
}






