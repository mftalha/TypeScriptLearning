import { Taxi } from './Taxi';




let taxi_1: Taxi = new Taxi({x: 2, y: 5}); //color tanımlamadım isteğe bağlıydı
taxi_1.travelTo({ x: 1, y: 2 });

let currentLocation = taxi_1.Location;
taxi_1.Location = {x: 9, y: 7};   