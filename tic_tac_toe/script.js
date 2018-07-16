$(document).ready(function(){
var turn = 0 ; var arr= []; var id; var filled1=[];var  filled2=[];

$(".main div").click(function(){
id=$(this).attr("data-section"); // eg, id = "1"
   if(!arr[id])  // if that division is empty ! for reversing filled
   {
if(turn%2==0)
{$(this).addClass("circle");
turn+=1;arr[id]="o";
filled1[id]=parseInt(id) ;

    }
else
{$(this).addClass("cross");
turn+=1;
 arr[id]="x";

filled2[id]=parseInt(id) ;}

if(checkCompletion1() )
{$(".body").append("<div class=\"Over\"><h2>Player One Wins!!</h2></div>" );
   $(".Over").append("<div><p>Reload Game</p></div>");}

 else if(checkCompletion2())
{$(".body").append("<div class=\"Over\"><h2>Player Two Wins!!</h2></div>") ;
$(".Over").append("<div><p>Reload Game</p></div>");}

if(turn==9)
{$(".body").append("<div class=\"Over\"><h2>Match Draw!!</h2></div>") ;
$(".Over").append("<div><p>Reload Game</p></div>");}



   }

});


  function checkCompletion1()
 { if(filled1.includes(1)&&filled1.includes(2)&&filled1.includes(3))return true;//1 for 1,2,3
  else if(filled1.includes(4)&&filled1.includes(5)&&filled1.includes(6)){return true;} //2 for 4,5,6
else if(filled1.includes(7)&&filled1.includes(8)&&filled1.includes(9))return true; //3 for 7,8,9
else if(filled1.includes(1)&&filled1.includes(4)&&filled1.includes(7))return true;//4 for 1,4,7
else if(filled1.includes(2)&&filled1.includes(5)&&filled1.includes(8))return true; //5 for 2,5,8
else if(filled1.includes(3)&&filled1.includes(6)&&filled1.includes(9))return true; //6 for 3,6,9
else if(filled1.includes(1)&&filled1.includes(5)&&filled1.includes(9))return true; //7 for 1,5,9
else if(filled1.includes(3)&&filled1.includes(5)&&filled1.includes(7))return true;  //8 for 3,5,7
else return false;
}
    function checkCompletion2()
 { if(filled2.includes(1)&&filled2.includes(2)&&filled2.includes(3))return true; //1 for 1,2,3
  else if(filled2.includes(4)&&filled2.includes(5)&&filled2.includes(6))return true; //2 for 4,5,6
else if(filled2.includes(7)&&filled2.includes(8)&&filled2.includes(9))return true; //3 for 7,8,9
else if(filled2.includes(1)&&filled2.includes(4)&&filled2.includes(7))return true;//4 for 1,4,7
else if(filled2.includes(2)&&filled2.includes(5)&&filled2.includes(8))return true; //5 for 2,5,8
else if(filled2.includes(3)&&filled2.includes(6)&&filled2.includes(9))return true; //6 for 3,6,9
else if(filled2.includes(1)&&filled2.includes(5)&&filled2.includes(9))return true; //7 for 1,5,9
else if(filled2.includes(3)&&filled2.includes(5)&&filled2.includes(7))return true;  //8 for 3,5,7
else return false;
}

$(".Over p").click(function(){
  console.log("called");
 turn=0; $(".main div").removeClass("circle");
 $(".main div").removeClass("cross");
 id=-1; filled1=[];filled2=[];arr=[];
});


});
