const    bodyParser=require('body-parser'),
        forecast =require('../modules/forecast'),
        express = require('express');
const router = express.Router({mergeParams:true});

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
    res.render('../views/intro',{
        title:'forecast-weather-nodejs',
        madeBy:'AmirHossein'
    });
});
router.get('/weather', (req, res) => {
    res.render('../views/weather',{
        title:'forecast-weather',
        
    });
});
router.post('/weather', (req, res) => {
  
        var address=req.body.a;
        console.log(address+"_________".yellow);
        forecast(address,(error,{humidity,temp,country})=>{
            if (error!=undefined) {
                console.log(error);
                res.send('we have some Error');
            }else{
                res.render('../views/show',{humidity:humidity,temp:temp,country:country,
                title:'weather forecast'});
            }
        });
        
    
        

});
router.get('/about', (req, res) => {
    res.render('../views/about');
});

module.exports=router;