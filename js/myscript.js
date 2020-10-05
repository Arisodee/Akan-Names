let maleNamesArray = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
 
let femaleNamesArray = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    

function getDayOfBirth(){
   

    let dob = document.getElementById("dateofbirth");

    let genderInput = document.getElementById("gender")

    if(!dob.value || dob.value === "" || dob.value.length < 10 || dob.value.length > 11){
        alert("Please enter Date of Birth in the format DD/MM/YYYY")
        return
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
        }
        
    let mm = dateObj[1]
    let yyyy =dateObj[2]
    //calculate day with the formula
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

        //document.getElementById("nameResult").innerHTML = nameOfPerson
        alert("Your name is "+ nameOfPerson)
    }
}
