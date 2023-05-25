class Product{
    name = "product"
    ip = 00000000
    status = false

    constructor(name, ip, status){
        this.name = name
        this.ip = ip
        this.status = status
    }

    getName(){return this.name}
    getIp(){return this.ip}
    getStatus(){return this.status}

    setDate(name, ip, status){
        this.name = name
        this.ip = ip
        this.status = status
    }
}

class User{
    name = "name"
    ip = 00000000
    email = "email"

    constructor(name, ip, email){
        this.name = name
        this.ip = ip
        this.email = email
    }

    getName(){return this.name}
    getIp(){return this.ip}
    getEmail(){return this.email}

    setDate(name, ip, email){
        this.name = name
        this.ip = ip
        this.email = email
    }
}

class Order{
    ip = 00000000
    status = false

    constructor(ip, status){
        this.ip = ip
        this.status = status
    }

    getIp(){return this.ip}
    getStatus(){return this.status}

    setDate(ip, status){
        this.ip = ip
        this.status = status
    }
}

class MainValid{
    myObj

    setObj(obj){
        this.myObj = obj
    }

    validData(){}
    saveRequest(){}

    formingAnswer(code, status){
        this.generateJson(code, status)
        console.log(`Code is ${code}, status is ${status}`); 
    }

    generateJson(code, status){}
}

class ProductValid extends MainValid{
    okName = /^[a-zA-Z']{2,}/u;
    okIp = /^\d{8,}/;
    //найпростіша реалізація виведення помилки для Товару
    validData(newName, newIp, new_status){
        if(this.okName.test(newName) == true){
            if(this.okIp.test(newIp) == true){
                if(typeof new_status == "boolean"){
                    this.saveRequest(newName, newIp, new_status)
                }else{
                    console.log(`eror status`);
                }
            }else{
                console.log(`eror ip`);
            }
        }else{
            console.log(`eror name`);
        }
    }

    saveRequest(newName, newIp, new_status){
        this.myObj.setDate(newName, newIp, new_status)
        this.formingAnswer(newIp, new_status)
    }
}

class UserValid extends MainValid{
    okName = /^[a-zA-Z']{2,}/u;
    okIp = /^\d{8,}/;
    okMail = /^[0-9a-z-_\.]+\@[0-9a-z-]{2,}\.[a-z]{2,5}/i

    validData(newName, newIp, newEmail){
        if(this.okName.test(newName) == true){
            if(this.okIp.test(newIp) == true){
                if(this.okMail.test(newEmail)){
                    this.saveRequest(newName, newIp, this.myObj.getEmail())
                }else{
                    console.log(`error email`);
                }
            }else{
                console.log(`error ip`);
            }
        }else{
            console.log(`error name`);
        }
    }

    saveRequest(newName, newIp){
        this.myObj.setDate(newName, newIp, this.myObj.getEmail())
        this.formingAnswer(newIp, true)
    }
}

class OrderValid extends MainValid{
    okIp = /^\d{8,}/;

    validData(newIp, new_status){
        if(this.okIp.test(newIp)){
            if(typeof new_status == "boolean"){
                this.saveRequest(newIp, new_status)
            }else{
                console.log(`error status`);
            }
        }else{
            console.log(`error ip`);
        }
    }

    saveRequest(newIp, new_status){
        this.myObj.setDate(newIp, new_status)
        this.formingAnswer(newIp, new_status)
    }
    generateJson(code, status){
        console.log({code: code, status: status});
        return {code: code, status: status}
    }
}
let tovar1 = new Product("Product", 10578905, false)
console.log(tovar1.getIp());
console.log(tovar1.getName());
console.log(tovar1.getStatus());

let prod_valid = new ProductValid()
prod_valid.setObj(tovar1)
prod_valid.validData("Prod", 25478231, true)
console.log(tovar1.getIp());
console.log(tovar1.getName());
console.log(tovar1.getStatus());

console.log('====================================');
let user1 = new User("Katya", 10489222, "Katy_a@gmail.com")
console.log(user1.getName());
console.log(user1.getIp());
console.log(user1.getEmail());

let user_valid = new UserValid();
user_valid.setObj(user1);
user_valid.validData("Sasha", 79642022, "sanya_san@gmail.com")
console.log(user1.getName());
console.log(user1.getIp());
console.log(user1.getEmail());


console.log('====================================');
let order1 = new Order(16998457, false)
console.log(order1.getIp());
console.log(order1.getStatus());

let order_valid = new OrderValid()
order_valid.setObj(order1);
order_valid.validData(41035784, true)
console.log(order1.getIp());
console.log(order1.getStatus());