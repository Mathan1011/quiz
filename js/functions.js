var duration = 60 ;
var minutes,seconds; 
var timer = 60;
var interval;

function getElement(id) {

    return document.getElementById(id);

}

function gotoNextQuestion(){
    
    pos = pos + 1;

    // console.log(score);
   
    if(pos >= listOfQuestions.length){
        duration = 60, timer = 60;
        endQuiz();
        
    }else{
        createAQuestion();
    }  
    
}

function changeProgressBar(){
    jQuery("progressbar")
}

function addRadioListener(){

    getElement("choiceSubmit").removeAttribute("disabled");
}

function checkAnswer(){

    var checkedOption = jQuery("#questionslide input:checked").val()

    // console.log("checkedOption", checkedOption === listOfQuestions[pos]["answer"]);

    $("#questionslide input").attr('disabled', true);
    var qAns = listOfQuestions[pos]["answer"];
    qAns = qAns.trim();
    if(checkedOption === qAns){

        // jQuery("#questionslide input:checked+label").css("color", "green")
        
        jQuery("#questionslide input:checked").parent().css("background-color", "#c1d89f").css("color", "#23a216")
        jQuery('#quiz_content input[type=radio]:checked').addClass('green')
        score++;

        if (reference === "#"){
            
        }else{
            jQuery("<p>Right answer! <a href='"+reference+"' target='_blank'>Click here</a> to read why.</p>" ).fadeIn("slow")
            .appendTo( "div.referencemsg" );
        }

        

    }else{
        
        // jQuery("#questionslide input:checked+label").css("color", "red");

        jQuery("#questionslide input:checked").parent().css("background-color", "#facdbf").css("color", "#d02417")
        jQuery("#quiz_content input[type=radio]:checked").addClass('red')

        jQuery("#questionslide input").each(function(){
            
            if (jQuery(this).val() === qAns) {
               
                jQuery(this).parent().css("background-color", "#c1d89f").css("color", "#23a216")
                jQuery(this).addClass('green')
                // jQuery(this).next().css("color", "green")

            }

        });

        if (reference === "#"){
            
        }else{
            jQuery("<p>Oops!, wrong answer. <a href='"+reference+"' target='_blank'>Click here</a> to read why.</p>" ).fadeIn("slow")
            .appendTo( "div.referencemsg" );
        }

        
    }


    addRadioListener();
    
    
}

function endQuiz() {
    clearInterval(interval);

    quiz = getElement("quiz_endcover");
    endscore = getElement("score");
    noofquestions = getElement("noofquestions");
    // jQuery("#quiz_cover").addClass("hidden")
    // jQuery("#questionslide").removeClass("hidden")
    jQuery("#questionslide").addClass("hidden")
    jQuery("#quiz_endcover").removeClass("hidden")
    // if( jQuery("#initial-count .hidden") ) {
    //     jQuery("#final-one").addClass("hidden");
    // } else {
    //     jQuery("#initial-count").removeClass('show')
    //     jQuery("#final-one").removeClass("hidden");
    // }
    // if( jQuery("#initial-count .show") ) {
    //         jQuery("#final-one").removeClass("hidden");
    //     } else {
    //         jQuery("#final-one").removeClass("hidden");
    //     }
    
    endscore.innerHTML = score;
    noofquestions.innerHTML = "/"+listOfQuestions.length;

   if(score < 5) {
    // jQuery("#newModalContent").append("<h4>Next Time! </h4>")
    jQuery("#initial-count").html("<h4>Better Luck Next Time!</h4>")
   } else if( score >= 5 && score < 7) {
    // jQuery("#newModalContent").html("<h4>So Close!</h4>")
    jQuery("#initial-count").html("<h4>So Close! </h4>")
   } else if( score >= 7 && score < 10) {
    // jQuery("#newModalContent").html("<h4>Amazing! </h4> ")
    jQuery("#initial-count").html("<h4>Amazing!</h4><p> You're almost there</p>")
   } else if( score === 10) {
    // jQuery("#newModalContent").html("<h4>Astounding!</h4><p> You're the Wizard of Quiz World!</p>")
    jQuery("#initial-count").html("<h4>Astounding!</h4><p> You're the Wizard of Quiz World!</p>")
   }

} 

