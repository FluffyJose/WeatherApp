import React from 'react';

const Weather = props => (
        <div className='infoWeath'>
          {props.city &&
              <div>
                  <p>Местоположение: {props.city}</p>
                  <p>Температура: {props.temp} &deg;C</p>
                  <p>Давление: {props.pressure} мм.рт.ст.</p>
                  <p>Восход: {props.sunrise}</p>
              </div>
          }
          <p className='error'>{props.error}</p>
        </div>
)

export default Weather;