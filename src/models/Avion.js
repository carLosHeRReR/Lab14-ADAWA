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
      type: String,
      required: true
    }
  });
  
  const Avion = mongoose.model('Avion', AvionSchema);