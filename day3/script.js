async function getcountries() {
  try {
    var country = await fetch("https://restcountries.eu/rest/v2/all");
    var allcountry = await country.json();
    //console.log(allcountry);
    var container = document.createElement("div");
    container.classList.add("container", "text-center");
    container.setAttribute("style", "background-color:#2F4F4F;padding:10px;");

    var divrow = document.createElement("div");
    divrow.classList.add("row");

    allcountry.forEach((element) => {
      var divcol = document.createElement("div");
      divcol.classList.add("col", "col-lg-4", "col-sm-12");
      var divcard = document.createElement("div");
      divcard.classList.add("card");
      divcard.setAttribute("style","margin-bottom:10px;background-color: #2f4353;background: linear-gradient(315deg, #2f4353 0%, #d2ccc4 100%);");

      var header = document.createElement("div");
      header.classList.add("card-header");
      header.setAttribute("style", "background-color:black;color:white");
      header.innerHTML = element["name"];

      var divbody = document.createElement("div");
      divbody.classList.add("card-body");
      divbody.setAttribute("style", "padding:10px");

      var image = document.createElement("img");
      image.setAttribute("src", element["flag"]);
      image.setAttribute("style", "height:200px;width:300px;padding:10px;");
      divbody.append(image);

      var para = document.createElement("p");
      para.classList.add("card-text");
      para.setAttribute("style", "color:white");
      para.innerHTML ="Capital:" +element["capital"] +"<br> Region:" +element["region"] +"<br> Country Code:" +element["alpha3Code"];
      para.innerHTML += "<br> LatIng:" + element["latlng"].join(" ");
      divbody.append(para);

      var button = document.createElement("button");
      button.setAttribute("class", "btn btn-primary");
      button.setAttribute("style", "background:none;border-color:white;");
      button.innerText = "Click for Weather";
      //button.onclick = getweather(element["name"]);
      button.addEventListener("click",function () {getweather(element["name"]);},true);

      divbody.append(button);
      divcard.append(header, divbody);
      divcol.append(divcard);
      divrow.append(divcol);
    });

    container.append(divrow);
    document.body.append(container);
  } catch (err) {
    alert(err);
  }
}

getcountries();

async function getweather(country) {
  try {
    var countryweather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=008ffcc8199c2fd7456426b8b74a39e3`);

    var weather = await countryweather.json();

    if (weather.cod == 200) {
      var message ="Weather Condition :" +weather.weather[0].description +"\n" +"Temperature:" +weather.main["temp"];
      alert(message);
    } else {
      alert(weather.message);
    }
  } catch (err) {
    alert(err);
  }
}
