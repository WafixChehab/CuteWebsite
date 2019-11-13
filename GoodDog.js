
window.onload=function(){
    var dogslst= [document.getElementById('Dog1'), document.getElementById('Dog2'), document.getElementById('Dog3'),document.getElementById('DogsAll')];
    var dogslnklst= [document.getElementById('Dog1Lnk'), document.getElementById('Dog2Lnk'), document.getElementById('Dog3Lnk'),document.getElementById('DogsAllLnk')];
    var woofplay = document.getElementById('subwoof');

    function hideall() {
        for(var i=0; i<3; i++)
        dogslst[i].className = "hide";
    }
    function displayImg(a, b, c){
        hideall();
        if(a == true)
        dogslst[0].className="show";
        if(b == true)
        dogslst[1].className="show";
        if(c == true)
        dogslst[2].className="show";    
    }
    //start program
    hideall();

    dogslnklst[0].addEventListener("click",function( ){displayImg(1,0,0); woofplay.play();});
    dogslnklst[1].addEventListener("click",function( ){displayImg(0,1,0); woofplay.play();});
    dogslnklst[2].addEventListener("click",function( ){displayImg(0,0,1); woofplay.play();});    
    dogslnklst[3].addEventListener("click",function( ){displayImg(1,1,1); woofplay.play();});
    

}
 