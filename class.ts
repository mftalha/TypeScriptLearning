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

// taxi_1 => 41 abc 41
// taxi_1.currentLocation //taksi 1 in o anki konumunu alacaz

// taxi_2 => 41 abd 41