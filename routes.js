const express = require('express');

const router = express.Router()
const User = require('./models');
/**
 * @swagger
 * /personaje:
 *   get:
 *     summary: Listar todos los personajes
 *     responses:
 *       200:
 *         description: Retorna una lista de personajes
 */
router.get('/personaje', async (resquest,response)=>{
   const personajes =  await User.findAll();
   response.status(200).json(personajes)
});
/**
 * @swagger
 * /personaje/{id}:
 *   get:
 *     summary: Obtener un personaje por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del personaje
 *     responses:
 *       200:
 *         description: Devuelve un objeto de personaje
 */
router.get('/personaje/:id', (request,response)=>{});
/**
 * @swagger
 * /personaje:
 *   post:
 *     summary: Crear un nuevo personaje
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Definir propiedades del personaje
 *     responses:
 *       201:
 *         description: Devuelve el personaje creado
 */
router.post('/personaje', async (request,response)=>{
    try{
        const data = request.body;
        const newPersonaje = await User.create(data);
        response.status(201).json(newPersonaje);
    }catch(error){
        console.error(error);
    }
   

});
/**
 * @swagger
 * /personaje/{id}:
 *   put:
 *     summary: Actualizar un personaje por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del personaje
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Definir propiedades del personaje
 *     responses:
 *       200:
 *         description: Devuelve el personaje actualizado
 */
router.put('/personaje/:id', (request,response)=>{});
/**
 * @swagger
 * /personaje/{id}:
 *   delete:
 *     summary: Eliminar un personaje por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del personaje
 *     responses:
 *       204:
 *         description: Eliminación exitosa
 */
router.delete('/personaje/:id', (request,response)=>{});

module.exports = router;