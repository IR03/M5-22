class Parent{
    constructor(){
        this.fatherName = "Haq-Shaheb"
    }
}

class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Shejuti");
//const parent = new Parent();
console.log(baby.getFullName()); 
//console.log(new Parent());