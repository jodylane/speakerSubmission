/**
 * Created by PhpStorm.
 * User: Josh Lane
 * Date: 9/25/2017
 * Time: 6:07 PM
 * Description: This file was created to
 */
var Service = (function () {
    var array = [];
    var user = {};
    var user1 = {
        f_name: 'f_name',
        l_name: 'l_name',
        email: 'email',
        password: 'password',
        topics: []
    };

    var user2 = {
        company_name: 'company_name',
        bio: 'bio',
        phone: 'phone',
        picture: 'picture'
    };

    var user3 = {
        updated_at: new Date(),
        social: [
            {
                link: 'GitHub',
                link_name: 'GitHub'
            },
            {
                link: 'linkedIn',
                link_name: 'LinkedIn'
            },
            {
                link: 'twitter',
                link_name: 'Twitter'
            }
        ]
    };
    var object = Object.assign({}, user1, user2, user3);

    var addUser = function (fName, lName, email, password) {

    };


    return {

    }
})();