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