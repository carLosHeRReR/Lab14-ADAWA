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