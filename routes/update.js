import express from 'express';
import data from '../model/Schema';
let router = express.Router();

router.put('/:Name', (req, res)=>{
  data.update({Name: req.params.Name},
                     {
            EmpId: req.body.EmpId,
            Address  : req.body.Address
         }, (err, docs)=>{
        if(err) res.json(err);
        else { 
          console.log(docs);
          res.send(docs); 
        }
       });
});


export default router;



