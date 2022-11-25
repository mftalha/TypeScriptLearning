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
    //..
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`taksi x: ${point.x} Y: ${point.y} konumuna gidiyor. `);
    }
}

class Bus implements Vehicle{
    //..
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`otobüs x: ${point.x} Y: ${point.y} konumuna gidiyor. `);
    }
}

let taxi_1: Taxi = new Taxi;
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = {x: 2, y: 5};

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6});
taxi_2.currentLocation = {x: 2, y: 5};

let bus =new Bus();