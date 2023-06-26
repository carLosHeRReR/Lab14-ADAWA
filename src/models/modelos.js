const mongoose = require('mongoose')
const URL_CONECTION = 'htpp'

mongoose.connect('mongodb://127.0.0.1:27017/VuelosLab14')

mongoose.connection.on('connected', () => {
  console.log("Mongoose connected")
})

module.exports = mongoose

const PilotoSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  flightHours: {
    type: Number,
    required: true
  }
});

const Pilot = mongoose.model('Piloto', PilotoSchema);

const TripulacionSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const Tripulacion = mongoose.model('Tripulacion', TripulacionSchema);

const AvionSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  mantenimiento: {
    type: Date,
    required: true
  }
});

const Avion = mongoose.model('Avion', AvionSchema);

const VueloSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  }, 
  time: {
    type: Date,
    required: true
  },
  avion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Avion'
  },
  piloto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Piloto' 
  },
  Tripulacions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tripulacion' 
  }]
});

const Vuelo = mongoose.model('Vuelo', VueloSchema);

async function createFlight() {
  const pilot = new Pilot({
    code: 'P1',
    name: 'Carlos Herrera',
    flightHours: 30
  });

  await pilot.save();

  const crewMember1 = new Tripulacion({
    code: 'T1',
    name: 'Aldair Acosta'
  });

  const crewMember2 = new Tripulacion({
    code: 'T2',
    name: 'Eduardo Villanueva'
  });

  await Promise.all([crewMember1.save(), crewMember2.save()]);

  const aircraft = new Avion({
    code: 'A1',
    type: 'AIRBUS A300',
    mantenimiento: new Date()
  });

  await aircraft.save();

  const flight = new Vuelo({
    flightNumber: 'V-2030',
    origin: 'Lima',
    destination: 'Buenos Aires',
    time: new Date(),
    avion: aircraft._id,
    piloto: pilot._id,
    Tripulacions: [crewMember1._id, crewMember2._id]
  });

  await flight.save();

  console.log('Vuelo creado con éxito');
}

module.exports = {
    createFlight,
    Vuelo,
    Avion,
    Tripulacion,
    Pilot
}