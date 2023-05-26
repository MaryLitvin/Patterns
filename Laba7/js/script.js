class SingletonPostgreSQL{
    constructor(){
        if(typeof SingletonPostgreSQL.instance === 'object'){
            return SingletonPostgreSQL.instance
        }
        this.countCall = 0;
        SingletonPostgreSQL.instance = this;
        return this;
    }
    getCountCall(){return `До PostgreSQL ви звернулися ${this.countCall} разів`}
    call(){
        console.log(`Вітаємо у PostgreSQL`);
        return this.countCall++;
    }
}

class SingletonMongoDB{
    constructor(){
        if(typeof SingletonMongoDB.instance === 'object'){
            return SingletonMongoDB.instance
        }
        this.countCall = 0;
        SingletonMongoDB.instance = this;
        return this;
    }

    getCountCall(){return `До MongoDB ви звернулися ${this.countCall} разів`}

    call(){
        console.log(`Вітаємо у MongoDB`);
        return this.countCall++
    }
}
let postgreSQL1 = new SingletonPostgreSQL();
let postgreSQL2 = new SingletonPostgreSQL();
console.log(postgreSQL1.getCountCall());
console.log(postgreSQL2.getCountCall());
postgreSQL1.call();
postgreSQL1.call();
postgreSQL1.call();
postgreSQL1.call();
postgreSQL2.call();
postgreSQL2.call();
console.log(postgreSQL1.getCountCall());
console.log(postgreSQL2.getCountCall());


let mongoDB1 = new SingletonMongoDB();
let mongoDB2 = new SingletonMongoDB();
console.log(mongoDB1.getCountCall());
console.log(mongoDB2.getCountCall());
mongoDB1.call();
mongoDB1.call();
mongoDB1.call();
mongoDB2.call();
console.log(mongoDB1.getCountCall());
console.log(mongoDB2.getCountCall());