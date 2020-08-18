const request=require('request');
const colors=require('colors');

const forecast = (address,callback) => {
    url ='http://api.weatherapi.com/v1/current.json?key=b3750009db3343b992f74034201305&q='+encodeURIComponent(address)+'&days=3';

    request({url,json:true},(err,{body})=>{
        if(err)
        {
            console.log('wrong'.rainbow);
            return  callback("your error is ".america+"PlZ check your Internal",undefined);
        }
        else if(body.error){

            if (body.error.code===1006) {
                console.log('wrong'.rainbow);

                return  callback("your error is ".america+body.error.message,undefined);
                
            }else{
                console.log('wrong'.zebra);
                 return  callback("your error is ".america+body.error.message,undefined);
                }
            
        }
        else{
            
            var data={
                temp:body.current.temp_c,
                region:body.location.region,
                country:body.location.country,
                lon:body.location.lon,
                lat:body.location.lat,
                humidity:body.current.humidity
            };
            callback(undefined,data);
        }

        
    });
};
module.exports=forecast;