//task 1

// let test = (document.getElementById("test").innerHTML = "Last");
// let test1 = document.querySelector("#test");
// test1.innerHTML = "Last";

//task 2

// let img = (document.querySelector(".image").src = "/cat.jpg");
// alert(document.querySelector(".image").outerHTML);

//task 3

// let a = document.querySelectorAll("#text");

// for (let i = 0; i < a.length; i++) {
//   let count = 0;
//   for (const child of a[i].children) {
//     console.log("Selector text " + count + ":" + child.innerText);
//     count++;
//   }
// }

//task 4
// const list = document.querySelectorAll("#list");
// let arr = [];
// let temp = 0;
// for (let i = 0; i < list.length; i++) {
//   let count = true;

//   for (const child of list[i].children) {
//     let c = child.innerText;
//     arr.push(c);
//   }
// }

// alert(arr[0] + " " + arr[4] + " " + arr[1] + " " + arr[3] + " " + arr[2]);
//task 5

// document.body.innerHTML = ` <h1 style = "background-color:lime">I'am a big header!!!</h1>
// <div id="myDiv">
//   <b>First paragraph</b>
//   <p style = "color:red">Second paragraph</p>
//   <u>Third paragraph </u>
//   <br>
//   <em>Fourth paragraph</em>
// </div>
// <ul style="display:inline" id="myList">
//   <li style="display:inline">Make</li>
//   <li style="display:inline">me</li>
//   <listyle="display:inline">horizontal!</li>
// </ul>
// <span style = "display:none">Make me invisible, please!</span>`;

//task 6

// let msg1 = prompt("first value");
// let msg2 = prompt("second value");
// document.getElementById("input1").value = msg1;
// document.getElementById("input2").value = msg2;

// document.getElementById("input1").value = msg2;
// document.getElementById("input2").value = msg1;

//task 7

// document.body.innerHTML = `	  <main class="mainClass check item">
// <div id="myDiv">
// <p>First paragraph</p>
// </div>
// </main> `;
