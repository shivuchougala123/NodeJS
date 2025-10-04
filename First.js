if(!true){
    console.log("hellow world");
}


const user ={
    name:"shivaraj",
    price:99,

    welComeGreet:function(){
        console.log(`hello ${this.name}`);
        console.log(this);
        
        
    }

    
}
// user.welComeGreet()
user.name="sita"
// user.welComeGreet()

// console.log(this);


function chai() {
    // let name="shiv"
        console.log(this);
        
}

// chai()


const funn=( n ) => ({name:"shiv",age:n})

console.log(funn(1));


 (()=>{
                console.log("hello world")
            })();
    


            (function(){
                console.log("hello world22");
                
            })();
