const request=require('request');

const geocode = (address,callback) => {
    url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?types=region&limit=1&access_token=pk.eyJ1IjoiYXJobi0zMDAiLCJhIjoiY2thNGZpZ2QwMHRvbzNlb2dwbHM2Mm93eCJ9.x7TDjPFGM_9CaKVgK-aqtg';
    request({url,json:true},(err,res)=>{
        console.log(address +' latitude is '+res.body.features[0].center[1] );
        console.log(address + ' longitude is '+ res.body.features[0].center[0]);
    });
};

module.exports=geocode;