/**
 * Task 1
 */

class Employee {
    name;
    constructor(userName) {
        this.name = userName;
    };
    displayInfo() {
        console.log(`Employee name is ${this.name}.`);
    }
};

class Manager extends Employee {
    department;
    constructor(userName, userDepertment) {
        super(userName);
        this.department = userDepertment;
    };
    displayInfo() {
        console.log(`Manager name is ${this.name}\n Department is ${this.department}.`);
    }
};

const employee = new Employee('Slava');
employee.displayInfo();

const manager = new Manager('Nikita', 'Sales');
manager.displayInfo();

/**
 * Task 2
 */

class Order {
    orderNumber;
    products = [];
    constructor(userOrderNumber) {
        this.orderNumber = userOrderNumber;
    };
    addProduct(newProduct) {
        this.products.push(newProduct);
    };
    getTotalPrice() {
        let summary = 0;
        this.products.forEach(element => {
            summary += element.price;
        });
        return summary;
    }
};

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };
};

const order = new Order(12345);

const product1 = new Product('phone', 23000);
order.addProduct(product1);

const product2 = new Product('headphones', 5000);
order.addProduct(product2);

console.log(order.getTotalPrice());

/**
 * Task 3
 */

class Student {
    setName(string) {
        this._name = string;
    };
    setAge(age) {
        this._age = age;
    };
    setGrade(grade) {
        this._grade = grade;
    };
    getName() {
        return this._name;
    };
    getAge() {
        return this._age;
    };
    getGrade() {
        return this._grade;
    };
    displayInfo() {
        console.log(`Student ${this.getName()} is ${this.getAge()} years old and have average score is ${this.getGrade()}.`);
    };
};

const student = new Student();
console.log(student);

student.setName('Slava');
console.log(student);

student.setAge(27);
console.log(student);

student.setGrade(78);
console.log(student);

student.displayInfo();