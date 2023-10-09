class person{
    constructor(name,age){
        this.name= name;
        this.age=age;
        
    }
    info(){
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const person1 = new person("Emanuela" , 18);
person1.info();