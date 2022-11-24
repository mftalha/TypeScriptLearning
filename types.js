/* [1]
let number =5;
number = 'a'; // js de hata vermezdş ama type scriptte int degerin üstüne string deger yazamassın diye uyarıyor
console.log(number);
*/
/* [2] diyip oluşturdugumda herhangi bir hata vermez : çünkü a : any dir. == herhangi bir türdür sonradan degişkene hertürlü türü atayabiliyirz.
let a;
a= 5;
a = "a";
a= true;
*/
/* [3] gibi oluşturduğumda a ya başlangıçta number türü şeklinde oluşturduğum için number harici değer aldığında hata verir.
let a : number;
a= 5;
a = "a";
a= true;
*/
var a = 5;
var b = 'a';
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3]; // e-f aynıdır syntax farklı sadece
var g = [1, 'a', true];
var h = ['a', 5, false]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kapidaodeme"] = 5] = "kapidaodeme";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; //0
var havale = Payment.havale; //1
var eft = Payment.eft; //2
var kapidaodeme = Payment.kapidaodeme; // 5
