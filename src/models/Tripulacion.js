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