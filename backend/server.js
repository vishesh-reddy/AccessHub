require('dotenv').config();
const express=require('express'),cors=require('cors'),helmet=require('helmet'),rateLimit=require('express-rate-limit'),path=require('path');
const app=express();app.use(helmet({crossOriginResourcePolicy:false}));app.use(cors());app.use(express.json({limit:'1mb'}));app.use(rateLimit({windowMs:15*60*1000,max:300,standardHeaders:true,legacyHeaders:false}));
app.get('/api/health',(req,res)=>res.json({status:'ok',service:'AccessHub API',timestamp:new Date().toISOString()}));
app.use('/api/auth',require('./routes/auth'));app.use('/api/visitors',require('./routes/visitors'));app.use('/api/dashboard',require('./routes/dashboard'));app.use('/api/deliveries',require('./routes/deliveries'));app.use('/api/parking',require('./routes/parking'));app.use(express.static(path.join(__dirname,'../frontend')));app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:'Internal server error'});});
const port=Number(process.env.PORT||5000);if(require.main===module)app.listen(port,()=>console.log('AccessHub running on http://localhost:'+port));module.exports=app;
