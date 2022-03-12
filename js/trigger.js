var pos = 0, quiz, quiz_title, quiz_desc, quiz_status, question, description, leadVisual, choiceA, choiceB, choiceC, choiceD, reference, score = 0;
        jQuery(".quiz_headline").html(quiz_title);
        jQuery(".quiz_description").html(quiz_desc);
        jQuery(".quiz_leadimg").attr("src", quiz_image);
        
        

        jQuery("#quiz_cover .startBtn").on("click", function(e){
            jQuery("#quiz_cover").addClass("hidden")
            jQuery("#questionslide").removeClass("hidden")
            createAQuestion()
            

            var timer = duration, minutes, seconds;
            interval = setInterval(function() {                            
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                
                if (--timer < 0) {
                    clearInterval(interval)
                    $("#timeModal").modal();
                    endQuiz();
                }
                $('#timer').text(minutes + ":" + seconds);

            }, 1000);
        });
        
        jQuery("#quiz_endcover .retakeBtn").on("click", function(e){
            pos = 0;
            score = 0;
            jQuery("#quiz_endcover").addClass("hidden")
            jQuery("#questionslide").removeClass("hidden")
           
            createAQuestion();

            timer = duration, minutes, seconds;
            interval = setInterval(function() {                            
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                
                if (--timer < 0) {
                    clearInterval(interval)
                    $("#timeModal").modal();
                    endQuiz();
                }
                $('#timer').text(minutes + ":" + seconds);

            }, 1000);
        });

        jQuery("#timeModal .retakeBtn").on("click", function(e){
            pos = 0;
            score = 0;
            jQuery("#quiz_endcover").addClass("hidden")
            jQuery("#questionslide").removeClass("hidden")
            createAQuestion();
            jQuery("#timeModal").modal('hide')
            
            timer = duration, minutes, seconds;
            interval = setInterval(function() {                            
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                
                if (--timer < 0) {
                    clearInterval(interval)
                    $("#timeModal").modal();
                    endQuiz();
                }
                $('#timer').text(minutes + ":" + seconds);

            }, 1000);
        });
        
        