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

let a: number =5;
let b: string = 'a'; 
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3]; // e-f aynıdır syntax farklı sadece
let g: any[] = [1,'a',true];
let h: [string,number,boolean] = ['a',5,false]; //tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi=0, havale=1,kapidaodeme =5, eft=2};

let kredi = Payment.kredi; //0
let havale = Payment.havale; //1
let eft = Payment.eft; //2
let kapidaodeme = Payment.kapidaodeme; // 5

