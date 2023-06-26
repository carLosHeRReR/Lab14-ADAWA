import { Avion } from '../models/avion';
import { Pilotos } from '../models/piloto';
import { Tripulacion } from '../models/tripulacion';

export class Vuelos {
  flightNumber: string;
  origin: string;
  destination: string;
  time: Date;
  avion: Avion;
  piloto: Pilotos;
  tripulaciones: Tripulacion[];

  constructor(
    flightNumber: string,
    origin: string,
    destination: string,
    time: Date,
    avion: Avion,
    piloto: Pilotos,
    tripulaciones: Tripulacion[]
  ) {
    this.flightNumber = flightNumber;
    this.origin = origin;
    this.destination = destination;
    this.time = time;
    this.avion = avion;
    this.piloto = piloto;
    this.tripulaciones = tripulaciones;
  }
}
