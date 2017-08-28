import express from 'express';
import data from '../model/Schema';
let router = express.Router();

router.get('/', (req, res, next)=> {
    data.find({}, (err, data2)=>{
    	if(err){
    		res.send('error has occured');
    	}
    	else{
    		res.json(data2);
    	}
    });

});
export default router;
