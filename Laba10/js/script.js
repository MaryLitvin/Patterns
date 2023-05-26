class Comp {
    setName(name){ this.name = name}
    setStruct(structure){ this.structure = structure }
    getName(){ return this.name }
    print(){ console.log(this.structure) }
}

class CompOnInput extends Comp{
    constructor(){
        super()
        this.setName('input')
        this.setStruct(`<imput name = "${this.getName()}">`)
    }
}

class CompOnSelect extends Comp{
    constructor(){
        super()
        this.setName("select")
        this.setStruct(`<select name = "${this.getName()}"> </select>`)
    }
}

class Fieldset extends Comp{
    constructor(){
        super()
        this.elements = []
        this.setName("fieldset")
    }

    addElem(elem){
        this.elements.push(elem)
    }

    print(){
        console.log( `<${this.getName()}>` );

        this.elements.forEach(elem => {
            elem.print()
        });

        console.log( `</${this.getName()}>` );
    }
}

class Form extends Fieldset{
    constructor(){
        super()
        this.setName("form")
    }
}

let fieldset1 = new Fieldset()
fieldset1.addElem(new CompOnInput())

let fieldset2 = new Fieldset()
fieldset2.addElem(new CompOnInput())
fieldset2.addElem(new CompOnSelect())
fieldset2.addElem(fieldset1)

let form1 = new Form()
form1.addElem(new CompOnInput())
form1.addElem(new CompOnSelect())
form1.addElem(fieldset2)

form1.print()