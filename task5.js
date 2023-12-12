//electric build calculation

// calculate total amunt to be paid if your consumption is 100 unit
// the range is as follow 



let consump = 150

let paid_amount = 0

if(consump <= 20){
    paid_amount = consump + 20; 
}else{
    if(consump <= 35){
        paid_amount = 20 + 15*4 + (consump - 15)
    }

}