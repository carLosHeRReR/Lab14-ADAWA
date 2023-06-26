export class Pilotos {

  _id?: string;
  name: string;
  code: number;
  flightHours: number;

  constructor(name:string, code:number, flightHours: number){
      this.name = name;
      this.code = code;
      this.flightHours = flightHours;
  }

}
