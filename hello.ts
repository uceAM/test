let user  = "abc";
type rgb = [number,number,number];

let rgbval: rgb = [124,232,255];

type unionType= string|boolean;

let unionTypeExample: unionType = true;
unionTypeExample = "not true";

type obj1= {a:string};
type obj2 = {b:number};
type inter = obj1 & obj2;
let egObj1:inter = {a:"21",b:21}
console.log(3+2);
console.log(user);

// export {}