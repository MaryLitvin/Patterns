class Mediator{
    infOrder = "нічого";
    time = "сьогодні";

    constructor(){
        this.customers = []
    }

    choose_date(customer, indep, date, another, nameAnother, phoneAnother){
        const nameCust = customer.getName();
        if(indep == true){
            this.infOrder = `Замовлення ${nameCust}. Забрати самостійно`
            this.info_form(this.infOrder);
        }else{
            if (date <= 15 && date > 0) {
                this.time = "8:00 - 14:00";
            } else {
                this.time = "14:00 - 19:00";
            }

            if(another == true){
                this.infOrder = `Замовлення ${nameCust}, Забере ${nameAnother}, телефон ${phoneAnother}. час ${this.time}`
            }else{
                this.infOrder = `Замовлення ${nameCust}, час ${this.time}`
            }

            this.info_form(this.infOrder);
        }
        this.customers.push(nameCust)
    }
    info_form(info){
        console.log(info)
    }
}
class Customer{
    constructor(name, mediator){
        this.name = name
        this.myMediator = mediator
    }

    getName(){
        return this.name
    }
    makeOrder(indep, date, another, nameAnother, phoneAnother){
        this.myMediator.choose_date(this, indep, date, another, nameAnother, phoneAnother)
    }
}

let mainMediator = new Mediator();

let katya = new Customer("Katya", mainMediator)
let pasha = new Customer("Pasha", mainMediator)
let sasha = new Customer("Sasha", mainMediator)

katya.makeOrder(true)
pasha.makeOrder(false, 22, true, 'Katya', 380995678901)
sasha.makeOrder(false, 5)