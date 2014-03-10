/**
 * Created by Shweta on 2/26/14.
 */

$(document).ready(function(){
    var customer = {
        id: 272356158,
        email: "customer@mailinator.com"
    };

    customer.id = 32;
    console.log(customer.id);   // property assignment works
    Object.defineProperty(customer, 'id', {configurable: false});
     customer.id =100;
    console.log(customer.id);
    Object.defineProperty(customer, "id", {writable: true}); //object, property, attributes to change and value

    customer.id = 64;           // property assignment fails silently
    console.log(customer.id);   // and previous value is maintained

    console.log(Object.getOwnPropertyDescriptor(customer, 'id'));  // get own properties only
    Object.defineProperty(customer, 'id', {configurable: false});


// QUESTION: What happens when you try to set writable to true here?
// You get a TypeError

    // Try to change properties after configurable and

});

