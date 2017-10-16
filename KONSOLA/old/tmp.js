require("console.table");

var myObject = {
    name: "Marcin",
    height: 184,
    print: function () {
        console.log(this.name);
    }
};

myObject.print(); //wypisze w konsoli "Marcin"
console.log(myObject.height); //wypisze 184