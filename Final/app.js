/*************** Education ******************/
$("a.ebtn").mousedown(function(){
    $(this).addClass("pressed");
});

$("a.ebtn").mouseup(function(){
    $(this).removeClass("pressed");
});

$("a.ebtn").on("tap",function(){
    $(this).removeClass("pressed");
});

$("a.ebtn").mouseout(function(){
    $(this).removeClass("pressed");
});

/*************** Contact me ******************/

function areAlphabets(element, message) {
    let validRegex = /^[A-Za-z\s]+$/;
    if (!(element.value.match(validRegex))) {
        messages.push(message);
    }
}

function Name() {
    const inputName = document.getElementById('name');
    if(nullChecker(inputName, 'Name')) {
        areAlphabets(inputName, '- Name must be alphabetical');
    }
}

function email() {
    const email = document.getElementById('email');
    if (nullChecker(email, 'Email')) {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(email.value.match(validRegex))) {
            messages.push("- Invalid smail address");
        }
    }    
}

// Validation for address
function address() {
    const address = document.getElementById('address');
    if (nullChecker(address, 'Address')) {
        if (address.value.length < 10) {
            messages.push("- Address must be at least 10 characters long");
        }
    }
}

// Validation for postal code
function postalCode() {
    let postalCode = document.getElementById('pCode');
    let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!(postalCode.value.match(validRegex))) {
        messages.push("- Invalid postal code");
    }
}

function message() {
    const message = document.getElementById('message');
    if (nullChecker(message, 'Message')) {
        if (address.value.length < 10) {
            messages.push("- Message must be atleast 5 characters long");
        }
    }
}

function nullChecker(element, elementName) {
    result = true;
    if (element.value === '' || element.value == null) {
        messages.push(`- ${elementName} is required`);
        result = false;
    }

    return result;
}