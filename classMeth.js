class Employee{
    // Constructor Method
    constructor(name, company, age){
        this.name = name;
        this.company = company;
        this.age = age;
    }
    // instance method
    aboutEmployee() {
        console.log(`Name: ${this.name} \nCompany: ${this.company}`)
    }
    // Computed Methods
    ['Age'](){
        console.log(`Employee Age: ${this.age}`)
    }
    // Getter Method
    employeeName(){  
        return this.name;
    }
    employeeCompany(){
       return this.company;

    }
    employeeAge(){
        return this.age;
    }

    // Setter Method
    setName(newName){
        this.name = newName;
    }
    setAge(newAge){
        this.age = newAge;
    }
}
const obj1 = new Employee("Shivam","CloudEQ",22);
// Accessing Properties using getter methods
console.log(obj1.employeeName());
console.log(obj1.employeeCompany());
console.log(obj1.employeeAge());

// Changing some properties using setter methods
obj1.setName("xyz");
obj1.setAge(36);
console.log(obj1.employeeName());
console.log(obj1.employeeAge());

// Accessing properties using instance methods
obj1.aboutEmployee();

// Accessing properties using computed methods
obj1.Age();