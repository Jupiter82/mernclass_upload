let students = []

let student_1={
    name :"one",
    mark : 90,
    address : "thimi",
    email : "one@gmail.com"
}
let student_2={
    name :"two",
    mark : 70,
    address : "kathamndu",
    email : "two@gmail.com"
}
let student_3={
    name :"three",
    mark : 50,
    address : "lalitpur",
    email : "three@gmail.com"
}
students.push(student_1,student_2,student_3)

let first_per = students[0].mark/500 * 100
students[0].percent = first_per.toFixed(3)

let second_per = students[1].mark/500 * 100
students[1].percent = second_per.toFixed(3)

console.log(students)


console.log("Name:"+students[0].name+"")