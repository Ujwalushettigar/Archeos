// function declaration 
// add();
// function add(){
//     let a=10;
//     let b=20;
//     console.log(a+b);
// }
// add();
// console.log(0.1+0.2==0.3);


// const sum = function (p1,p2,p3) {
//     const add=p1*p2*p3;
//     console.log("product of",p1,",",p2,"and",p3,"is",add);
// }
// sum(3,4,5);
// console.log(typeof("3"+2+1));

// let a=(p1,p2)=>{
//     console.log(p1+p2);
// };
// a(20,30);

// (()=>{
//     console.log("IIFE");
// })();

//tag
// var body=document.getElementsByTagName("body");
// console.log(body[0]);

// let a = [1, 4, 8, 9, 67];
// for(let i=0;i<a.length;i++)
// {
//     a[i]=a[i]*2; 
//     console.log(a[i]);
// }
// console.log(a);
// let b=a.map((el,ui)=>{
//     return el*ui;
// })
// console.log(a);
// console.log(b);

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a);
// for(let i=0;i<a.length;i++)
// {
    
//     a[i]=a[i]*2;
//     console.log(a[i]);
// }
// console.log(a);

// for (let i=0; i<a.length;i++)
// {
//     console.log(`1*${a[i]}=`,a[i]);
// }
// console.log(a);
// let b=a.map((el,ui)=>{
//     console.log(`2*${el}=`,el*2);
// })
// for( let i=0;i<a.length;i++){
// if(a[i]%2==0){
//     console.log(a[i]);
// }
// }

// let a=prompt("Enter the value of a:");
// if(a>=90){
//     console.log("Got a Bike");
// }
// else if(a>=80){
//     console.log("Party");
// }
// else if(a>=70){
//     console.log("Game");
// }
// else{
//     console.log("Nothing");
// }
// a>=35 ? console.log("Pass") : console.log("Fail");


// let a=[1,2,3];
// let b=[1,2,3];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);

// let a=[1,2,3,4,5,6,7,8,9,10];
// let b=a.filter((el)=>{
//     return el%2==0;
// });
// console.log(b);
// let c=a.filter((el)=>{
//     return el%2!=0;
// });
// console.log(c);
// let d=a.filter((el)=> el>=5);
// console.log(d);

// let b=a.filter((el)=>el>=5).map((el)=>el*2);
// let c=b.map((el)=>el*5);
// console.log(b);
// console.log(c);

// let a = 5;
// for (let i = 0; i < a; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// let b=a.reduce((acrtrrc, cur, index)=>{
//     return acrtrrc + cur;
// },0);
// console.log(b);
// let acc=10;
// acc=acc+1;
// acc=acc+2;
// acc=acc+3;
// acc=acc+4;
// acc=acc+5;
// acc=acc+6;

// const evensum=a.filter((el)=>el%2==0).reduce((a, e)=>a+e);
// const oddsum=a.filter((el)=>el%2!=0).reduce((a, e)=>a+e);
// console.log(evensum,oddsum);

// const c=[0,0,0,0,0,0,0,0,0,0];
// const d=c.map((el,ui)=>{
//     return ui+1;
// });
// console.log(d);
// const evesum=d.filter((el)=>el>=5).filter((el)=>el%2==0).reduce((d, e)=>d+e);
// console.log(evesum);
// const odsum=d.filter((el)=>el>=5).filter((el)=>el%2!=0).reduce((d, e)=>d+e);
// console.log(odsum);

//Tag selectors
// let body=document.getElementsByTagName("h1");
// console.log(body[0]);

// //Class Selector
// let classes = document.getElementsByClassName("container");
// console.log(classes[0]);
// // Id selector
// let val = document.getElementById("reset");
// console.log(val);
// // Query selector
// let varr = document.querySelector("button");
// console.log(varr);
// // Query Select all
// let as = document.querySelectorAll("button");
// console.log(as[1]);

// let text=classes[0].textContent;
// console.log(text);

// let txt=classes[0].innerHTML;
// console.log(txt);

// let node=document.getElementsByClassName("container");

// let text = node[0].innerHTML;
// console.log(text);

// let a=document.querySelectorAll("button");
// console.log(a[1]);

// a[1].textContent="Upliftment";

// let sty=document.querySelector("h1");
// console.log(sty);

