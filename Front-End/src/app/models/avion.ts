export class Avion {

  _id?: string;
  type: string;
  code: string;
  mantenimiento: string;

  constructor(type:string, code:string, mantenimiento: string){
      this.type = type;
      this.code = code;
      this.mantenimiento = mantenimiento;

  }

}
