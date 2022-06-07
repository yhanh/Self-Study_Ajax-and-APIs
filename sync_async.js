// sync code 同步
// js is a single-thread programming language. 單執行序，一次只能錯一件事情

function sayHello() {
  console.log("Hello");
  console.log("Hoq are you");
}

console.log("start");

sayHello();

console.log("end");

/* output:
start
Hello      
Hoq are you
end */


// async code 異步/ 非同步
console.log("start");

setTimeout(() => {
  console.log("Here is the code");
}, 2000);

console.log("end");

/* output:
start      
end        
Here is the code */
