// 1 airthametic 

// 2 increment or drcreament ++ , --

// 3 assignment operator =

//4 comparision operator >,< ,<= ,>=, ==,===, != (bullen return)

//5 string contactination

//6 logical operators 
console.log(a==b) && (a===b)
console.log(a==b) && !(a===b)
console.log(a==b) || (a===b)
//7 ternary operators
// ... spread operators (only work with arrray and objects)
// ... rest operators


// let a = 10;
// let b = 10;
// let c = a + b;

// let e = 3;
// let f = a/e;
// let g = a % e;
// console.log(f)
// console.log(g)

// a++ // a = a+

// console.log(a) post assign
// console.log(a++)
// ++a //1

// console.log(a) pre assign
// console.log(++a)


// let i = 1;

// console.log(i++)

// a = 10;

// a++
// ++a

// a = a + 2
// a += 2; //a=a+2

// a -= 2; //a=a-2

let x = 10;
let y = "10";
// "a"  => ascII value
// == value
// === value datatype
// console.log( x === y)
// console.log( x == y)

// console.log( x !== y)
// console.log( x != y)

let z = x + y
let w = x - y
console.log(x)
console.log(w)


//araay
//student
// ...

//percentage = 500 total


// let student = {
// {
//     name:

// },


// }

// let first_per = student[0].mark/500 * 100
// student[0].percentent = first_per
// console.log(students)





let user_1 = {
    name:"user one",
    email:"user@gmail.com",
    address:"kathmandu"
}

let admin_1 ={ ...user_1,
role: "admin",
organization: "bradway",

}

let user_2 = {...user_1}

console.log(user_2);

let arr_1 = [1,2,3]
let arr_2 = [4,5,6]

let arr_3 = [...arr_1, ...arr_2]

console.log(arr_3)
//aligning  //rest operatrs

console.log(admin_1)