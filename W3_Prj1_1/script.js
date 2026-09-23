window.addEventListener('load', function(){
    console.log('page is loaded'); 

let ct = new Date().toLocaleTimeString();
console.log(ct);
let ctz = Intl.DateTimeFormat().resolvedOptions().timeZone
console.log(ctz);

// console.log(Date());

let nameElement1 = document.getElementById('CTtime');
nameElement1.innerHTML = ct;
let nameElement2 = document.getElementById('CTtz');
nameElement2.innerHTML = ctz;

// fetch json file
fetch('timezones.json')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    console.log(data.timezones[5].name)


//    //for loop to generate data into html? 
//    for(let i=0; i< timezones.length; i++){
//     let num = i;
//     let nameTimezone= document.getElementsByTagName('th');
//     nameTimezone.innerHTML = data.timezones[i].name
//    }

let nameTimezone= document.getElementsByTagName('li');

for(let i=0; i< data.timezones.length; i++){
    let TZn = data.timezones[i].name;
    let off = data.timezones[i].utc_offset;
    //let LT = ct + off; // this did not work 
    
    nameTimezone[i].innerHTML = TZn + "/" + "UTC" + off
    console.log(nameTimezone);
   }
})
.catch (error => {
    console.log ('Error!!!' + error)
})

})




