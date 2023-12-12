class User{
    //body
    name;
    email;
    status;
    role;
    address;

    //cannot create this as an arrow
    //cannot be async function
    constructor(_name,_email,_status){
        //when object is created
        //console.log("I am first call")
        this.name = _name;
        this.email = _email;
        this.status = _status
    }

    setStatus = (_status) => {
        this.status = _status
    }
}

const user = new User()
user.name = "Sandesh"
user.email = "sandesh@bradwayinfosys.com"
// user.status = "active"
user.setStatus("active")

console.log(user)