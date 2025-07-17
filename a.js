// alert("welcome to js mr rahul");
// console.log("hi rahull.....");
// function rahul(name){
//   console.log("hello friends, I am". name);
// }
// rahul("Rahul")
// #operators
// let a=5;
// let b=2;
// console.log("a + b =",a+b)
// console.log("a - b =",a-b)
// console.log("a ** b =",a**b)
// console.log("a % b =",a%b)function rahul(name){
// console.log("a ^ b =",a^b)

// assignment oprators
// let a=5;
// console.log(a+=10);
// console.log(a-=2);

// let a=10,b="10",c=5;
// console.log("a==b :",a==b);
// console.log("a===b :",a===b);

//ternary operator
/*let age=prompt("enter your age:");
let r= age>18? console.log("adult"):console.log("not adult");*/

// for( let i=1;i<=100;i++){
//   console.log("hello rahul");
// }
// console.log("loop has ended");
  

// let f = ["apple","banana","mango"];
// for (let a of f){
//   console.log(a);
// }
 


// let n=prompt("enter a number");
// if(n%5==0){
//   console.log("given number is divisible by 5 ");
// } else {
//   console.log("given number is not divisible by 5 ");
// }


// let n=prompt("enter a number");
// if(n>90){
//   console.log("grade A");
// }
// else if(n>80){
//   console.log("grade B");
// }   
// else if(n>70){
//   console.log("grade C"); 
// }
// else if(n>60){
//   console.log("grade D");
// } 
// else if(n>50){    
//   console.log("grade E");
// } 
// else {
//   console.log("fail");
// }

// for(let i=1;i<=100;i++){
//   if(i%2!=0){
//     console.log(i);
//   }
// }

// let num=prompt("enter a number");
// let isprime=true;
// for(let i=2;i<num;i++){
//   if(num%i==0){   
//     isprime=false;
//     break;
//   }
// }
// if(isprime){
//   console.log(num,"is a prime number");
// } else {
//   console.log(num,"is not a prime number");
// }

// let ab="shivakrishna";
// let count=0;
// for(let i=0;i<ab.length;i++){
//   if(ab[i]=="a"|| ab[i]=="e" || ab[i]=="i" || ab[i]=="o" || ab[i]=="u"){
//     count++;
//   }
// }
//   console.log("number of vowels in",ab,"is",count);
//   let monthnames = ["jan", "feb", "march", "april", "May", "june", "july", "aug", "sep", "oct", "nov", "dec"];
//   console.log(monthnames.length);
//   for(let i=0;i<monthnames.length;i++){
//       console.log("month is",monthnames[i]);
      
//     }
  
// let a=[97,82,75,64,36]
// console.log(a);
// console.log(a.length);
// console.log(a.toString());
// console.log(a.join("_"));
// a.pop();
// console.log(a);
// a.push(100);
// console.log(a);
// a.shift();
// console.log(a);
// a.unshift(0);
// console.log(a);
// delete a[2];
// console.log(a);
// console.log(a.concat([108,109]));
// console.log(a.slice(1,3));


// let fruits=["apple","banana","dragon","orange"]
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.push("caroot");
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[1]);
// fruits[2]="papaya";
// console.log(fruits);

// let marks=[1,2,3,4,5,6,7,8,9];
// let c=0;
// for(let i=0;i<marks.length;i++)
// {
//     c=c+marks[i];
// }
// let a=c/marks.length;
// console.log(a);
// console.log(c);

// let bill=1000;
// let disccount=20/100;
// console.log( bill-bill*disccount);
// let n=prompt("enter a number of tab u want");
// let sum=0;
// const arr[];
// for (let i=0;i<n;i++){
//     arr[i]=parseInt(prompt("enter the tab price:"));
//     sum=sum+arr[i];
// }
// console.log(arr[i] );
// // let discount=20/100;
// // let discount2=10/100;
// // if(sum>1000){
// //     sum=sum-sum*discount;
// //     console.log(sum);
// // }
// // else if(sum<1000){
// //     console.log(sum=sum-sum*discount2);
// // }
// // else{
// //     console.log("your bill is less");
// // }

let input=prompt("enter the numbers");
let arr=input.split(",").map(Number);
console.log(arr);
