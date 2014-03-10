/**
 * Created by Shweta on 2/26/14.
 */


/*Inheritance without object.create()

$(document).ready(function(){
    function createObject_ES4(parent){
        if(typeof parent === "object" || typeof parent === "function"){ //=== checks for type and value , == for string
            function Child(){
            Child.prototype = parent;
            return new Child();
        }
        else{
            return null;
        }
    };

    var customer = {
        phone:"",
        email:""
    };

    var customerA = createObject_ES4(customer);
    console.log(customerA);
});
    */

/*
Prototypal inheritence

 $(document).ready(function(){
 var obj = {
 x: 32,
 y: 32
 };

 var child = Object.create(obj);

 var Constructor = function(){
 this.x = 99;
 };


 Constructor.prototype.x = 100;
 Constructor.prototype.y = 10;

 var cons = new Constructor();
 console.log(cons.y); //10 if x then 99
 console.log(Object.getPrototypeOf(cons));
 console.log(cons.prototype);

 });


 */



$(document).ready(function(){
    function Customer(){
    }

        var customerA = new Customer();// refers to customerA points to prototype of the constructor function(Customer.prototype).(base proptotype)
        //Always declare any property as shown Customer.prototype.x = 32;
        console.log("typeof customerA:" +typeof customerA);
        console.log("is customerA a customer?:" +
            (customerA instanceof Customer));

});