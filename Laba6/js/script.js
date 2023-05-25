class Component{
    accept(visitor){}
}

class Company extends Component{
    departmentList = []

    constructor(department){
        super()
        this.departmentList = department
    }

    accept(visitor){
        visitor.visitCompany(this)
    }
}

class Department extends Component{
    employeeList = []

    constructor(employees){
        super()
        this.employeeList = employees
    }

    accept(visitor){
        visitor.visitDepartmen(this)
    }
}

class Employee{
    positionName = ""
    salary = 0

    constructor(namePos, salary){
        this.positionName = namePos
        this.salary = salary
    }
}

class Visitor{
    visitCompany(component){
        let i = 1
        console.log(`Зарплатна відомість компанії`);
        component.departmentList.forEach(element => {
            console.log(`Департамент ${i}`)
            element.employeeList.forEach(element => {
                console.log(`Співробітник ${element.positionName} зарплата ${element.salary}`);
            });
            i++
        });
    }

    visitDepartmen(component){
        console.log(`Зарплатна відомість департаменту`);
        component.employeeList.forEach(element => {
            console.log(`Співробітник ${element.positionName} зарплата ${element.salary}`);
        });
    }
}

let employee1 = new Employee('1', 10000)
let employee2 = new Employee('2', 20000)
let employee3 = new Employee('3', 15000)
let employee4 = new Employee('4', 60000)
let employee5 = new Employee('5', 22000)
let employee6 = new Employee('6', 32000)

let department1 = new Department([employee1, employee2, employee3])

let department2 = new Department([employee4, employee5, employee6])

let company = new Company([department1, department2])

let visitor = new Visitor()
department1.accept(visitor)
department2.accept(visitor)

company.accept(visitor)