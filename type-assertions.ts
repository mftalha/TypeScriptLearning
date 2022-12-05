//let message = 'Hello World';
let message;
message = 'Hello World';

//let count = message.length; // eğer başlanğıçta değişkenin içine direk string ifadeyi koymazsak : yani değişkeni oluşturup sonrasında string değer atarsak : sonradan değişkene string verdiğimizden değişken any kalır (başta değer atamsı yapmadığımızdan) : o yüzden o değişkeni yazıp sonuna . koyduğumuzda string methotları gelmez : kullanılabilir ama gelmez.
let count = (<string>message).length; // yukarıdaki hatayı gidermek için böyle yazdığımızda değişkeni string'e çevirir direk.
let test = (message as string).length; // paranter içinde yaptığımız üsttekinin benzeri messageyi stringe çevirmek istediğimizi belirtiyoruz.
