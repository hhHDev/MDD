$(document).ready(function() {

    $("#dogForm").submit(function(event) {
        event.preventDefault();

        var $inputs = $('#dogForm :input');

        (function() {
            var formValues = {};
            $inputs.each(function() {
                formValues[this.name] = $(this).val();
            });

            $("#mdd").text(function() {
                return formValues.dogName +
                    "'s Madonna Dog Day is " +
                    getMdd(formValues.dogBday);

            })

        })();

        $("#dogForm").trigger('reset');
    });
})
    
function getMdd(bday) {
    return bday;
}
