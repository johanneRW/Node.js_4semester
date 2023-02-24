
//fetch("/api/tanks").then(response => response.json())
fetch("/api/tanks")
.then(response => response.json())
.then(result => { 
    const tankWrapperDiv = document.getElementById('tanks-wrapper')
result.data.forEach(tank => {
    const tankDiv=document.createElement("div")

    const tankNameP=document.createElement("p")
    tankNameP.innerText= tank.tank||"No name"
    const tankNationalityP=document.createElement("p")
tankNationalityP.innerText=tank.natioality || "No nationality"

    tankDiv.appendChild(tankNameP)

    tankWrapperDiv.appendChild(tankDiv)
    
});


})
