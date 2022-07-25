"use strict";
const axios=require("axios");
const formatData = data => {
  return {
    location: `${data.location.name}, ${data.location.country}`,
    temperature: data.current.temperature,
    weather_code:data.current.weather_code,
    weather_description:data.current.weather_descriptions
  }
}
const getWeather=location=>{
  return new Promise(async (resolve,reject)=>{
    try{
      const weatherConditions=await axios.get(
        "http://api.weatherstack.com/current",{
          params:{
            access_key: '865ada812879035501fc09cadec139c2',
            query: location,
          }
        });
        resolve(formatData(weatherConditions.data));
    } catch(error){
      reject(error);
    }
  });
}
module.exports=getWeather;
