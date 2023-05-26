class MySQL{
    constructor(){
        this.select = "*";
        this.where = false;
        this.limit = "*";
    }
}

class PostgreSQL{
    constructor(){
        this.select = "*";
        this.where = false;
        this.limit = "*";
    }
}

class BuildSQL{
    addSELECT(){}
    addWHERE(){}
    addLIMIT(){}
    getSQL(){}
}

class BuildMySQL extends BuildSQL{
    constructor(){
        super()
        this.sql = new MySQL()
    }

    addSELECT(select){
        this.sql.select = select;
        return this;
    }

    addWHERE(where){
        this.sql.where = where;
        return this;
    }

    addLIMIT(limit){
        this.sql.limit = limit;
        return this;
    }

    getSQL(){
        console.log(`SELECT ${this.sql.select} WHERE ${this.sql.where} LIMIT ${this.sql.limit};`);
        return this.sql;
    }
}

class BuildPostgreSQL extends BuildSQL{
    constructor(){
        super()
        this.sql = new PostgreSQL()
    }

    addSELECT(select){
        this.sql.select = select;
        return this;
    }

    addWHERE(where){
        this.sql.where = where;
        return this;
    }

    addLIMIT(limit){
        this.sql.limit = limit;
        return this;
    }

    getSQL(){
        console.log(`SELECT ${this.sql.select} \n WHERE ${this.sql.where} \n LIMIT ${this.sql.limit};`);
        return this.sql;
    }
}
let requestMySQL1 = new BuildMySQL().addSELECT("all").addWHERE("builder").addLIMIT("age >= 20").getSQL();
console.log(requestMySQL1);

let requestPostgreSQL1 = new BuildPostgreSQL();
requestPostgreSQL1.addWHERE("tool == hammer").addSELECT("carpenter").addLIMIT("age >= 30").getSQL();