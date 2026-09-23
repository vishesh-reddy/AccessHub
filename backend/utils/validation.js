function required(body,fields){return fields.filter(field=>body[field]===undefined||body[field]===null||String(body[field]).trim()==='');}
module.exports={required};
