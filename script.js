$(document).ready(function(){

    populateMain();

    function populateMain(){
        $(".navbar").addClass("hide");
        $(".container").empty().hide().append(
            "<div class='row main-row animate__animated animate__fadeInDown animate__delay-1s'><div class='col-12 text-center header'><h1>Hi, I'm Tanner.</h1><h4>I have a passion for creating intuitive user interfaces across a number of new and evolving platforms.</h4><button type='button' class='btn btn-dark about'>About Me</button><button type='button' class='btn btn-dark portfolio'>View My Work</button><button type='button' class='btn btn-dark contact' data-toggle='modal' data-target='#exampleModal'>Get In Touch</button><button type='button' class='btn btn-dark docs'>Articles</button></div></div>"
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
                            "<img src='images/media.png' class='card-img-top' alt='picture of weather application'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>GitWorkd</h5>" +
                                 "<p class='card-text'>A platform that promotes collaboration by allowing users to share and explore open source applications.  Built with Node, Express, Handlebars, MySQL, and GitHub OAuth.</p>" +  
                                "<a target='_blank' href='https://github.com/eaclumpkens/gitWorkd' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://gitworkd.herokuapp.com/' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-sm-4 card-style' id='item1'>" +
                        "<div class='card'>" +
                            "<img src='images/pitch2.png' class='card-img-top' alt='picture of pitch application'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>Pitch</h5>" +
                                "<p class='card-text'>An application that helps you navigate the world of music by displaying general information, tour dates, and YouTube videos for hundreds of musical artists. Utilizes BandsInTown, Youtube, and MusicBrainz APIs. </p>" + 
                                "<a target='_blank' href='https://github.com/twkirkpatrick/deep-cuts' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://lucsedirae.github.io/deep-cuts' class='btn btn-dark port-btn'>Demo</a>" +
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
                                "<p class='card-text'>A simple daily planner application that helps you plan your upcoming work day by saving information to timeblocks via local storage.</p>" + 
                                "<a target='_blank' href='https://github.com/twkirkpatrick/myDay' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://twkirkpatrick.github.io/myDay' class='btn btn-dark port-btn'>Demo</a>" +
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

    function populateDocumentation(){
        $(".container").empty().hide().append(
            "<div class='row'>" +
                "<div class='col-md-6 mx-auto mt-5 text-center'>" +
                     "<p>One of the most important aspects of being a programmer is being able to explain the technicalities of your code. Here are a few articles I've written and posted to dev.to.</p>" +
                "</div>" +
            "</div>" + 
            "<div class='row'>" +
                "<div class='col-sm-6 mx-auto dev-row mt-4 mb-3 text-center'>" +
                    "<p>7 Oct 2020</p>" +
                    "<i class='fab fa-dev dev-icon mr-2'></i>" +
                    "<a href='https://dev.to/twkirkpatrick/how-i-felt-entering-bootcamp-vs-how-i-feel-after-2-months-220i' class='article' target='_blank'>How I felt entering bootcamp vs. how I feel after 2 months</a>" +
                "</div>" +
            "</div>" +
            "<div class='row'>" +
                "<div class='col-sm-6 mx-auto dev-row mt-2 text-center'>" +
                    "<p>14 Nov 2020</p>" +
                    "<i class='fab fa-dev dev-icon mr-2'></i>" +
                    "<a href='https://dev.to/twkirkpatrick/var-let-and-const-what-s-the-difference-2524' class='article' target='_blank'>Var, Let, and Const...What's The Difference?</a>" +
                "</div>" +
            "</div>"
        ).fadeIn(1400);
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

    $(".nav-doc").on("click", function(){
        $(".about-page").hide();
        $(".header").hide();
        $(".portfolio-page").hide();

        populateDocumentation();
    })

   
    
    $(document).on("click", ".about", function(){
        $(".navbar").removeClass("hide").hide().fadeIn(1400);
        populateAbout();
    })

    $(document).on("click", ".portfolio", function(){
        $(".navbar").removeClass("hide").hide().fadeIn(1400);
        populatePortfolio();
    })

    $(document).on("click", ".docs", function(){
        $(".navbar").removeClass("hide").hide().fadeIn(1400);
        populateDocumentation();
    })

    

})