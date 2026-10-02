function searchdonor(){
    let search =
    document.getElementById("searchBlood").Value;
    let blood =
    localStorage.getItem("bloodGroup"); 
    let name =
    localStorage.getItem("donorName");
    if(search == blood)
    {
        document.getElementById("result").innerHTML =
        "Donor Found <br> Name: "
        +name+
        "<br>Blood Group:"
        +blood;
    }
    else{
        document.getElementById("result").innerHTML =
        "No Donor Available";
    }
    }