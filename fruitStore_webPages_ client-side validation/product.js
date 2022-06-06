function validationForm(){
    var count=0;

    if(desc()){count++;}
    if(username()){count++;}
    if(checkBoxes()){count++};

    if(count==3){
        alert("Fill out the form successfully!");
        return true;
    }
    
    return false;
}

function displayDescError(errorMsg){
    document.querySelector("#descError").innerHTML="<p>Product Description: "+errorMsg+"</p>";
}

function clearErrors(){
    document.querySelector(".errors").innerHTML=" ";
}

function desc(){
    var allAlphabet=true;
    var input=document.querySelector("#desc").value.trim();

    if(input.charAt(0)!=input.charAt(0).toUpperCase()){ // Check staring with a cap
        var msg="Please start with a cap!";
        displayDescError(msg);
        return false;
    }else{
        msg=" ";
        displayDescError(msg);
    }

    if(input.length<20){ // Check at least 20 characters
            var msg="Please enter at least 20 characters!";
            displayDescError(msg);
            return false;
    }else{
        msg=" ";
        displayDescError(msg);
    }

    input=input.toUpperCase(); // Check all alphabet
    for(var i=0; i< input.length; i++){
        if(input.charAt(i)<'A' || input.charAt(i)>'Z') {allAlphabet=false;}
    }
    if(!allAlphabet){
        var msg="Description only alphabet allowed!";
        displayDescError(msg);            
        return false;
    }else{
        msg=" ";
        displayDescError(msg);
    }

    return true;
}

function checkBoxes(){
    var boxes=document.signup.status;
    var count=0;

    for(var i=0; i<boxes.length;i++){
        if(boxes[i].checked==true){count++;}
    }

    if(count==0){
        var msg="User must select at least one of the check boxes!";
        //displayErrors(msg);
        document.querySelector("#statusError").innerHTML="<p>Supplier Status: "+msg+"</p>";
        return false;
    }else{
        document.querySelector("#statusError").innerHTML=" ";
    }

    return true;
}

function username(){
    var input=document.querySelector("#username").value.trim();

    if(input.charAt(0).toUpperCase()<'A'||input.charAt(0).toUpperCase()>'Z'){
        var msg="Username must start with an alphabet!";
        document.querySelector("#nameError").innerHTML="<p>Supplier Username: "+msg+"</p>";
        return false;
    }else{
        document.querySelector("#nameError").innerHTML=" ";
    }

    if(input.length<6){
        var msg="Username must have at least 6 characters!";
        document.querySelector("#nameError").innerHTML="<p>Supplier Username: "+msg+"</p>";
        return false;
    }else{
        document.querySelector("#nameError").innerHTML=" ";
    }

    return true;
}

