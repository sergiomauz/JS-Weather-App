import 'babel-polyfill';

class Weather {
  constructor(params) {
    const { reqCity, reqUnits } = params;
    const appID = '860baa5edd1cd9b42075446e14ae99c3';

    this.city = reqCity;

    if (reqUnits !== undefined) {
      this.units = reqUnits;
    } else {
      this.units = 'metrics';
    }

    this.urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${appID}&units=${this.units}`;
  }

  getInfo() {
    return this.info;
  }

  getCity() {
    return this.city;
  }

  getUnits() {
    return this.units;
  }

  async request() {
    this.info = await fetch(this.urlAPI)
      .then((response) => response.json())
      .then((jsonData) => {
        let code = 0;
        if (jsonData.cod === 200) {
          code = 1;
        } else if (jsonData.cod === 401) {
          code = -1;
        }

        return {
          result: code,
          data: jsonData,
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