
$(document).ready(function(){

    
   
   

    $(window).on('hashchange', function(e){
        
        console.log( 'hash changed' ); //cek perubahan hash

        var curpath = window.location.hash; //bind dulu boy
    
        console.log(curpath) //cek di console

        if(curpath == '#!/content'){
            $(".nav-link").removeClass("shiro");
            $(".nav-link").addClass("greenboy");
        }
        if(curpath == '#!/' || curpath == '#!/about'){
            $(".nav-link").removeClass("greenboy");
            $(".nav-link").addClass("shiro");
        }

       })
})

$(window).on( "load", function() {
     $("body").removeClass("preload");
     })