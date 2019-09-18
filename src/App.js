import React from 'react';
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = '9d6a5175014bfcd7e07a379f45054ec1';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    sunrise: undefined,
    pressure: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      let sunrise = data.sys.sunset;
      let date = new Date();
      date.setTime(sunrise);
      let sunrise_date = date.getHours() + ':' + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        sunrise: sunrise_date,
        pressure: data.main.pressure,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        sunrise: undefined,
        pressure: undefined,
        error: 'Введите название города'
      });
    }
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-5 info'>
              <Info />
              </div>
              <div className='col-sm-7 form'>
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                temp={this.state.temp}
                city={this.state.city}
                sunrise={this.state.sunrise}
                pressure={this.state.pressure}
                error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;