$(document).ready(function(){
    $('#match').hide();
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
                     if (pic == null){
                        var undefindedImage;
                        undefindedImage = $('<img>');
                        undefindedImage.addClass('visitedImage');
                        undefindedImage.addClass('card-img-top');
                        undefindedImage.attr('alt', 'Card image cap');
                        undefindedImage.attr('src', 'https://s3-us-west-2.amazonaws.com/petcha.com/pet_care/wp-content/uploads/2016/08/18000858/image-not-available.jpg')
                         $('#randomImage'+i).html(undefindedImage);
                         $('#randomName'+i).text('Jackie');
                      
                    }
                    pic = petfinder.pet.media.photos.photo[2].$t;
                   
                    name = petfinder.pet.name.$t;
                    image.attr('src', pic);
                    image.addClass('visitedImage');
                    image.addClass('card-img-top');
                    image.attr('alt', 'Card image cap');
                    info = petfinder.pet.description['$t'];
                    $('#randomName'+i).html(name);
                    $('#randomImage'+i).html(image);
                    $('#randomInfo'+i).text(info);
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
$("#submit").on("click", function(){
    $('#match').show();
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
                    image.addClass('visitedImage');
                    image.addClass('card-img-top');
                    image.attr('alt', 'Card image cap');
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
                    image.addClass('visitedImage');
                    image.addClass('card-img-top');
                    image.attr('alt', 'Card image cap');
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
