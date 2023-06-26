const express = require('express')
const app = express()
const { createFlight, Pilot, Tripulacion, Avion, Vuelo} = require('./models/modelos')
const { jsPDF } = require('jspdf')
const moment = require('moment')
require('jspdf-autotable');
createFlight()
app.get('/reportpdf/vuelos', async (req, res, next) => {
    try {
        const vuelos = await Vuelo.find().populate('avion')
                                        .populate('piloto')
                                        .populate('Tripulacions')
        const doc = new jsPDF()
        doc.autoTable({
            head: [['Numero de Vuelo', 'Origen', 'Destino', 'Tiempo', 'avion', 'piloto', 'Tripulacions']],
            body: vuelos.map(obj => [
                obj.flightNumber, obj.origin, obj.destination, moment(obj.time).format('YYYY-MM-DD HH-MM'),
                obj.avion.type, obj.piloto.name, obj.Tripulacions.length
            ])
        })

        let tempTripulacion = []
        vuelos.forEach(obj => {
            tempTripulacion = obj.Tripulacions.map( e => [
                obj.flightNumber, e.code, e.name
            ])
        })
        doc.autoTable({
            head: [['Numero de Vuelo', 'Codigo', 'Nombre']],
            body: tempTripulacion
        })

        doc.autoTable({
            head: [['Numero de Vuelo', 'Codigo', 'Tipo', 'Hora de mantenimiento']],
            body: vuelos.map(obj => [
                obj.flightNumber, obj.avion.code, obj.avion.type, moment(obj.time).format('YYYY-MM-DD HH-MM')
            ])
        })

        doc.autoTable({
            head: [['Numero de Vuelo', 'Codigo', 'Nombre', 'Hora de vuelo']],
            body: vuelos.map(obj => [
                obj.flightNumber, obj.piloto.code, obj.piloto.name, obj.piloto.flightHours
            ])
        })
        const nombreArchivo = 'General.pdf'; 

        res.setHeader('Content-Disposition', `attachment; filename="${nombreArchivo}"`);
        res.setHeader('Content-Type', 'application/pdf');

        res.contentType('application/pdf');
        res.send(Buffer.from(doc.output('arraybuffer')));
    } catch (error) {
        console.log(error)
        next(error)
    }
})

app.get('/vuelos', async (req, res, next) => {
    try {
        const vuelos = await Vuelo.find().populate('avion')
                                        .populate('piloto')
                                        .populate('Tripulacions')
        res.send(vuelos)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

app.post('/create/vuelo', async (req, res, next) => {
    try {
        const param = req.body  
        const vuelos = await Vuelo.find(param)
        res.send(vuelos)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

app.post('/create/avion', async (req, res, next) => {
    try {
        const param = req.body  
        const vuelos = await Avion.find(param)
        res.send(vuelos)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

app.post('/create/Tripulacion', async (req, res, next) => {
    try {
        const param = req.body  
        const vuelos = await Tripulacion.find(param)
        res.send(vuelos)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

app.post('/create/piloto', async (req, res, next) => {
    try {
        const param = req.body  
        const vuelos = await Pilot.find(param)
        res.send(vuelos)
    } catch (error) {
        console.log(error)
        next(error)
    }
})



app.use((
    err,
    req,
    res,
    next,
) => {
console.log(error)
  res
    .status("error en el vuelo")
    .send(400)
})


app.listen('4000', () => {
    console.log('Server is listening')
})