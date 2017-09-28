/**
 * Created by PhpStorm.
 * User: Josh Lane
 * Date: 9/25/2017
 * Time: 6:07 PM
 * Description: This file was created to
 */


$('.log-out').on('click', function () {

});

$('.log-in').on('click', function () {

});

$('.sign-up').on('click', function () {
    var errors = $('.error');
    var prevPage = 0,
        currPage = 0,
        totalPages = 3,
        progressElem = $('#sign-up-progress'),
        intervalTime = 25,
        isValid,
        user1,
        user2,
        user3;

    $('#page1 .cancel').on('click', function (e) {
        e.preventDefault();
    });

    $('#page1 .next').on('click', function (e) {
        e.preventDefault();
        isValid = true;
        var page1 = $('#page1');

        // input fields
        var fName = $('.f-name');
        var lName = $('.l-name');
        var email = $('.email');
        var password = $('.password');
        var confirm = $('.confirm');

        // error blocks
        var fNameError = $('.f-name-error');
        var lNameError = $('.l-name-error');
        var emailError = $('.email-error');
        var passwordError = $('.password-error');
        var confirmError = $('.confirm-error');

        // reset input styles and error block messages to defaults
        $('.input').css({
            'border-bottom': '1px solid #333'
        });

        errors.html('');

        // fixes email
        var str = email.val();
        var strAt = str.indexOf("@");
        var strDot = str.indexOf(".", strAt);

        // validation checks
        if (fName.val() === '') {
            isValid = false;
            fName.css({
                'border-bottom': '1px solid red'
            });

            fNameError.html('This field can not be left empty.');
        }
        if (lName.val() === '') {
            isValid = false;
            lName.css({
                'border-bottom': '1px solid red'
            });

            lNameError.html('This field can not be left empty.');
        }
        if (email.val() === '' || strAt < 0 || strDot < 0) {
            isValid = false;
            email.css({
                'border-bottom': '1px solid red'
            });

            if (email.val() === '') {
                emailError.html('This field can not be left empty.');
            } else if (strAt < 0) {
                emailError.html('A valid email must have an "@" symbol present.');
            } else if (strDot < 0) {
                emailError.html('A valid email must have an "." symbol present after the "@" symbol.');
            }

        }
        if (password.val() === '' || !(password.val().length >= 8)) {
            isValid = false;
            password.css({
                'border-bottom': '1px solid red'
            });

            if(password.val() === ''){
                passwordError.html('This field can not be left empty.');
            }
            else if (!(password.val().length >= 8)) {
                passwordError.html('A password must be equal or great than 8 characters.');
            }

        }
        if (confirm.val() === '' || confirm.val() !== password.val()) {
            isValid = false;
            confirm.css({
                'border-bottom': '1px solid red'
            });

            if (confirm.val() === '') {
                confirmError.html('This field can not be left empty.');
            }
            else if (confirm.val() !== password.val()) {
                confirmError.html('This field does not match your password above.');
            }
        }

        if (isValid) {
            currPage++;
            SpeakerSubmission.progressBar({
                element: progressElem,
                prevPage: prevPage,
                currPage: currPage,
                totalPages: totalPages,
                intervalTime: intervalTime
            });
            prevPage++;
            page1.hide();
            user1 = {
                f_name: fName,
                l_name: lName,
                email: email,
                password: password,
                topics: []
            };
            page2.show();
            console.log(user1);
        } else if (!isValid) {

        }
    });
    $('#page2 .next').on('click', function (e) {
        e.preventDefault();
        isValid = true;
    });
    $('#page2 .back').on('click', function (e) {
        e.preventDefault();
    });
    $('#page3 .submit').on('click', function (e) {
        e.preventDefault();
        isValid = true;
    });
    $('#page3 .back').on('click', function (e) {
        e.preventDefault();
    });
});

var errors = $('.error');

// page1 selectors



// page2 selectors
var page2 = $('#page2');

var image = $('.image');
var company = $('.company');
var phone = $('.phone');
var bio = $('.bio');

var imageError = $('.image-error');
var companyError = $('.company-error');
var phoneError = $('.phone-error');
var bioError = $('.bio-error');

if (image.val() === '') {
    isValid = false;
    imageError.css({
        'border-bottom': '1px solid red'
    });
}
if (company.val() === '') {
    isValid = false;
    companyError.css({
        'border-bottom': '1px solid red'
    });
}
if (phone.val() === '') {
    isValid = false;
    phoneError.css({
        'border-bottom': '1px solid red'
    });
}
if (bio.val() === '') {
    isValid = false;
    bioError.css({
        'border-bottom': '1px solid red'
    });
}


if (isValid) {
    user2 = {
        image: image,
        company: company,
        phone: phone,
        bio: bio
    }
}
// page 3 selectors
var page3 = $('#page3');

var gitHub = $('.git-hub');
var linkedIn = $('.linked-in');
var twitter = $('.twitter');

var gitHubError = $('.git-hub-error');
var linkedInError = $('.linked-in-error');
var twitterError = $('.twitter-error');

if (gitHub.val() === '') {
    isValid = false;
    gitHubError.css({
        'border-bottom': '1px solid red'
    });
}
if (linkedIn.val() === '') {
    isValid = false;
    linkedInError.css({
        'border-bottom': '1px solid red'
    });
}
if (twitter.val() === '') {
    isValid = false;
    twitterError.css({
        'border-bottom': '1px solid red'
    });
}

if (isValid) {
    user3 = {
        updated_at: new Date(),
        social: [
            {
                link_name: 'GitHub',
                link: gitHub
            },
            {
                link_name: 'LinkedIn',
                link: linkedIn
            },
            {
                link_name: 'Twitter',
                link: twitter
            }
        ]
    }


}