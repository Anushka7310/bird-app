const express = require('express')
const router = express.Router()
const Bird = require('../models/bird')

router.get('/', async(req, res) => {
 try{
  const birds = await Bird.find()
  res.json(birds)
 }catch(err){
  res.send('Error' + err)
 }
})

router.get('/:id', async(req, res) => {
  try{
   const bird = await Bird.findById(req.params.id)
   res.json(bird)
  }catch(err){
   res.send('Error' + err)
  }
 })


router.post('/', async(req,res) =>{
  const bird = new Bird({
    commonName: req.body.commonName,
    scientificName: req.body.scientificName,
    family: req.body.family,
    order: req.body.order,
    spottedAt: req.body.spottedAt,
    spottedLocation: req.body.spottedLocation

  
  })
  try{
   const a1 = await bird.save()
   res.send(a1)
  }catch(err){
    res.send('Error')
  }
})

router.patch('/:id', async(req,res) => {
  try{
    console.log(34)
    let bird = await Bird.findById(req.params.id)
    bird =  Object.assign(bird, req.body);
    console.log(bird)
    const a1 = await bird.save()
    console.log(a1)
    res.send(a1)
  }catch(err){
    res.send('Error')
  }
})

router.delete('/:id', async(req,res) => {
  try{
    const bird = await Bird.findById(req.params.id)
    bird.sub = req.body.sub
    const a1 = await bird.remove()
    res.send(a1)
  }catch(err){
    res.send('Error')
  }
})

module.exports = router