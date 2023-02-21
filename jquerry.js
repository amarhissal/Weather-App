
function greetings() {
   
     city_name=document.getElementById("userinput").value;
    console.log("name",city_name)
    let api_key="557696b4064af47c17a61688609b2ad3"
   

    let p= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`);
    p.then((responce)=>{
    console.log(responce.status);
        return responce.json();
    }).then((value)=>{
        console.log(value);
        console.log(value.main.temp)
        let image=`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`
    let p= document.querySelector(".p");
    p.innerHTML=` <img src="${image}" alt="icon" ><br>
    The Current temp in ${city_name} is ${value.main.temp}°C<br><br>
    And Weather Condition is : ${value.weather[0].description}
   
    `
       
       
    }).catch((e)=>{
        let p= document.createElement("p");
        p.innerHTML="Error Occured While Fetching API......"
           document.body.append(p); 
    })
    
}
  