function createAQuestion() {

    quiz = getElement("quiz_content");
    quiz_status = getElement("quizstatus")
    quiz.innerHTML = "";

    jQuery("#choiceSubmit").attr("disabled","disabled");
    

    question = listOfQuestions[pos]["questions"];
    description = listOfQuestions[pos]["description"];
    leadVisual = listOfQuestions[pos]["leadvisual"];
    choiceA = listOfQuestions[pos]["choiceone"];
    choiceB = listOfQuestions[pos]["choicetwo"];
    choiceC = listOfQuestions[pos]["choicethree"];
    choiceD = listOfQuestions[pos]["choicefour"];
    reference = listOfQuestions[pos]["reference"];

    quiz_status.innerHTML = "<span>Q"+(pos+1)+"</span> of "+listOfQuestions.length;

    
    if ($(window).width() > 767)  {
        quiz.innerHTML += "<div class='row clearfixsol'><img class='fade-in' src='" + leadVisual + "' /><h3>"+question+"</h3></div>"
        quiz.innerHTML += "<div class='row clearfixsol'><div class='col'> <div class= 'ip-container'><input onclick='checkAnswer()' type='radio' name='choices' value='A' id='choA'> <label for='choA'>" + choiceA + " </label></div><br> <div class= 'ip-container'><input onclick='checkAnswer()' type='radio' name='choices' value='B' id='choB'><label for='choB'> " + choiceB + "</label></div><br><div class= 'ip-container'><input onclick='checkAnswer()' type='radio' name='choices' value='C' id='choC'><label for='choC'> " + choiceC + "</label> </div> <br> <div class='ip-container'>  <input onclick='checkAnswer()' type='radio' name='choices' value='D' id='choD'> <label for='choD'>" + choiceD + "</label></div><div class='referencemsg'></div></div></div>";
    } else {
        quiz.innerHTML += "<div class='row clearfixsol'><img class='fade-in' src='" + leadVisual + "' /><div class='col col1 quizcounter'></div><h3>"+question+"</h3></div>"
        quiz.innerHTML += "<div class='row clearfixsol'> <div class='col col2'> <div class= 'ip-container'><input onclick='checkAnswer()' type='radio' name='choices' value='A' id='choA'> <label for='choA'>" + choiceA + " </label></div><br> <div class= 'ip-container'><input onclick='checkAnswer()' type='radio' name='choices' value='B' id='choB'><label for='choB'> " + choiceB + "</label></div><br><div class= 'ip-container'><input onclick='checkAnswer()' type='radio' name='choices' value='C' id='choC'><label for='choC'> " + choiceC + "</label> </div> <br> <div class='ip-container'>  <input onclick='checkAnswer()' type='radio' name='choices' value='D' id='choD'> <label for='choD'>" + choiceD + "</label></div><div class='referencemsg'></div></div></div>";
    }
    
 
    // quiz.innerHTML += "<div class='row clearfixsol'><div class='col col1'> <p>Points</p> <p><span>"+score+"</span>/"+listOfQuestions.length+"</p> </div> <div class='col col2'> <input onclick='checkAnswer()' type='radio' name='choices' value='A'> <label for='choA'>" + choiceA + "</label><br> <input onclick='checkAnswer()' type='radio' name='choices' value='B'> <label for='choB'>" + choiceB + "</label><br> <input onclick='checkAnswer()' type='radio' name='choices' value='C'> <label for='choC'>" + choiceC + "</label><br> <input onclick='checkAnswer()' type='radio' name='choices' value='D'> <label for='choC'>" + choiceD + "</label><br> <div class='referencemsg'></div></div></div>";

    // quiz.innerHTML += "<div class='row clearfixsol footer'><p class='pull-left width50'>Q"+(pos+1)+" of "+listOfQuestions.length+"</p><button onclick='gotoNextQuestion()' class='pull-right width50 next fade-in' disabled='disabled' id='choiceSubmit'>Next &raquo;</button> </div>";
    

    var calcProgress = ((pos+1) / listOfQuestions.length) * 100;

    // console.log("calcProgress", calcProgress);

    jQuery(".progressbarfull").css("width", calcProgress+"%");

    
} // end createAQuestion()





