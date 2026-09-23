const jwt=require('jsonwebtoken');require('dotenv').config();
function authenticate(req,res,next){const h=req.headers.authorization||'';const token=h.startsWith('Bearer ')?h.slice(7):null;if(!token)return res.status(401).json({message:'Authentication token required'});try{req.user=jwt.verify(token,process.env.JWT_SECRET);next();}catch{return res.status(401).json({message:'Invalid or expired token'});}}
function allowRoles(...roles){return(req,res,next)=>{if(!req.user||!roles.includes(req.user.role))return res.status(403).json({message:'Insufficient permissions'});next();};}
module.exports={authenticate,allowRoles};
