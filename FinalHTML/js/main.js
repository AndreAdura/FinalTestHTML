let submit = document.getElementById('formButton');

submit.addEventListener('click', function() {
    if (document.getElementById('password1').value == document.getElementById('password2').value) {
        alert('form sent! Well Done')

    } else {
        alert("Your Passord Confirmation is not valid");
    }

});

let showList = document.getElementById('listButton');
let OrderedList = document.getElementById('ordered');

showList.addEventListener('click', function() {

    OrderedList.removeAttribute('hidden');
    let employees = document.getElementsByClassName('employee');
    employees[0].innerHTML = 'Andre'
    employees[1].innerHTML = 'Milad'
    employees[2].innerHTML = 'Hibiki'
    employees[3].innerHTML = 'Satori'

});


