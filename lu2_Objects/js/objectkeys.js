/**
 * Created by Shweta on 2/26/14.
 */

$(document).ready(function(){
    var arr = ["a", "b", "c"];
    console.log("arr-->" + Object.keys(arr));

    var obj = {0:"a", 1:"b", 2:"c"};
    console.log("Object-->" + Object.keys(obj));

    var num ={ 100:"a", 2:"b", 7:"c"};
    console.log("Unordered array-->" +  Object.keys(num));

    var method = Object.create({ },
            {  getFoo: { value: function()
                {
                     return this.foo
                 }
             }} );
                method.foo = 1;
                console.log("Method-->" +Object.keys(method));
});
