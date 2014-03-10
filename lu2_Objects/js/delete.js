/**
 * Created by Shweta on 2/26/14.
 */
$(document).ready(function(){

    var customer = {
        id: 32,
        email: "customer@mailinator.com"
    };

    var customerA = Object.create(customer);
    customerA.gender = "male";
    customerA.phone = "323456789";

    console.log(customerA);
    delete customerA.gender;    // show that own properties
    console.log(customerA);  // can be deleted
    delete customerA.id;        // inherited properties
    console.log(customerA);  // cannot be deleted

    var res_del_phone = delete customerA.phone;
    console.log(res_del_phone);     // show that returns true
    var res_del_email = delete customerA.email;
    console.log(res_del_email);     // show that returns true
});


