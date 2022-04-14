class Fetch {
    async getCurrent(input) {
      const myKey = "bb3557f009dc1ebf252f92d3da4ca8ba";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }