$(document).ready(function(){
	
	var arr=["","","","","","","","",""];
	
	var userSymb="X";
	var compSymb="O";

	$("#0").on("click",{param:0},userTurn);
	$("#1").on("click",{param:1},userTurn);
	$("#2").on("click",{param:2},userTurn);
	$("#3").on("click",{param:3},userTurn);
	$("#4").on("click",{param:4},userTurn);
	$("#5").on("click",{param:5},userTurn);
	$("#6").on("click",{param:6},userTurn);
	$("#7").on("click",{param:7},userTurn);
	$("#8").on("click",{param:8},userTurn);
	
	function userTurn(event){
		
		if($("#"+event.data.param).text().search(/XO/)===-1){
		$("#"+event.data.param).html(userSymb);
		arr[event.data.param]=userSymb;
		compTurn();
		
	    }
	}

	function checkGame(){
		
		if( (arr[0]==userSymb && arr[1]==userSymb && arr[2]!==compSymb) )
			return 2;
		if((arr[1]==userSymb && arr[2]==userSymb && arr[0]!==compSymb))
			return 0;
		if((arr[2]==userSymb && arr[0]==userSymb && arr[1]!==compSymb) )
			return 1;

		if( (arr[3]==userSymb && arr[4]==userSymb && arr[5]!==compSymb) )
			return 5;
		if((arr[4]==userSymb && arr[5]==userSymb && arr[3]!==compSymb))
			return 3;
		if((arr[3]==userSymb && arr[5]==userSymb && arr[4]!==compSymb) )
			return 4;

		if( (arr[6]==userSymb && arr[7]==userSymb && arr[8]!==compSymb) )
			return 8;
		if((arr[7]==userSymb && arr[8]==userSymb && arr[6]!==compSymb))
			return 6;
		if((arr[6]==userSymb && arr[8]==userSymb  && arr[7]!==compSymb) )
			return 7;

		if( (arr[0]==userSymb && arr[3]==userSymb && arr[6]!==compSymb) )
			return 6;
		if((arr[3]==userSymb && arr[6]==userSymb && arr[0]!==compSymb))
			return 0;
		if((arr[0]==userSymb && arr[6]==userSymb && arr[3]!==compSymb) )
			return 3;

		if( (arr[1]==userSymb && arr[4]==userSymb && arr[7]!==compSymb) )
			return 7;
		if((arr[4]==userSymb && arr[7]==userSymb && arr[1]!==compSymb))
			return 1;
		if((arr[1]==userSymb && arr[7]==userSymb && arr[4]!==compSymb) )
			return 4;

		if( (arr[2]==userSymb && arr[5]==userSymb && arr[8]!==compSymb) )
			return 8;
		if((arr[5]==userSymb && arr[8]==userSymb && arr[2]!==compSymb))
			return 2;
		if((arr[2]==userSymb && arr[8]==userSymb && arr[5]!==compSymb) )
			return 5;

		if( (arr[0]==userSymb && arr[4]==userSymb && arr[8]!==compSymb) )
			return 8;
		if((arr[4]==userSymb && arr[8]==userSymb && arr[0]!==compSymb))
			return 0;
		if((arr[0]==userSymb && arr[8]==userSymb && arr[4]!==compSymb) )
			return 4;

		if( (arr[2]==userSymb && arr[4]==userSymb && arr[6]!==compSymb) )
			return 6;
		if((arr[4]==userSymb && arr[6]==userSymb && arr[2]!==compSymb))
			return 2;
		if((arr[2]==userSymb && arr[6]==userSymb && arr[4]!==compSymb) )
			return 4;

        return -1;

    }

	function compTurn(){
		var ch=checkGame();
		if(ch!==-1)
		{
			$("#"+ch).html(compSymb);
			arr[ch]=compSymb;
		}
		else
		{
			var k= arr.join('').split('X').length-1;

            if(k === 1 )
            {
            	$("#4").html(compSymb);
            	arr[4]=compSymb;
            }
            else if(k === 2)
            {

            }
		}
	}

	
});