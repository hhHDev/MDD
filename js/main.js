angular.module('mddApp', [
    'mddController', 'ngAnimate'
]);

// Controller
angular.module('mddApp', []).
controller('mddController', function($scope, Dog, Person) {
    var madonna = new Person("Madonna", new moment("1958-8-16")), dog = new Dog();

    $scope.dogFormSubmitted = function(form) {
        dog.name = $scope.name;
        dog.birthdate = new moment($scope.birthdate);
        $scope.mdd = getMdd(dog, madonna);
    }

    function getMdd(dog, celeb) {
        var daysOldAtDogBday = dog.birthdate.diff(celeb.birthdate, 'Days'),
            dayOldAdjusted = daysOldAtDogBday * 7 / 6;

        return moment(dog.birthdate, "DD-MM-YYYY").add((dayOldAdjusted - daysOldAtDogBday), 'Days').format('MM/DD/YYYY');
    }

});


// Models
angular.module('mddApp').
factory('Person', function() {

    function Person(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
    }

    return Person;
});

angular.module('mddApp').
factory('Dog', function() {
    function Dog(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
    }

    return Dog;
});