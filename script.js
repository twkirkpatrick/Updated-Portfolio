$(document).ready(function(){

    populateMain();

    function populateMain(){
        $(".navbar").addClass("hide");
        $(".container").empty().hide().append(
            "<div class='row main-row animate__animated animate__fadeInDown animate__delay-1s'><div class='col-12 text-center header'><h1>Hi, I'm Tanner.</h1><h4>I have a passion for creating intuitive user interfaces across a number of new and evolving platforms.</h4><button type='button' class='btn btn-dark about'>About Me</button><button type='button' class='btn btn-dark portfolio'>View My Work</button><button type='button' class='btn btn-dark contact' data-toggle='modal' data-target='#exampleModal'>Get In Touch</button></div></div>"
        ).fadeIn(1400);
    }

   function populateAbout(){
    
    $(".container").empty().hide().append(
        
            "<div class='row'>" +
                "<div class='col-sm-8 offset-sm-2 img-col'>" + 
                "<img src = 'images/twk.jpg' class='about-img'>" +
                    "<div class='row'>" +
                        "<div class='col-sm-12'>" +
                        "<i class='fab fa-html5 html left-icon divide-left'></i>" +
                        "<i class='fab fa-css3-alt html'></i>" +
                        "<i class='fab fa-js html'></i>" +
                        "<i class='fab fa-react html'></i>" +
                        "<i class='fab fa-node-js html right-icon divide'></i>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='row'>" +
                "<div class='col-sm-8 offset-sm-2 text-center about-page'>" +
                    "<p class='info'>I am a Full Stack Software Developer based out of Richmond, VA.  When I am not adventuring outdoors, I am building fully functional web-based applications across several platforms.   I enjoy tackling complex problems that require the utilization of new and evolving technologies in order to create intuitive user interfaces for my clients. My true passion lies in the implementation of appealing design, but I am more than capable of handling everything from the Front End to the Back End.</p>" +
                "</div>" +
            "</div>" 
             
        
        
       
    ).fadeIn(1400);

    
        $(".navbar").removeClass("hide");
   }

  

   function populatePortfolio(){
        $(".container").empty().hide().append(
            
                "<div class='row'>" +
                    "<div class='col-sm-4 card-style' id='item1'>" +
                        "<div class='card'>" +
                            "<img src='images/burger.png' class='card-img-top' alt='picture of burger application'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>BurgerBase</h5>" +
                                "<p class='card-text'>An application used to log your favorite burgers. Submit new burgers and devour them! Built with Node.js, Express, MySQL, Handlebars, and a custom ORM. </p>" + 
                                "<a target='_blank' href='https://github.com/twkirkpatrick/BurgerBase' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://warm-atoll-97032.herokuapp.com/' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-sm-4 card-style' id='item2'>" +
                        "<div class='card'>" +
                            "<img src='images/clear-sky.png' class='card-img-top' alt='picture of weather application'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>Clear Sky Weather Dashboard</h5>" +
                                 "<p class='card-text'>A weather dashboard application that enables the user to retrieve the current weather and 5-day forecast for cities across the United States.</p>" +  
                                "<a target='_blank' href='https://github.com/twkirkpatrick/Clear-Sky-Weather-Dashboard' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://twkirkpatrick.github.io/Clear-Sky-Weather-Dashboard' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-sm-4 card-style' id='item3'>" +
                        "<div class='card'>" +
                            "<img src='images/myday.png' class='card-img-top' alt='picture of planner application'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>myDay Planner</h5>" +
                                "<p class='card-text'>A simple daily planner application that helps you plan your upcoming work day by saving information to timeblocks.</p>" + 
                                "<a target='_blank' href='https://github.com/twkirkpatrick/myDay' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://twkirkpatrick.github.io/myDay' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class='row'>" +
                    "<div class='col-sm-4 card-style' id='item4'>" +
                        "<div class='card'>" +
                            "<img src='images/code-quiz.png' class='card-img-top' alt='picture of code quiz'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>JavaScript Code Quiz</h5>" +
                                "<p class='card-text'>A timed code quiz application that allows users to test their JavaScript skills and save their scores to local storage.</p>" + 
                                "<a target='_blank' href='https://github.com/twkirkpatrick/Code-Quiz' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://twkirkpatrick.github.io/Code-Quiz' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-sm-4 card-style' id='item5'>" +
                        "<div class='card'>" +
                            "<img src='images/password-generator.png' class='card-img-top' alt='picture of password generator'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>Password Generator</h5>" +
                                "<p class='card-text'>A password generator that creates a customized password based on several criteria chosen by the user.</p>" + 
                                "<a target='_blank' href='https://github.com/twkirkpatrick/Password-Generator' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://twkirkpatrick.github.io/Password-Generator' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-sm-4 card-style' id='item1'>" +
                        "<div class='card'>" +
                            "<img src='images/pitch2.png' class='card-img-top' alt='picture of pitch application'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>Pitch</h5>" +
                                "<p class='card-text'>An application that helps you navigate the world of music by displaying general information, tour dates, and YouTube videos for hundreds of musical artists. </p>" + 
                                "<a target='_blank' href='https://github.com/twkirkpatrick/deep-cuts' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://lucsedirae.github.io/deep-cuts' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +  
                "</div>" 
            
            
        ).fadeIn(1400);

        /* const cards = $("div[id^='item']"); */
        /* const cards = $(".card-style");

        cards.on("mouseenter", function(){
            cards.not($(this)).css("filter", "blur(5px)");
        }).on("mouseleave", function(){
            cards.css("filter", "blur(0px)");
        }); */
    
    }

    $(".nav-work").on("click", function(){
        $(".about-page").hide();
        $(".header").hide();
        populatePortfolio();
    })

    $(".nav-about").on("click", function(){
        $(".header").hide();
        populateAbout();
    })

    $(".nav-home").on("click", function(){
        $(".about-page").hide();
        $(".header").hide();
        $(".portfolio-page").hide();

        populateMain();
    })
   
    
    $(document).on("click", ".about", function(){
        $(".navbar").removeClass("hide").hide().fadeIn(1400);
        populateAbout();
    })

    $(document).on("click", ".portfolio", function(){
        $(".navbar").removeClass("hide").hide().fadeIn(1400);
        populatePortfolio();
    })

    

})