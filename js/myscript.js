let maleNamesArray = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
 
let femaleNamesArray = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    

function getDayOfBirth(){
    /**
     * document.getElementById("") => https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
     */

    let dob = document.getElementById("dateofbirth");

    let genderInput = document.getElementById("gender")

    /**
     * https://developer.mozilla.org/en-US/docs/Glossary/Control_flow
     */
    if(!dob.value || dob.value === "" || dob.value.length < 10 || dob.value.length > 11){
        alert("Please enter Date of Birth in the format DD/MM/YYYY")
        return
    }else{
        /**
         * Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
         * The Split function will create an array of the format ["02","03","1990"],
         * Where the item in index 0 = date, 1 = month, 3 = Year of birth
         * a quick check to confirm if the user entered the correct information is to check the length of the array
         */


        let dateObj = dob.value.split("/")
        if(dateObj.length > 3 || dateObj.length  < 3){
            alert("Please enter Date of Birth in the format DD/MM/YYYY")
            return
        }
        //validate the date
        let dd = dateObj[0]

        if(parseInt(dd) <= 1 ||  parseInt(dd) > 31 ){
            alert("Day must be between 1 and 31")
            return
        }
        //valdate the month
        let mm = dateObj[1]
        let yyyy =dateObj[2]
        //calculate day with the formula
        debugger
        let dayOfTheWeek = ( ( (parseInt(yyyy.slice(0,2)/4)) -2*parseInt(yyyy.slice(0,2))-1) + ((5*parseInt(yyyy.slice(2,4))/4) ) + ((26*(parseInt(mm)+1)/10)) + parseInt(dd) ) % 7

        /**
         * https://developer.mozilla.org/en-US/docs/Web/API/Console/log
         */

        //console.log("Date Obj", dateObj)

        if(genderInput.value === "0"){
            alert("Please select a gender")
            return
        }
        // we have the gender and day
        // for example day = 1

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


        alert("Your name is "+ nameOfPerson)
    }
}
