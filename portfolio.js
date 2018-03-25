// test
console.log('connected!');
// toggle menu - burger for small devices
var open = false;
$(document).ready(function(){
    $("#burgerSlices").click(function(){
        $(".menuFromBurger").toggleClass("open");
        open = true;
    });
});
$(document).ready(function(){
    $(".menuItem").click(function(){
        $(".menuFromBurger").toggleClass("open");
        $("#burgerSlices").prop("checked", false);
        open = false;
    });
});
// lighten up 
$(function(){
    $("figure").on({mouseenter: function(){
      $(this).attr("src","images/lamp2.png");
    }
    });
});
// // answer to about me quiz
$(document).ready(function(){
    $(".fend").click(function(){
        $(".answerBox").html("Yes, you're right, but soon, very soon...");
    });
});
$(document).ready(function(){
    $(".fun").click(function(){
        $(".answerBox").html("Maybe sometimes, but I'm deadly serious about my work ;)");
    });
});
$(document).ready(function(){
    $(".textile").click(function(){
        $(".answerBox").html("");
    });
});
$(document).ready(function(){
    $(".choco").click(function(){
        $(".answerBox").html("I do, but I accept also cookies");
    });
});
$(document).ready(function(){
    $(".health").click(function(){
        $(".answerBox").html("... and I'm interested in collaboration in projects from this branch");
    });
});
$(document).ready(function(){
    $(".gdansk").click(function(){
        $(".answerBox").html("... and I highly recommend Gdansk for a visit! It's great city.");
    });
});
$(document).ready(function(){
    $(".ride").click(function(){
        $(".answerBox").html("Not exactly, but I can keep balance for a while!");
    });
});
// function  
// mail me button change
$(document).ready(function(){
    $(".mail").click(function(){
        $(this).html("ig@mail.com");
    });
});

