import { Routes } from '@angular/router';

import { DashboardComponent } from '../../avion/dashboard.component';
import { IconsComponent } from '../../pilotos/icons.component';
import { MapsComponent } from '../../tripulacion/maps.component';
import { NotificationsComponent } from '../../vuelo/notifications.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'avion',      component: DashboardComponent },
  { path: 'piloto',          component: IconsComponent },
  { path: 'tripulacion',           component: MapsComponent },
  { path: 'vuelo',  component: NotificationsComponent },
];
