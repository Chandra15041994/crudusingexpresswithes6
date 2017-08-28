import express from 'express';
import data from '../model/Schema';
let router = express.Router();

router.delete('/:Address', (req, res)=>{
  data.remove({Address: req.params.Address}, 
     (err,docs)=>{
    if(err) res.json(err);
    else res.send('Removed');
     
  });
});

export default router;