
var lable1= createlable("lable","for","Firstname","Enter your Firstname");
var lable1input = createlable("input","placeholder","text");

var lable2= createlable("lable","for","Lastname","Enter your Lastname");
var lable2input = createlable("input","placeholder","text");

var lable= createlable("lable","for","Email","Enter your Email");
var lableinput = createlable("input","placeholder","text");

var lable3= createlable("lable","for","Phonenumber","Enter your Phonenumber");
var lable3input = createlable("input","placeholder","text");
var b1 = linebreak("br");

document.body.append(lable,lableinput,lable1,lable1input,lable2,lable2input,lable3,lable3input,b1);
document.body.appendChild(br);


function createlable(tagname, attrname, attrvalue, content){
    var lable = document.createElement(tagname);
    lable.innerHTML = content;
    lable.setAttribute(attrname,attrvalue);
    return lable;
    }
function linebreak(breaker){
    var b1 = document.createElement(breaker);
    return b1;
}