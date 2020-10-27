const express = require('express');
const router = express.Router();

let entradas=[];

router.get('/', (req,res) => {
    res.render('index.html', {title:'Empresa Nueva', titulo:'Bienvenido'});
});
router.post('/', (req,res) => {
    res.render('nosotros.html');
})

router.get('/nosotros', (req,res) => {
    res.render('nosotros.html', {title: 'Sobre Nosotros', titulo: 'Nosotros'});
});
router.get('/servicios', (req,res) => {
    res.render('servicios.html', {title: 'Nuestros servicios', titulo: 'Servicios'});
});
router.get('/contactanos', (req,res) => {
	console.log('funcionó el contáctenos');
    res.render('contactanos.html',
    	{title: 'Contáctanos', titulo: 'Contáctanos',
    	nombre:req.body.nombre,
    	email:req.body.email,
    	telefono:req.body.telefono,
	    fecha:req.body.fecha,
		mensaje:req.body.mensaje,});
});

router.post('/contactanos', (req,res) =>{
	let nuevasentradas={
		nombre:req.body.nombre,
    	email:req.body.email,
    	telefono:req.body.telefono,
	    fecha:req.body.fecha,
		mensaje:req.body.mensaje
	}
	entradas.push(nuevasentradas);
	console.log(entradas);

	res.render('envio.html',
    	{title: 'Contáctanos', titulo: 'Contáctanos',
    	nombre:req.body.nombre,
    	email:req.body.email,
    	telefono:req.body.telefono,
	    fecha:req.body.fecha,
		mensaje:req.body.mensaje});
})

module.exports = router;