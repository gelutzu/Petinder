$(document).ready(function(){
            var url = "https://api.petfinder.com/pet.getRandom?key=e3c9b6bee87f4314a2b6cd95e68fda76&shelterid=KY305&output=full&format=json";
            $.ajax({
                type : 'GET',
                data : {},
                url : url+'&callback=?' ,
                dataType: 'json',
                success : function(data) {              
                    // stores result
                    var result = '';
                    var petfinder = data.petfinder;
                    var info;
                    var pic;
                    var image = $('<img>');
                    var name;
                    var gender;
                    info = petfinder.pet.description['$t'];
                    pic = petfinder.pet.media.photos.photo[2].$t;
                    name = petfinder.pet.name.$t;
                    gender = petfinder.pet.sex.$t;
                    if (gender == 'M'){
                        gender = 'Male';
                    }
                    else if (gender == 'F'){
                        gender = 'Female';
                    }
                    image.attr('src', pic);
                    // return infoHTML;
                    $('#petInfo').html(info);
                    $('#petName').html(name);
                    $('#petImage').html(image);
                    $('#petGender').html(gender);
                    console.log(gender);
                    console.log(petfinder);
                },
                error : function(request,error)
                {
                    alert("Request: "+JSON.stringify(request));
                }
            });
});