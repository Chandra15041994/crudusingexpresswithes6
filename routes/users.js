import express from 'express';
import data from '../model/Schema';
let router = express.Router();

router.post('/', (req, res, next)=> {
    
    let post = new data({
     
      Name : req.body.Name,
      EmpId : req.body.EmpId,
      Address : req.body.Address,
    });

    post.save((err, post)=>{
        if(err) { return next }
        	console.log(post);
            res.send(post);
    })



   
});
export default router;