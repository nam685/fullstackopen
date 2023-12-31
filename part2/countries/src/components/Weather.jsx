const buildUrl = (icon) => (
  `https://openweathermap.org/img/wn/${icon}@2x.png`
)

const Weather = ({ data }) => {
  if (data == null) {
    return
  } else {
    return (
      <div>
        <p>temperature {data.main.temp - 273.15} Celsius</p>
        <img src={buildUrl(data.weather[0].icon)}/>
        <p>wind {data.wind.speed} m/s</p>
      </div>
    )
  }
}

export default Weather