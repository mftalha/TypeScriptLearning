// ----- [1] == istersen ver istersen verme gibi paremtre belirttiğimiz fonksşiyon (?c)
//function getAvarage(a, b, c){ //run time (çalışma zamanında) = çalıştırma sonrası hata vermesi , compiler aşamasında : programı yazarken hataları alma
function getAvarage(a: number, b: number, c?: number): string{  //yukarıdaki gibi yazdığımızda fonksiyonu eğerki fonksiyon çalıştırma değeri olarak string girilse biz bunu proğramı çalıştırmadan anlıyamıyacağız o yüzden type script ile değişkenlere type veriyoruz: böylece fonksiyonu çağırıken yanlış type girilirse direk uyarı verecek.
    // burda ?c == c paremetresi girilmeye bilir anlamında belirtiyoruz.
    // : string == paremetre değer parentezinin kapanaışından sonraki bu ifade == methodun string bir değer döndüreceğini ifade eder.
    let total = a+b;
    let count = 2;

    if(typeof c != 'undefined' ){
        total +c
        count++;
    }
    
    total = total/count;
    return 'result : '+ total;
}
getAvarage(10,20,30);
getAvarage(10,20);


// ------------- [2] // istediği kadar paremetre değeri alabilen method

function getAvarage2(...a: number[]): string{ // istenildiği kadar kadar değer girilebileceğini ifade ediyoruz.
    let total = 0;
    let count = 0;

    for(let i=0; i<a.length;i++){
        total+=a[i];
        count++;
    }
    return 'result : '+ total/count;
}

getAvarage2(5);
getAvarage2(5,10);
getAvarage2(5,10,20);
getAvarage2(5,25,90,450,800); // gibi istediğimiz kadar paremetre verebiliyoruz.

// -------[3] = void method
function getAvarage3(): void{ // şeklinde void method'da yazabiliriz.
    console.log('test');
}

// -------[4] = arrow function(isminden emin değilim)

const getAvarage4 = (...a: number[]): string =>{ // istenildiği kadar kadar değer girilebileceğini ifade ediyoruz.
    let total = 0;
    let count = 0;

    for(let i=0; i<a.length;i++){
        total+=a[i];
        count++;
    }
    return 'result : '+ total/count;
}

