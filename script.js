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
                "<div class='col-sm-8 offset-sm-2 img-col about-page'>" + 
                "<img src = 'images/twk.jpg' class='about-img'>" +
                    "<div class='row'>" +
                        "<div class='col divide-left'>" +
                        "<i class='fab fa-html5 html'></i>" +
                        "</div>" +
                        "<div class='col'>" +
                        "<i class='fab fa-css3-alt html'></i>" +
                        "</div>" +
                        "<div class='col'>" +
                        "<i class='fab fa-js html'></i>" +
                        "</div>" +
                        "<div class='col'>" +
                        "<i class='fab fa-react html'></i>" +
                        "</div>" +
                        "<div class='col divide'>" +
                        "<i class='fab fa-node-js html'></i>" +
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

   function populatePortfolio(){
        $("body").hide().append(
            "<div class='container'>" +
                "<div class='row'>" +
                    "<div class='col-sm-4 card-style'>" +
                        "<div class='card'>" +
                            "<img src='images/pitch2.png' class='card-img-top' alt='picture of pitch application'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>Pitch</h5>" +
                                /* "<p class='card-text'>An application that lets you save musical artists locally and presents a listening guide to help explore their music</p>" + */ 
                                "<a target='_blank' href='https://github.com/twkirkpatrick/deep-cuts' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://lucsedirae.github.io/deep-cuts' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-sm-4 card-style'>" +
                        "<div class='card'>" +
                            "<img src='images/clear-sky.png' class='card-img-top' alt='picture of weather application'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>Clear Sky Weather Dashboard</h5>" +
                                /* "<p class='card-text'>A weather dashboard application that enables the user to retrieve the current weather as well as the 5-day forecast</p>" + */ 
                                "<a target='_blank' href='https://github.com/twkirkpatrick/Clear-Sky-Weather-Dashboard' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://twkirkpatrick.github.io/Clear-Sky-Weather-Dashboard' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-sm-4 card-style'>" +
                        "<div class='card'>" +
                            "<img src='images/myday.png' class='card-img-top' alt='picture of planner application'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>myDay Planner</h5>" +
                                /* "<p class='card-text'>A simple daily planner application to get all your ducks in a row for the upcoming work day<br><br></p>" +  */
                                "<a target='_blank' href='https://github.com/twkirkpatrick/myDay' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://twkirkpatrick.github.io/myDay' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class='row'>" +
                    "<div class='col-sm-4 card-style'>" +
                        "<div class='card'>" +
                            "<img src='images/code-quiz.png' class='card-img-top' alt='picture of code quiz'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>JavaScript Code Quiz</h5>" +
                                /* "<p class='card-text'>A simple daily planner application to get all your ducks in a row for the upcoming work day<br><br></p>" +  */
                                "<a target='_blank' href='https://github.com/twkirkpatrick/Code-Quiz' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://twkirkpatrick.github.io/Code-Quiz' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-sm-4 card-style'>" +
                        "<div class='card'>" +
                            "<img src='images/password-generator.png' class='card-img-top' alt='picture of password generator'>" +
                            "<div class='card-body text-center'>" +
                                "<h5 class='card-title'>Password Generator</h5>" +
                                /* "<p class='card-text'>A simple daily planner application to get all your ducks in a row for the upcoming work day<br><br></p>" +  */
                                "<a target='_blank' href='https://github.com/twkirkpatrick/Password-Generator' class='btn btn-dark port-btn'>Code</a>" +
                                "<a target='_blank' href='https://twkirkpatrick.github.io/Password-Generator' class='btn btn-dark port-btn'>Demo</a>" +
                            "</div>" +
                        "</div>" +
                "</div>" +
            "</div>"
        ).fadeIn(1600);
    

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

    $(document).on("click", ".portfolio", function(){
        $(".header").hide();
        $(".about-page").hide();
        populatePortfolio();
    })

    /* var portfolioItems = [

        {
            name: 'Pitch',
            description: 'Pitch is an app that lets you save musical artists locally and presents a listening guide to help explore their music',
            tools: ['HTML', 'CSS', 'Materialize', 'jQuery', 'Local Storage' ],
            img: 'images/pitch.png',
            code: 'https://github.com/twkirkpatrick/deep-cuts',
            demo: 'https://lucsedirae.github.io/deep-cuts'
            
        },
        {
            name: 'Clear Sky Weather Dashboard',
            description: 'A weather dashboard application utilizing jQuery and server-side APIs',
            tools: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'Moment.js'],
            img: 'images/clear-sky.png',
            code: 'https://github.com/twkirkpatrick/Clear-Sky-Weather-Dashboard',
            demo: 'https://twkirkpatrick.github.io/Clear-Sky-Weather-Dashboard'
        },
        {
            name: 'myDay Work Planner',
            description: 'A simple daily planner application to get all your ducks in a row for the upcoming work day.',
            tools: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'Moment.js'],
            img: 'images/myday.png',
            code: 'https://github.com/twkirkpatrick/myDay',
            demo: 'https://twkirkpatrick.github.io/myDay'
        },
        {
            name: 'JavaScript Code Quiz',
            description: 'A timed quiz application built with HTML, CSS, Bootstrap, and Vanilla JavaScript.',
            tools: ['HTML', 'CSS', 'Bootstrap', 'Vanilla JavaScript'],
            img: 'images/code-quiz.png',
            code: 'https://github.com/twkirkpatrick/Code-Quiz',
            demo: 'https://twkirkpatrick.github.io/Code-Quiz'
        },
        {
            name: 'Password Generator',
            description: 'A password generator application built with HTML, CSS, and Vanilla JavaScript.',
            tools: ['HTML', 'CSS', 'Vanilla JavaScript'],
            img: 'images/password-generator.png',
            code: 'https://github.com/twkirkpatrick/Password-Generator',
            demo: 'https://twkirkpatrick.github.io/Password-Generator'
        }

    ] */

    

    












})