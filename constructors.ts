// class yapısı kullanacaz : interface kullanmama sebebimiz : clasdan obje oluşturabiliyor olmamız

// herhangi bir methodun paremetrelerinin belli bir kalıba uyması için oluşturduk.
interface Point{
    x: number,
    y: number
}


// interface ile kullanacağımız fonksiyonların şemasını çıkarttık. == planını hazırlıyoruz sadece
interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{
    
    color: string;
    constructor(location?: Point , color?: string){ //color'a soru işareti attığımızdan optional olarak tanımlamış oluyoruz : istersek girmeyebilriz.
        this.currentLocation = location;
        this.color = color;
    }
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`taksi x: ${point.x} Y: ${point.y} konumuna gidiyor. `);
    }
}


let taxi_1: Taxi = new Taxi({x: 2, y: 5}); //color tanımlamadım isteğe bağlıydı
taxi_1.travelTo({ x: 1, y: 2 });

console.log(taxi_1.currentLocation);

let taxi_2: Taxi = new Taxi({x: 2, y: 5}, 'red'); //color tanımladım isteğe bağlıydı

let taxi_3: Taxi = new Taxi(); //buda geçerli oldu artık == locationuda option'al yaptık





