window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then(function(json) {
      //console.log(json);
      
      
      
      for(let i=0;i<json.length;i++)
      {
        json[i].skills=json[i].skills.join(', ');
      };



      let astronauts = json.map(({firstName,lastName,hoursInSpace,active,skills,picture})=>`
        <div>
          <div class="astronaut">
          <div class="bio">
              <h3>${firstName} ${lastName}</h3>
           <ul>
              <li>Hours in space: ${hoursInSpace}</li>
              <li>Active: ${active}</li>
              <li>Skills: ${skills}</li>
           </ul>
        </div>
        <img class="avatar" src="${picture}">
     </div>
        </div>
     ` );
      



     astronauts = astronauts.join('');

        container.innerHTML = astronauts;
        
      });


 });
});