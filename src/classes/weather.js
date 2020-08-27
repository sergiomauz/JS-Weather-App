import 'babel-polyfill';
import Keys from '../config/keys';

class Weather {
  constructor(params) {
    const { reqCity, reqUnits } = params;
    const WEATHER_APP_ID = Keys.getOpenWeatherKey();

    this.city = reqCity;

    if (reqUnits) {
      this.units = reqUnits;
    } else {
      this.units = 'metrics';
    }

    this.urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${WEATHER_APP_ID}&units=${this.units}`;
  }

  getInfo() {
    return this.info;
  }

  getTemperature(temp) {
    if (this.units === 'imperial') {
      return `${parseFloat(temp).toFixed(2)} °F`;
    }
    return `${parseFloat(temp - 273.15).toFixed(2)} °C`;
  }

  async request() {
    this.info = await fetch(this.urlAPI)
      .then((responseData) => responseData.json())
      .then((jsonData) => {
        let code = 0;
        let data = {
          message: jsonData.message,
        };

        if (jsonData.cod === 200) {
          code = 1;
          data = {
            message: 'OK',
            coordinates: {
              latitude: jsonData.coord.lat,
              longitude: jsonData.coord.lon,
            },
            country: jsonData.sys.country,
            city: jsonData.name,
            icon: jsonData.weather[0].icon,
            description: jsonData.weather[0].description,
            main: {
              humidity: jsonData.main.humidity,
              temp: this.getTemperature(jsonData.main.temp),
              feels_like: this.getTemperature(jsonData.main.feels_like),
              temp_min: this.getTemperature(jsonData.main.temp_min),
              temp_max: this.getTemperature(jsonData.main.temp_max),
            },
          };
        } else if (jsonData.cod === 401) {
          code = -1;
        }

        return {
          result: code,
          data,
        };
      })
      .catch((err) => ({
        result: -1,
        data: err.message,
      }));

    return this.info;
  }
}

export default Weather;