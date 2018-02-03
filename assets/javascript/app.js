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
$("#adopt").on("click", function(){
    window.location.href = "about.html";

});
$("#rent").on("click", function(){
    window.location.href = "rent.html";

});
$("#signup").on("click", function(){
    window.location.href = "signin.html";

});

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
                    var address;
                    info = petfinder.pet.description['$t'];
                    pic = petfinder.pet.media.photos.photo[2].$t;
                    name = petfinder.pet.name.$t;
                    gender = petfinder.pet.sex.$t;
                    city = petfinder.pet.contact.city.$t;
                    state = petfinder.pet.contact.state.$t;
                    zipcode = petfinder.pet.contact.zip.$t;
                    address = petfinder.pet.contact.address1.$t;
                    if (gender == 'M'){
                        gender = 'Male';
                    }
                    else if (gender == 'F'){
                        gender = 'Female';
                    }
                    if (address === null){
                        address = '';
                        $('#map').html('<iframe width="100%" height="430px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q='+city+'%2C%20'+state+'+'+zipcode+'&key=AIzaSyCqhvq2DjBtN4xdBzPeVgy6q2NDdzssL3I" allowfullscreen></iframe>');
                    }
                    else{
                        address = petfinder.pet.contact.address1.$t;
                        $('#map').html('<iframe width="100%" height="430px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q='+address+'%2C%20'+city+'%2C%20'+state+'+'+zipcode+'&key=AIzaSyCqhvq2DjBtN4xdBzPeVgy6q2NDdzssL3I" allowfullscreen></iframe>');
                    }
                    if(info === null){
                        info = 'No information available.';
                        $('#petInfo').html(info);
                    }
                    else{
                        $('#petInfo').html(info);
                    }
                    image.attr('src', pic);
                    image.addClass('searchImage');
                    image.addClass('card-img-top');
                    image.attr('alt', 'Card image cap');
                    $('#petInfo').html(info);
                    $('#petName').html(name);
                    $('#petImage').html(image);
                    $('#petGender').html(gender);
                    $('#petAddress').text(address);
                    $('#location').text(city +', '+ state + ' '+zipcode);
                    console.log(address);
                    console.log(petfinder);
                },
                error : function(request,error)
                {
                    alert("Request: "+JSON.stringify(request));
                }
            });
});

    $("#pass").on("click", function() {
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
                    var address;
                    info = petfinder.pet.description['$t'];
                    pic = petfinder.pet.media.photos.photo[2].$t;
                    name = petfinder.pet.name.$t;
                    gender = petfinder.pet.sex.$t;
                    city = petfinder.pet.contact.city.$t;
                    state = petfinder.pet.contact.state.$t;
                    zipcode = petfinder.pet.contact.zip.$t;
                    address = petfinder.pet.contact.address1.$t;
                    if (gender == 'M'){
                        gender = 'Male';
                    }
                    else if (gender == 'F'){
                        gender = 'Female';
                    }
                    if (address === null){
                        address = '';
                        $('#map').html('<iframe width="100%" height="430px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q='+city+'%2C%20'+state+'+'+zipcode+'&key=AIzaSyCqhvq2DjBtN4xdBzPeVgy6q2NDdzssL3I" allowfullscreen></iframe>');
                    }
                    else{
                        address = petfinder.pet.contact.address1.$t;
                        $('#map').html('<iframe width="100%" height="430px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q='+address+'%2C%20'+city+'%2C%20'+state+'+'+zipcode+'&key=AIzaSyCqhvq2DjBtN4xdBzPeVgy6q2NDdzssL3I" allowfullscreen></iframe>');
                    }
                    if(info === null){
                        info = 'No information available.';
                        $('#petInfo').html(info);
                    }
                    else{
                        $('#petInfo').html(info);
                    }
                    image.attr('src', pic);
                    image.addClass('searchImage');
                    image.addClass('card-img-top');
                    image.attr('alt', 'Card image cap');
                    $('#petInfo').html(info);
                    $('#petName').html(name);
                    $('#petImage').html(image);
                    $('#petGender').html(gender);
                    $('#petAddress').text(address);
                    $('#location').text(city +', '+ state + ' '+zipcode);
                    console.log(address);
                    console.log(petfinder);
                },
                error : function(request,error)
                {
                    alert("Request: "+JSON.stringify(request));
                }
            });
});
});
