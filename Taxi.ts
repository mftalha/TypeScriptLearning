import { Vehicle } from "./Vhicle";
import { Point } from "./Point";

export class Taxi implements Vehicle{

    constructor(private _location: Point , private color?: string){} //color'a soru işareti attığımızdan optional olarak tanımlamış oluyoruz : istersek girmeyebilriz.

    travelTo(point: Point): void{
        console.log(`taksi x: ${this._location.x} Y: ${this._location.y} dan x: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
    get Location(){
        return this._location;
    }
    set Location(value: Point){
        if(value.x <0 || value.y <0){
            throw new Error('kordinat bilgileri negatif olamaz');
        }
        this._location = value;
    }
}