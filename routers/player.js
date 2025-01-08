const express = require('express');
const router = new express.Router();
const Players = require('../models/players')

router.post('/olympicplayer' , async(req,res)=> {
    try{
     console.log(req.body);
      const player = new Players(req.body);
      const insertintodb = await player.save();
    //   console.log(player);
      res.status(201).send(insertintodb);
    }catch(e){
        console.error('Error creating player:', e);
        res.status(404).send('error')
    }
})

router.get('/olympicplayer' , async(req,res)=> {
    try{
     const display = await Players.find();
     res.status(201).send(display);
    }catch(e){
        res.status(404).send('error')
    }
})

router.patch('/olympicplayer/:id' , async(req,res)=> {
    try{
     const _id = req.params.id;
     const updateddata = await Players.findByIdAndUpdate(_id , req.body , {
        new: true
     })
    //  console.log(updateddata);
     res.send(updateddata);
    }catch(e){
        res.status(404).send('error')
    }
})

// router.delete('/olympicplayer/:id' , async(req,res)=> {
//     try{
//     const deleteddata = await Players.findByIdAndDelete(req.params.id);
//     // console.log(deleteddata)
//     res.send(deleteddata);
//     }catch(e){
//         res.status(404).send('error')
//     }
// })



module.exports = router;