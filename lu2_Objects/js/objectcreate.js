/**
 * Created by Shweta on 2/24/14.
 */

$(document).ready(function(){
    var parent = {
        x: 32,
        y: 32
    };
    var child = Object.create(parent);      //create an object which inherits contents of parent

//    or
//    var parent=Object.create(Object.prototype);
//    parent.x=32;

    console.log(child instanceof Object);   //true
    console.log(child.x);                   //32
    parent.x=100;
    parent.z=200;
    console.log(child.x);                   //100
    console.log(child.z);                   //200
    child.x=64;                             //once it is initialized it will consider its own value only
    child.w=300;
    console.log(child.x);                   //64
    console.log(child.w);                   //300
    console.log(parent.w);                  //undefined
    parent.x=128;
    parent.a=400;
    console.log(child.x);                   //64
    console.log(child.a);                   //400
    var child2 = Object.create(null);
    console.log(child2 instanceof Object);  //false
    // console.log(child2.toString()); will return an error

});







