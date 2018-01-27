$(document).ready(function(){
    $('#match').show();
    var arraymalePets = [];
    var arrayfemalePets = [];
    var arrayunknownPets = [];
    for (var i = 0; i < 3; i++){
        (function(i){
            var url = "https://api.petfinder.com/pet.getRandom?key=e3c9b6bee87f4314a2b6cd95e68fda76&output=full&format=json";
            $.ajax({
                type : 'GET',
                data : {},
                url : url+'&callback=?' ,
                dataType: 'json',
                success : function(data) {
                    var petfinder = data.petfinder;
                    var info;
                    var pic;
                    var image = $('<img>');
                    var name;
                    pic = petfinder.pet.media.photos.photo[0].$t;
                    name = petfinder.pet.name.$t;
                    image.attr('src', pic);
                    $('#randomName'+i).html(name);
                    $('#randomImage'+i).html(image);
                    console.log(data);

                },
                error : function(request,error)
                {
                    alert("Request: "+JSON.stringify(request));
                }
            });
        })(i);
    
        }
        //    for (var i = 0; i < 10; i++){
        // (function(i){
            
        //     var url = "https://api.petfinder.com/pet.getRandom?key=e3c9b6bee87f4314a2b6cd95e68fda76&output=full&format=json";
        //     $.ajax({
        //         type : 'GET',
        //         data : {},
        //         url : url+'&callback=?' ,
        //         dataType: 'json',
        //         success : function(data) {
        //             var gender;
        //             var petfinder = data.petfinder.pet;
        //             gender = petfinder.sex.$t;
        //              if (gender == 'M'){
        //                 arraymalePets.push(petfinder);
        //             }
        //             else if (gender == 'F'){
        //                 arrayfemalePets.push(petfinder);
        //             }
        //             else{
        //                 arrayunknownPets.push(petfinder);
        //             }
                    
        //             console.log(arraymalePets);
        //             console.log(rrayfemalePets);


        //         },
        //         error : function(request,error)
        //         {
        //             alert("Request: "+JSON.stringify(request));
        //         }
        //     });
        // })(i);
    
        // }
    $("#adopt").on("click", function() {
            var url = "https://api.petfinder.com/pet.getRandom?key=e3c9b6bee87f4314a2b6cd95e68fda76&output=full&format=json";
            $.ajax({
                type : 'GET',
                data : {},
                url : url +'&callback=?',
                dataType: 'json',
                success : function(data) {
                    var petfinder = data.petfinder;
                    var info;
                    var pic;
                    var image = $('<img>');
                    var name;
                    var gender;
                    var city;
                    var state;
                    var zipcode;
                    info = petfinder.pet.description['$t'];
                    pic = petfinder.pet.media.photos.photo[2].$t;
                    name = petfinder.pet.name.$t;
                    gender = petfinder.pet.sex.$t;
                    city = petfinder.pet.contact.city.$t;
                    state = petfinder.pet.contact.state.$t;
                    zipcode = petfinder.pet.contact.zip.$t;
                    if (gender == 'M'){
                        gender = 'Male';
                    }
                    else if (gender == 'F'){
                        gender = 'Female';
                    }
                    image.attr('src', pic);
                    $('#petInfo').html(info);
                    $('#petName').html(name);
                    $('#petImage').html(image);
                    $('#petGender').html(gender);
                    $('#location').text(city +', '+ state + ' '+zipcode);
                    $('#map').html('<iframe width="100%" height="150%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q='+city+'%2C%20'+state+'+'+zipcode+'&key=AIzaSyCqhvq2DjBtN4xdBzPeVgy6q2NDdzssL3I" allowfullscreen></iframe>');
                    console.log(city);
                    console.log(petfinder);
                },
                error : function(request,error)
                {
                    alert("Request: "+JSON.stringify(request));
                }
            });
});
});