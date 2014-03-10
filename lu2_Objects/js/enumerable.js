/**
 * Created by Shweta on 2/26/14.


$(document).ready(function(){

    //Define an entirely new object and set attributes
    var customerA = Object.defineProperties({}, {
        id: {
            value: 100,
            writable: false,
            configurable: false,
            enumerable: true
        },
        email: {
            value: "customerA@mailinator.com",
            writable: true,
            enumerable: true,
            configurable: true
        }
    });

    console.log(customerA);
    console.log(Object.getOwnPropertyDescriptor(customerA, "email"));// getting attributes descriptor that has object itself

    for (var prop in customerA){
        console.log("first loop: " + prop);
    }

    Object.defineProperty(customerA, 'email', {enumerable: false});

    for (prop in customerA){
        console.log("second loop: " + prop);
    }

});

*/
$(document).ready(function(){

    var customer = {
        id: 32,
        email: "customer@mailinator.com"
    };

    var customerA = Object.create(customer);  // inherit id and email from customer
    customerA.gender = "male";
    customerA.phone = "323456789";
    Object.defineProperty(customerA, 'phone', { enumerable: false });

    console.log(customerA); // explain that gender and phone are own properties
    console.log(customer); // explain that properties id and email are inherited

    // The in operator checks for own and inherited properties
    // Expects a string and object as arguments
    console.log('id' in customerA);  // returns true for inherited
    console.log('gender' in customerA);  // and own properties

    // .hasOwnProperty() checks for own properties only
    console.log(customerA.hasOwnProperty('id'));    // returns false
    console.log(customerA.hasOwnProperty('gender'));  // returns true

    // .propertyIsEnumerable() checks if the property can be enumerated
    console.log(customerA.propertyIsEnumerable('id'));  // returns false as it is inherited
    console.log(customerA.propertyIsEnumerable('gender')); // returns true
    console.log(customerA.propertyIsEnumerable('phone'));  // returns false

    //get all properties in a loop
    console.log('\nPrinting customerA properties as name:value pairs: \n');
    for (var prop in customerA) {
        console.log(prop + ': ' + customerA[prop]);
    }

    /* Assignment: What does the Object.keys() method do? How do you use it?
     Loop through an object to get only own, enumerable properties and print
     them to the console.
     */

});


