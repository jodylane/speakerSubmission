/**
 * Created by PhpStorm.
 * User: Josh Lane
 * Date: 9/25/2017
 * Time: 6:08 PM
 * Description: This file was created to
 */
window.SpeakerSubmission = {};

SpeakerSubmission.capitalizeFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

SpeakerSubmission.alertMessage = function (options) {
    var type = options.msg_type ? options.msg_type : 'error';
    var errMsg = 'An error has occurred! If the issue persists please contact a developer.';
    var message = options.text ? options.text : errMsg;
    var title = options.title ? SpeakerSubmission.capitalizeFirstLetter(options.title) + '!' : '';
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr[type](message, title);
};

SpeakerSubmission.progressBar = function (options) {
    console.log(options);
    var elem = $(options.element);
    var width = Math.round(elem.width() / elem.parent().width() * 100);
    var prevPage = options.prevPage;
    var currPage = options.currPage;
    var pages = options.totalPages;
    var widthPerPage = Math.round(100 / pages);
    console.log(widthPerPage, width, elem)
    var intervalID = setInterval(function () {
        console.log(width);
        if (width === 100 || width === 1 && currPage === prevPage || width === widthPerPage) {
            console.log('stop')
            clearInterval(intervalID);
        } else if(currPage === prevPage) {
            if (width > widthPerPage || width > 0) {
                width--;
            }
        } else if (currPage > prevPage) {
            if (width <= (widthPerPage * currPage) || currPage === pages) {
                width++;
            }

        }
        elem.css({'width': width + '%'});
    }, options.intervalTime);
};