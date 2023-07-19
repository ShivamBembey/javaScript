//String to Number
var st = "33";
console.log(Number(st));

//String to Boolean
var name = "Shivam";
var name2 = "";
console.log(Boolean(name));
console.log(Boolean(name2));

//String to Object
var st2 = '{"Age":22}';
var jsonObj = JSON.parse(st2);
console.log(jsonObj);
console.log(typeof(jsonObj));
console.log(jsonObj.Age);

//String to Array
let st3 = "Hello,How,Are,You";
let arr = st3.split(",");
console.log(arr);

//Number to String
var x = 56;
console.log(String(x));

//Number to Boolean
var y = 42;
var z = 0;
console.log(Boolean(y));
console.log(Boolean(z));

//Boolean to String
var isTrue = true;
console.log(String(isTrue));
console.log(typeof(String(isTrue)));

//Boolean to Number
var isTruee = true;
var isFalse = false;
console.log(Number(isTruee));
console.log(Number(isFalse));

//Object to Array
var myobj = {'Name':'Shivam',
            'Age':22,
            'Company':'CloudEQ'};
console.log(Object.keys(myobj));
console.log(Object.values(myobj));
console.log(Object.entries(myobj));

//Object to String
var jsonStr = JSON.stringify(myobj);
console.log(jsonStr);
console.log(typeof(jsonStr));

//Array to Object
var arry = ['A','B','C','D','E'];
var obj = {};

for(let i=0; i<arry.length; i++){
    obj[`key${i}`] = arry[i]
}
console.log(obj);

//Array to String
var str1 = arry.join("-");
var str2 = arry.join(",");
console.log(str1);
console.log(str2);