//hum yaha pe kuch aisi cheezein aur pattern dekhenge jo normally huge scale project implementation mei use hota hai.

const foreignWeatherApi = {
    fetch_weather(city_name){
        return {
            city_name,
            temp_fahrenheit: 72,
            wind_speed_mph: 5,
            condition: "partly_cloudy",
        }
    }
};

//yeh foreign ki weather api se data aaya hai, and mujhe chahiye ki ek adapter rakh du beech mei so that jo data mujhe milega wo mere according rhega.
//this is called adapter.
//jaise mobile development mei kaafi baar camera wagera se compatible nhi rhte kuch apis, toh adapter is used widely, kaafi saare languages mei rhte hai yeh.

class WeatherAdapter {
    constructor(foreignAPI){
        this._api = foreignAPI
    }
    getWeather(city){
        const raw = this._api.fetch_weather(city)
        return{
            city: city_name,
            tempCelsius: Math.round((raw.temp_fahrenheit - 32) * (5/9)),
            windKmph: Math.round((raw.wind_speed_mph) * 1.6),
            condition: raw.condition,
        }
    }
}

const weather = new WeatherAdapter(foreignWeatherApi);
const report = weather.getWeather("Jaipur");