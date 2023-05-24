class User{
    mySettings = "Nope";
    concreteBackup;

    constructor(settings){
        this.mySettings = settings
    }

    newSettings(settings){
        this.mySettings = settings
    }

    save(){
        this.concreteBackup = new ConcreteBackup(this.mySettings);
        return this.concreteBackup.getBackup();
    }

    getSave(){
        console.log(`Поточні налаштування: ${this.mySettings}`);
    }
}

class ConcreteBackup{
    backup = "Nope + data";
    data = "data";

    constructor(settings){
        this.data = new Date();
        this.backup = `${settings}. Дата збереження ${this.data}`;
    }

    getBackup(){
        return this.backup
    }
}

class Database{
    listBackups = [];
    user;

    constructor(usser){
        this.user = usser
    }

    backup(){
        console.log(`Зберігаємо знімок...`);
        this.listBackups.push(this.user.save());
    }

    undoBackup(){
        if(this.listBackups.length > 1){
            this.listBackups.pop();
            this.user.newSettings(this.listBackups[this.listBackups.length - 1]);
            console.log(`Повернення попередніх налаштуваннь`);
        }else{
            console.log(`Немає попередніх`);
        }
    }

    getHistori(){
        this.listBackups.forEach(element => {
            console.log(element)
        });
    }
}

let user1 = new User("Усі сповіщення");
let database = new Database(user1);

user1.getSave();
database.backup();

user1.newSettings("Половинa сповіщень");
user1.getSave();
database.backup();

user1.newSettings("Без сповіщень");
user1.getSave();
database.backup();

database.getHistori();

database.undoBackup();
user1.getSave();
database.getHistori();
