/*function time( tam,eng){
    var tamil = tam;
    var english = eng;
    console.log(tamil+english)
    //console.log('hi karthick');
  }// Add your code here
  setTimeout(time(10,20),8000);*/
  let timerId = setInterval(() => console.log('tick'), 1000);

// after 5 seconds stop
setTimeout(() => {clearInterval(timerId); console.log('stop'); }, 3000);
  

/*console.log(sayHi());
function sayHi() {
    console.log('Hello');
  }
  
  //setTimeout(sayHi, 1000);
*/


