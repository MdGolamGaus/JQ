//JS Code first

//JQ

// Deprecated
// $(document).ready(function(){
//     $('button').click(function(){
//         alert("Welcome!!!");
//     })
// });
//Example-1
$(document).ready(function(){
    $('button').on("click",function(){
        alert("Welcome!!!");
    })
});
//Example-2
$(document).ready(function(){
    $('#d_text').on("click",function(){
        $(this).hide();
    })
});
//Example-3
$(document).ready(function(){
    $('.d_class').on("click",function(){
        $(this).hide();
    })
});
