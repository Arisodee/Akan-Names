let maleNamesArray = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
 
let femaleNamesArray = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

function getDayOfBirth(){
    

    let dob = document.getElementById("dateofbirth");

    let genderInput = document.getElementById("gender")

    
    if(!dob.value || dob.value === "" || dob.value.length < 10 || dob.value.length > 11){
        alert("Please enter Date of Birth in the format DD/MM/YYYY")
        return
    }else{
        


    let dateObj = dob.value.split("/")
    if(dateObj.length > 3 || dateObj.length  < 3){
        alert("Please enter Date of Birth in the format DD/MM/YYYY")
        return
    }
        
    let dd = dateObj[0]

    if(parseInt(dd) <= 1 ||  parseInt(dd) > 31 ){
        alert("Day must be between 1 and 31")
        return
    }
       
    let mm = dateObj[1]
    if(parseInt(mm) <= 1 ||  parseInt(mm) > 12 ){
        alert("Month must be between 1 and 12")
        return
    }

    let yyyy =dateObj[2]
    if(parseInt(yyyy) < 1 ||  parseInt(yyyy) > 2020 ){
        alert("year must be between 1 and 2020")
        return
    }
    debugger
    let dayOfTheWeek = ( ( (parseInt(yyyy.slice(0,2)/4)) -2*parseInt(yyyy.slice(0,2))-1) + ((5*parseInt(yyyy.slice(2,4))/4) ) + ((26*(parseInt(mm)+1)/10)) + parseInt(dd) ) % 7

        

    if(genderInput.value === "0"){
        alert("Please select a gender")
        return
    }
        

    let nameOfPerson = ''
    if(gender.value == 'male'){
        nameOfPerson = maleNamesArray[parseInt(dayOfTheWeek)]
    }else{
        nameOfPerson = femaleNamesArray[parseInt(dayOfTheWeek)]
    }

    if(nameOfPerson == ''){
        alert("we did get a valid day of the week, please try again")
        return
    }

    // document.getElementById("nameResult").innerHTML = nameOfPerson
    alert("Your Akan name is: " + nameOfPerson)
    }
}

    