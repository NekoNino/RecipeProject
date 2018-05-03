/*
var elForm, elName ,elOutput;

elForm = document.getElementById('formReg');
elName = document.getElementById('txtName');
elText = document.getElementById('txtArea');
elOutput = document.getElementById('output');

function testFunction(event) {
    // Använd value när man hämtar från input i formuläret
    var name = elName.value;
    var textarea = elText.value;

    console.log('Textarea: ', textarea);

    elOutput.textContent = name + ' ' + textarea;
    {
        // Submittar inte formuläret
        event.preventDefault(); //
    }

}
elForm.addEventListener('submit', testFunction, false);
*/          //reserved för error

//elForm.addEventListener('submit', testFunction, false);
//Backup js file

var elForm, elName ,elOutput;

elForm = document.getElementById('formReg');
elName = document.getElementById('txtName');
elText = document.getElementById('txtArea');
elOutput = document.getElementById('output');

function testFunction(event) {

    var name = elName.value;
    var textarea = elText.value;
    var info = name + ' ' + textarea;
    localStorage.setItem("localInfo", info);
    console.log("Localstorage", localStorage.getItem('localInfo'))
    ;
    if(name.length < 5){
        elOutput.textContent = 'Enter at least 5 characters in the Name';
    }else{
        elOutput.textContent = name + ' ' + textarea;
    }
   /* var message = document.getElementById('error');

    if (this.value.length < 5) {
        message.textContent = 'Error, must enter more than 5 characters';
    }

    else {
        message.textContent = '';
    }
*/
    console.log('Textarea: ', textarea);

    //elOutput.textContent = name + ' ' + textarea;
    {
        // Submittar inte formuläret
        event.preventDefault(); //
    }

}
elForm.addEventListener('submit', testFunction, false);
