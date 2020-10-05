let maleNamesArray = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
 
let femaleNamesArray = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

function getDayOfBirth(){
    let dob = document.getElementById("dateofbirth");

    if(!dob.value || dob.value === "" || dob.value.length < 10 || dob.value.length > 11){
        alert("Please enter Date of Birth in the format DD/MM/YYYY")
        return
    }
    else{
        alert("Proceed to select your gender")
    }
    let dateObj = dob.value.split("/")
        if(dateObj.length > 3 || dateObj.length  < 3){
        alert("Please enter Date of Birth in the format DD/MM/YYYY")
        return
        }
    let dd = dateObj[0]

        if(parseInt(dd) <= 1 ||  parseInt(dd) > 31 ){
            alert("Day must be between 1 and 31")
            return
    
    let mm = dateObj[1]
        if (parseInt(mm) <= 1 || parseInt(mm)> 12 ){
            alert("Month must be between 1 and 12")
            return
    }
    let yyyy = dateObj[3]
        if (parseInt(yyyy) <= 1 || parseInt(yyyy)>2020){
            alert("year must be between1 and 2020")
        }
