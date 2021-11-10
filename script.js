// class Cowin {
//     fetchData() {
//         
//         // console.log(name1,pwd);
    
//     
//     
//     alert("ok")

// }

// }
// 
class Cowin{
fetchData(){
    let uname = username.value;
    let pwd = password.value;
    let user = {
                uname, pwd
            }
    localStorage.setItem(uname, JSON.stringify(user));

    location.href="./login.html"
}
authenticate(){
    let uname=username1.value;
    let pswd=password1.value;
    let data=JSON.parse(localStorage.getItem(uname));
    if(pswd==data.pwd){
        alert("authentication successful");
         location.href="./search.html"
        //location.href="./district.html"
    }
    else{
        alert("invalid credentials")
    }
}
fetchValues(){
    if(pin.value!=0){
    let pincode=pin.value;
    let date=dt.value;
    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`).then(res => res.json()).
    then(data =>this.displayValues(data));
    }
    
}
 displayValues(data){
    let html_data=``;
    let length=data["sessions"].length;
    if(length>0){
    for(let i=0;i<length;i++){
    let slot=data["sessions"][i].name
    html_data+=`<br>${slot} <br>`}
    
   }
    else{
        html_data+=`No slot available`
    }
    result.innerHTML=html_data;
    
}
fetchState(){
    
    fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`).then(res => res.json()).
    then(data =>this.fetchdist(data["states"]));
    
}
// fetchdist(datas){
//     let state=state1.value;
//     let date=dt1.value;
//     let district=dist1.value;
//     let state2={}
//     //console.log(datas);
//     //console.log(datas[0]);
//     for(let data in datas){
//         // console.log(datas[data]);
//         if(state1.value==datas[data].state_name){
//             alert("ok");
//         }
       
//     }
    
    
   
    

// }

}
var cowin = new Cowin();

