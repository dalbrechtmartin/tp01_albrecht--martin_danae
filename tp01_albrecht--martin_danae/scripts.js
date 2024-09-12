$(document).ready(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();

        $('.error-message').remove();
        $('#success-message').remove();

        let password = $('#password').val();
        let isValid = true;
        let errorMessage = '';

        if (password.length < 8) {
            errorMessage = 'Le mot de passe doit contenir au moins 8 caractères.';
            isValid = false;
        } else if (!/\d/.test(password)) {
            errorMessage = 'Le mot de passe doit contenir au moins un chiffre.';
            isValid = false;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errorMessage = 'Le mot de passe doit contenir au moins un caractère spécial.';
            isValid = false;
        }

        if (!isValid) {
            $('form').after('<span class="error-message" style="color:red;font-size:24px;display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: center;align-items: center;">' + errorMessage + '</span>');
        } else {
            $('form').after('<p id="success-message" style="color:green;font-size:24px;display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: center;align-items: center;">Le formulaire a été validé avec succès !</p>');
            setTimeout(() => {
                this.submit();
            }, 3000);
        }
    });
});