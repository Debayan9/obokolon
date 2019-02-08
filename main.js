$(document).ready(function(){
    $("#Layer1").hide();
    $("#Layer2").hide();
    var d2 ='x' ;
    $("#Button1").click(function(){
        $("#Layer1").show();
        $("#Layer2").show();
        var dd=$("#TextArea1").val();
          //var dd="ab c_aa_ _a a k";
        var d1=String(dd.toLowerCase());
       var replaceChars={"⁰":"^0","¹":"^1","²":"^2","³":"^3","⁴":"^4","⁵":"^5","⁶":"^6","⁷":"^7","⁸":"^8","⁹":"^9","⁺":"+","⁻":"_","⁽":"(","⁾":")","√x":"sqrt(x)"};
       var d1=d1.replace(/⁰|¹|²|³|⁴|⁵|⁶|⁷|⁸|⁹|⁺|⁻|⁽|⁾|√x/g,function(match){return replaceChars[match];});
        $("#Layer1").html("`y= ` "+"`"+d1+"`");
       MathJax.Hub.Queue(['Typeset',MathJax.Hub,'#Layer1']);
        var d3= math.derivative(d1,d2);
       // $("#Layer1").html('<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=AM_HTMLorMML-full"></script> <p>`x^3` yes</p> ');
       //alert("`x^6`");
       //$("p").html(`x^5`);
      // $("p").html("`x^4/3`");
       $("#Layer2").html("`(dy)/(dx)= `"+"`"+String(d3)+"`");
       MathJax.Hub.Queue(['Typeset',MathJax.Hub,'#Layer2']);

    });
});