// sty.style.color="red";
// sty.style.fontSize="xx-larger";
// sty.style.backgroundColor="yellow";
// sty.style.padding="10px 20px";
// sty.style.border="2px solid brown";

// let count = 0;
// function updateitem(){
//     document.getElementById("item").innerText = count;
// }
// function increment(){
//     count++;
//     updateitem();
// }
// function decrement(){
//     count--;
//     updateitem();
// }
// function reset(){
//     count = 0;
//     updateitem();
// }

// const div=document.createElement("img");
// div.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MPzKtpD3M1oxPgi00JhYlDl26bCrKqsrxBzvD_rHo7dFPefrnERbCmrk9EsiRYpRYvlyWDxedKebjhGtv2VMAaRpJMeIt5DBCfm_0gIJ";
// div.alt="Virat Kohli";
// document.body.appendChild(div);

// const incButton = document.querySelectorAll("button");
// const p=document.querySelector(".item");
// let item=0;
// const handleInc = () =>{
//         item++;
//         p.textContent=item;
    
// }
// const handleDec = () =>{
//     item--;
//     p.textContent=item;
// }
// const init = () =>{
//     item=0;
//     p.textContent=item;
// }
// incButton[0].addEventListener("click",handleInc);
// incButton[1].addEventListener("click",handleDec);
// incButton[2].addEventListener("click",init);

// const incButton = document.querySelectorAll("button");
// const p=document.querySelector(".item");
// let item=0;
// const handler = (val) =>{
//         val ? item++ : item-- ;
//         p.textContent=item;
//         if(e.target.id==="Decrement"){
//             val=false;
//         }
// }
// const init = () =>{
//     item=0;
//     p.textContent=item;
    
// }
// incButton[0].addEventListener("click",() =>handler(true));
// incButton[1].addEventListener("click",() =>handler(false));
// incButton[2].addEventListener("click",init);

// var obj={
//     id:1,
//     name:"Name",
//     email:"example@com",
//     data:{
//         address:"Delhi",
//         contact:789987325,
//         adhaar:1234567,
//         value:{
//             color:"green",
//             length:34,
//             width:25,
//         } 
//     }
// };
// console.log(obj);
// console.log(obj.id);
// console.log(obj.name);
// console.log(obj.email);
// console.log(obj.data.address);
// console.log(obj.data.value.width);
// console.log(obj.data.value);
// json=JSON.stringify(obj); 
// console.log(json);


// console.log(a);
// let b =a.map((el)=>{
//     return el.id=el.id*el.id;
// });
// a.forEach((el)=>(el.id=el.id*el.id));
// console.log(a);
// console.log(b);
// const b = a.map((el,ui) =>{
//     return el;
// })
// console.log(b);

// console.log(b);
// a.map((el)=>console.log(el));

// const b=[0,0,0,0,0,0,0,0,0];
// const a= b.map((el,index)=>{
//     return {
//         id:index,
//         name:index+el,
//         as: index+index+el,
//     }
// })
// console.log(a);
// let c=a.filter((el)=>el.id%2==0 && el.name%2==0);
// let d=a.filter((el)=>el.id%2!=0 || el.name%2!=0);
// console.log(c);
// console.log(d);

// const fetchData=async()=>{
//     const response=await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response.ok);
//     if(response.ok==true){
//     const data=response.json();
//     console.log(data);
//     }
// }
// fetchData();
// console.log("hello");

// const fetchData=async()=>{
//     const ret=await fetch("https://jsonplaceholder.typicode.com/todos");
//     console.log(ret.ok);
//     if(ret.ok==true){
//         const data=ret.json();
//         console.log(data);
//     }
// }
// fetchData();
// console.log();

// const fetchData=async()=>{
// try{
//     const ret=await fetch("https://jsonplaceholder.typicode.com/albums");
//     console.log(ret.ok);
//     if(ret.ok===true){
//         const data=await ret.json();
//         console.log(data);
//     }else{
//         throw new Error("something went wrong!!!");
//     }
// }catch(err){
//     console.log("Error",err);
// }
// };
// fetchData();

// const fetchdata=async()=>{
// try{
//     const ret=await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(ret.ok);
//     if(ret.ok===true){
//         const data=await ret.json();
//         console.log(data);
//     }else{
//         throw new Error("something went wrong!!!");
//     }
// }catch(err){
//     console.log("Error",err);
// }
// };
// fetchdata();

