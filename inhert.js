// class Test{
//     constructor(){
//         console.log("I am on Test class")
//     }
// }

// class User extends Test{
//     constructor(){
//         super()
//         console.log("I am on User class")
//     }
// }

// class Student extends User {
//     constructor() {
//         super()
//         console.log("I am on Stydent class")
//     }
// }

// const std = new Student()



class User {
    getUser() {
        console.log("I am on User class")
    }
}

class Student extends User {
    getUser() {
        super.getUser()
        console.log("I am on Student class")
    }
}

const std = new Student()
std.getUser()