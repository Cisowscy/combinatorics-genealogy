var scalTEKSTY = function () { this.__TEKSTY__ = []; };
scalTEKSTY.prototype.wstaw = function (str) {  if (typeof str != "undefined" && str != "") { this.__TEKSTY__.push(str); } return this; };
scalTEKSTY.prototype.separator = function (sep) { return this.__TEKSTY__.join(sep); };


var ZZ;



var enKOD = new scalTEKSTY();
enKOD.wstaw(1).wstaw(42).wstaw(ZZ).wstaw().wstaw("").wstaw("ZZ"); //.wstaw(3*i);
var eeerrr =  enKOD.separator(".");
console.log(eeerrr);