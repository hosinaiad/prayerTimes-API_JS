
let cities = [
    //  "Tripoli", "Benghazi", "Sabha", "Nalut"
    // Change previous code with next clean code .. create by create object ..
       
        // arabicName: "طرابلس",
        {
            englishName: "Tripoli",
            name: "Tripoli"
        },
        {
            englishName: "Benghazi",
            name: "Benghazi"
        },
        {
            englishName: "Agedabia",
            name: "Agedabia"
        },
        {
            englishName: "Tobruk",
            name: "Tobruk"
        },
        {
            englishName: "Sabha",
            name: "Sabha"
        },
        {
            englishName: "Nalut",
            name: "Nalut"
        },
        {
            englishName: "Ubari",
            name: "Ubari"
        }
    ]
    
    // Agedabia
    for(let city of cities){
        let content = 
        `
        <option>${city.englishName}</option>
        
        `
        document.getElementById("cities-select").innerHTML += content
    }
    
    // Next line to change city ..
    document.getElementById("cities-select").addEventListener("change", function (){
        // if(this.value == "Tripoli")
        // {
        //     getPrayersTimingsOfCity("Tripoli")
        // }else if(this.value == "Benghazi"){
        //     getPrayersTimingsOfCity("Benghazi")
        // }else if(this.value == "Sabha"){
        //     getPrayersTimingsOfCity("Sabha")
        // }else{
        //     getPrayersTimingsOfCity("Nalut")
    
        // }
        document.getElementById("city-name").innerHTML = this.value
        let cityName = ""
        for (let city of cities){
            if(city.englishName == this.value){
                cityName = city.name
            }
        }
    
        // Call function ..
        getPrayersTimingsOfCity(cityName)
        // console.log(document.getElementById("cities-select").value)
        // We can change to next short line .. with use 'this'
        // console.log(this.value)
    })
    
    // Function ..
    function getPrayersTimingsOfCity(cityName)
    {
        let params = {
        country: "LY",
        city: cityName   //"Tripoli"
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
      })
      .then(function (response) {
        const timings = response.data.data.timings
        fillTimeToPrayer("fajr-time", timings.Fajr)
        fillTimeToPrayer("sunrise-time", timings.Sunrise)
        fillTimeToPrayer("dhuhr-time", timings.Dhuhr)
        fillTimeToPrayer("asr-time", timings.Asr)
        fillTimeToPrayer("sunset-time", timings.Sunset)
        fillTimeToPrayer("isha-time", timings.Isha)
    
    
    
        const readableDate = response.data.data.date.readable
        const weekDay = response.data.data.date.gregorian.weekday.en
        const date = weekDay + "  " + readableDate
        document.getElementById("date").innerHTML = date
    
       // document.getElementById("fajr-time").innerHTML = timings.Fajr
        // console.log(response.data.data.timings.Fajr);
        // console.log(weekDay + "  " + readableDate);
      })
      .catch(function (error) {
        console.log(error);
      })
    
    }
    
    
    // Call function
    getPrayersTimingsOfCity("Tripoli")
    
    
    
    function fillTimeToPrayer(id, time)
    {
        document.getElementById(id).innerHTML = time
    }
    