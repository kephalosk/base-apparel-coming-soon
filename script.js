document.addEventListener('DOMContentLoaded',() => {
    const contentEmailIcon = document.querySelector('.contentEmailIcon');
    const contentEmailMessage = document.querySelector('.contentEmailMessage');
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    let email = '';

    button.addEventListener('click',validate);
    button.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' '){
            validate.call(this);
        }
    });

    function validate() {
        email = input.value;
        console.log(email);

        if(isValidEmail(email)){
            contentEmailIcon.classList.remove('error');
            contentEmailMessage.classList.remove('error');
            input.classList.remove('error');
        } else {
            contentEmailIcon.classList.add('error');
            contentEmailMessage.classList.add('error');
            input.classList.add('error');
        }

        this.blur();
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});