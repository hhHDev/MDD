$(document).ready(function() {
    var madonna = new Person("Madonna", new moment("1958-8-16"));

    $("#dogForm").submit(function(event) {
        event.preventDefault();
        var $inputs = $('#dogForm :input');

        (function() {
            var formValues = {};
            $inputs.each(function() {
                formValues[this.name] = $(this).val();
            });

            var dog = new Dog(formValues.name, new moment(formValues.birthdate));

            $("#mdd").text(function() {
                return dog.name +
                    "'s Madonna Dog Day is " +
                    getMdd(dog, madonna);

            })

        })();

        $("#dogForm").trigger('reset');
    });
})

var Person = function(name, birthdate) {
    this.name = name;
    this.birthdate = birthdate;
}

var Dog = function(name, birthdate) {
    this.name = name;
    this.birthdate = birthdate;
}

function getMdd(dog, celeb) {
    var daysOldAtDogBday = dog.birthdate.diff(celeb.birthdate, 'Days'),
        dayOldAdjusted = daysOldAtDogBday * 7 / 6;

    return moment(dog.birthdate, "DD-MM-YYYY").add((dayOldAdjusted - daysOldAtDogBday), 'Days').format('MM/DD/YYYY');
}