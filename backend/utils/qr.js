const QRCode=require('qrcode');
async function makeQrData(text){return QRCode.toDataURL(text,{errorCorrectionLevel:'M',margin:2,width:320});}
module.exports={makeQrData};
