
console.log("--welcome to js----");
//console.log("----starting with variable----", c);


//const a = 5;
//var c = 7;
//let b = 6;

//console.log("a");
//console.log("a : , b : , c : ", a, b, c);

//console.log("---sum---" + a + b + c);

//console.log("--if else statements--");
//const marks = 80;
//if(marks>40){
  //  console.log("pass");
//}else{
  //  console.log("fail");
//}//
//console.log("largest number:");
//const x = 5;
//const y = 555;
//const z = 888;



//if (x>y){
    //if(x>z){
        //console.log(x);}
    //}else {
        //if(y>z){
        //console.log(y);
        //}
      //  else{
  //          console.log(z);
    //    }
//    }
//console.log("---For loop--");
//let sum = 0;
//for(let i= 0; i < 10; i++){
  //  console.log(i++);
  //sum = sum+i;  
//} console.log(sum);
console.log("---arr-----");
indexes:0,1,2,3,4,5,6,7
const arr =[1,2,3,4,5,6,6,6];
console.log(arr);
console.log("last value : ", arr[7]);
//for (let i = arr.length-1;i >= 0; i--){
 // console.log(arr[i]);
//}
console.log("----add new element at given index:");
arr.splice(4,0, 7);
console.log(arr);
console.log("---remove elementfrom array-------");
arr.splice(2, 1);
console.log(arr);

console.log("---for each loop---");
const arr2 = [4, 7, 5, 3, 1, 1];
const myFun = (element) => {
  console.log(element);
};
arr2.forEach(myFun);
console.log("--objects---");

const obj = {
  name: "harsh",
  rollno: 249023, 
  result: "pass",
}; 
console.log(obj);
console.log(" name :",obj.name);
console.log("---add new key in obj--- ");
obj.id = 2;
obj.city = "delhi";
console.log(obj);
console.log(" city :", obj["city"]);

console.log("---remove element from obj---");
delete obj.name;
console.log(obj);

const data =[
  {
    id: 1,
    name: "a",
  },{
    id: 2,
    name: "b",
  },
  {
    id : 3,
    name:"c"


  },{
    id: 4,
    name:"d",
  }
]
for(let i=0;i< data.length; i++){
  const myobj =data[i];
  //console.log(myobj.id);
  myobj.rollno = i;
}
//console.log(data);
