$(document).ready(function(){

    populateMain();

    function populateMain(){
        $("body").hide().append(
            "<div class = 'container'><div class='row'><div class='col-8 offset-2 text-center header'><h1>Hi, I'm Tanner.</h1><h4>I have a passion for creating intuitive user interfaces across a number of new and evolving platforms.</h4><button type='button' class='btn btn-dark about'>About Me</button><button type='button' class='btn btn-dark portfolio'>View My Work</button><button type='button' class='btn btn-dark contact'>Get In Touch</button></div></div></div>"
        ).fadeIn(1600);
    }

   function populateAbout(){

    $("body").hide().append(
        "<div class='container'>" +
            "<div class='row'>" +
                "<div class='col-sm-6 offset-sm-3 img-col about-page'>" + 
                "<img src = 'images/twk.jpg' class='about-img'>" +
                    "<div class='row'>" +
                        "<div class='col divide-left'>" +
                        "<i class='fab fa-html5 html'></i>" +
                        "</div>" +
                        "<div class='col'>" +
                        "<i class='fab fa-css3-alt html'></i>" +
                        "</div>" +
                        "<div class='col divide'>" +
                        "<i class='fab fa-js html'></i>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='row'>" +
                "<div class='col-sm-8 offset-sm-2 text-center about-page'>" +
                    "<p class='info'>I am a Full Stack Software Developer based out of Richmond, VA.  When I am not adventuring outdoors, I am developing fully functional web-based applications across several platforms.   I enjoy tackling complex problems that require the utilization of new and evolving technologies in order to create intuitive user interfaces for my clients. My true passion lies in the implementation of appealing design, but I am more than capable of handling everything from the Front End to the Back End.</p>" +
                    "<button type='button' class='btn btn-dark home'>Home</button>" +
                    "<button type='button' class='btn btn-dark portfolio'>View My Work</button>" +
                    "<button type='button' class='btn btn-dark contact'>Get In Touch</button>" +
                "</div>" +
            "</div>" +
             
        "</div>"
        
       
    ).fadeIn(1600);

   }

   function populateContact(){
        $(".contact-page").fadeIn(1600);
   }

   
    

    $(document).on("click", ".contact", function(){
        $(".about-page").hide();
        $(".header").hide();
        populateContact();
    })

    $(document).on("click", ".home", function(){
        $(".about-page").hide();
        populateMain();
    })

    $(document).on("click", ".about", function(){
        $(".header").hide();

        populateAbout();
    })

    












})