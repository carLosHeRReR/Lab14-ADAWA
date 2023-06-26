import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VuelosService } from '../services/vuelos.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {
  listVuelos: any[] = [];

  constructor(private toastr: ToastrService, private vuelosService: VuelosService) {}

  ngOnInit() {
    this.obtenerVuelos();
  }

  obtenerVuelos() {
    this.vuelosService.getVuelos().subscribe(
      (data: any) => {
        this.listVuelos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
