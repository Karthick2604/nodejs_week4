const { resolve } = require("path");

let promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve,100,'err');
});
let promise2 = "success";
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'success');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});