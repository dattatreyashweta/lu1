/**
 * Created by Shweta on 2/27/14.
 */


$(document).ready(function(){

    console.log(Infinity > 0);   // true
    console.log(Infinity > Infinity);  // false
    console.log(11 > 9);
    console.log(11 > "9");// homework --- how is it comparing?
    console.log("11" > 9);// homework --- how it works
    console.log((1/0) > (0/0));

    // All operators > < >= <= operators return false
    // when passed NaN as an operand


});


