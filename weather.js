new Vue({
    el: "#app",
    data: {
        userInput: "",
        weather: null,
        temperature: null,
        icon: null,
        humidity: null,
        pressure: null,
        wind: null,
        sunrise: null,
        sunset: null,
        icon: null
        
        
    },
    methods: {
        apiRequest: function(){
            axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.userInput + "&units=metric&appid=d9ce0e13783eb6a02995fab153ae9dc8")
            .then((resp) => {
                this.weather = resp.data.weather[0].description;
                this.temperature = Math.round(resp.data.main.temp) + " C";
                this.humidity = resp.data.main.humidity + " %";
                this.pressure = resp.data.main.pressure + " hPa";
                this.wind = resp.data.wind.speed + " m/s";
                this.sunrise = new Date(resp.data.sys.sunrise * 1e3).toISOString().slice(-13, -5);
                this.sunset = new Date(resp.data.sys.sunset * 1e3).toISOString().slice(-13, -5);
                this.icon = "http://openweathermap.org/img/w/" + resp.data.weather[0].icon + ".png"
            })
            
    }
    }  
    
    
    

})
