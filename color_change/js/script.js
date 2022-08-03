function colorChange(){
    document.body.setAttribute(
        "style", " font-style: italic;padding-top: 190px;");
        document.getElementById("txt").innerHTML="Hello !!!";

        var index = Math.floor(Math.random() * 9 );
        if(index == 1)
        ColorValue = "FFCCCC"; 
        if(index == 2)
        ColorValue = "CCAFFF"; 
        if(index == 3)
        ColorValue = "A6BEFF"; 
        if(index == 4)
        ColorValue = "99FFFF"; 
        if(index == 5)
        ColorValue = "D5CCBB"; 
        if(index == 6)
        ColorValue = "99FF99"; 
        if(index == 7)
        ColorValue = "FFFF99"; 
        if(index == 8)
        ColorValue = "FFCC99"; 
        if(index == 9)
        ColorValue = "CCCCCC";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
 
    }



    //     function colorChange(){
    //         document.body.setAttribute(
    //         "style", " font-style: italic;padding-top: 190px;");
    //         document.getElementById("txt").innerHTML="Hello !!!";
    
    //     var index = ["blue","yellow","red"]
    //     document.body.style.backgroundColor = index[Math.floor(Math.random() * 3)];
    // }


     

    // function colorChange(){
    //     document.body.setAttribute(
    //     "style", " font-style: italic;padding-top: 190px;");
    //     document.getElementById("txt").innerHTML="Hello !!!";
    //     window.setTimeout("colorChange()", 2000);
    //     var index = ["blue","yellow","red"]
    //     document.body.style.backgroundColor = index[Math.floor(Math.random() * 3)];
    // }
    