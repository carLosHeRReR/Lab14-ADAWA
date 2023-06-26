import { Component, OnInit } from '@angular/core';
import { Pilotos } from '../models/piloto';
import { PilotosService } from '../services/pilotos.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
})
export class IconsComponent implements OnInit {
  listPilotos: Pilotos[] = [];
  elementos: number = 0;

  constructor(private _pilotoService: PilotosService) {}

  ngOnInit(): void {
    this.obtenerPilotos();
  }

  obtenerPilotos(): void {
    this._pilotoService.getPilotos().subscribe(
      (data: Pilotos[]) => {
        console.log(data);

        this.listPilotos = data;
        this.elementos = this.listPilotos.length;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  eliminarPiloto(id: any): void {
    this._pilotoService.deletePiloto(id).subscribe(
      (data: any) => {
        console.log(data);

        this.obtenerPilotos();
        this.elementos = this.listPilotos.length;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
