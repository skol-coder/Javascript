console.log("Variables");
var number = 10;
var string = "abcd";
var boolean = true
var object = {a:"a",b:"b"};
console.log(number,string,boolean,object);
/***********************************************/
console.log("object inside object");
var college={
    name:"abcd",
    principal:"efgh",
    faculty: {1:"a",2:"b",3:"c",4:"d"}
};
console.log(college);
console.log(college.faculty);
/*********************************************/
console.log("functions");
function circle(radius){
    return Math.PI*Math.pow(radius,2);
}
console.log(circle(10));
/*********************************************/
console.log("arrays");
var arr = ["abcd",circle(100),1234];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
/********************************************/
console.log("loops");
console.log("for loop");
for(var i=0 ; i<arr.length ; i++){
    console.log(arr[i]);
}
console.log("while loop");
var j = 0;
while(j < arr.length){
    console.log(arr[j]);
    j++;
}
console.log("do while loop");
var k=0;
do{
    console.log(arr[k]);
    k++;
}while(k<arr.length)
