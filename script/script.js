$(document).ready(function(){
	

	var arr=["","","","","","","","",""];
	
	var userSymb;
	var compSymb;
	$("#selectX").on("click",function(){
		$("#symbSelect").fadeOut(1000,function(){$("#playBox").fadeIn(1000);
		userSymb="X";
		compSymb="O";
	});
	});
	$("#selectO").click(function(){
		userSymb="O";
		compSymb="X";
		$("#symbSelect").fadeOut(1000,function(){
			$("#playBox").fadeIn(1000);
			
	});
		
		//console.log(1);
	});
	function setCompSymb(index){
		if(compSymb==="X")
			$("#"+index).css("color","#d80000");
		else
			$("#"+index).css("color","#00ff40");
		$("#"+index).html(compSymb);
		arr[index]=compSymb;
	}
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
		
		if($("#"+event.data.param).text().search(/[XO]/)===-1){
			if(userSymb==='X')
				$("#"+event.data.param).css("color","#d80000");
			else
				$("#"+event.data.param).css("color","#00ff40");
			$("#"+event.data.param).html(userSymb);
			arr[event.data.param]=userSymb;
			var e=checkUserEndGame(userSymb);
			if(e===1)
				endGame(userSymb);
			else
		    compTurn();
		
	    }
	}

	function checkCompGame(){
            return checkGame(compSymb,userSymb);
	}
	function checkUserGame(){
			return checkGame(userSymb,compSymb);
	}
	function checkUserEndGame(symb1){
		if((arr[0]==symb1 && arr[1]==symb1 && arr[2]==symb1))
			return 1;
		else if( (arr[3]==symb1 && arr[4]==symb1 && arr[5]==symb1))
			return 1;
		else if( (arr[6]==symb1 && arr[7]==symb1 && arr[8]==symb1))
			return 1;
		else if( (arr[0]==symb1 && arr[3]==symb1 && arr[6]==symb1))
			return 1;
		else if( (arr[1]==symb1 && arr[4]==symb1 && arr[7]==symb1))
			return 1;
		else if( (arr[2]==symb1 && arr[5]==symb1 && arr[8]==symb1))
			return 1;
		else if( (arr[0]==symb1 && arr[4]==symb1 && arr[8]==symb1))
			return 1;
		else if( (arr[2]==symb1 && arr[4]==symb1 && arr[6]==symb1))
			return 1;
		else
			return 0;


	}
	function checkGame(symb1,symb2){
		
		if((arr[0]==symb1 && arr[1]==symb1 && arr[2]!==symb2))
			return 2;
		if((arr[1]==symb1 && arr[2]==symb1 && arr[0]!==symb2))
			return 0;
		if((arr[2]==symb1 && arr[0]==symb1 && arr[1]!==symb2) )
			return 1;

		if( (arr[3]==symb1 && arr[4]==symb1 && arr[5]!==symb2) )
			return 5;
		if((arr[4]==symb1 && arr[5]==symb1 && arr[3]!==symb2))
			return 3;
		if((arr[3]==symb1 && arr[5]==symb1 && arr[4]!==symb2) )
			return 4;

		if( (arr[6]==symb1 && arr[7]==symb1 && arr[8]!==symb2) )
			return 8;
		if((arr[7]==symb1 && arr[8]==symb1 && arr[6]!==symb2))
			return 6;
		if((arr[6]==symb1 && arr[8]==symb1  && arr[7]!==symb2) )
			return 7;

		if( (arr[0]==symb1 && arr[3]==symb1 && arr[6]!==symb2) )
			return 6;
		if((arr[3]==symb1 && arr[6]==symb1 && arr[0]!==symb2))
			return 0;
		if((arr[0]==symb1 && arr[6]==symb1 && arr[3]!==symb2) )
			return 3;

		if( (arr[1]==symb1 && arr[4]==symb1 && arr[7]!==symb2) )
			return 7;
		if((arr[4]==symb1 && arr[7]==symb1 && arr[1]!==symb2))
			return 1;
		if((arr[1]==symb1 && arr[7]==symb1 && arr[4]!==symb2) )
			return 4;

		if( (arr[2]==symb1 && arr[5]==symb1 && arr[8]!==symb2) )
			return 8;
		if((arr[5]==symb1 && arr[8]==symb1 && arr[2]!==symb2))
			return 2;
		if((arr[2]==symb1 && arr[8]==symb1 && arr[5]!==symb2) )
			return 5;

		if( (arr[0]==symb1 && arr[4]==symb1 && arr[8]!==symb2) )
			return 8;
		if((arr[4]==symb1 && arr[8]==symb1 && arr[0]!==symb2))
			return 0;
		if((arr[0]==symb1 && arr[8]==symb1 && arr[4]!==symb2) )
			return 4;

		if( (arr[2]==symb1 && arr[4]==symb1 && arr[6]!==symb2) )
			return 6;
		if((arr[4]==symb1 && arr[6]==symb1 && arr[2]!==symb2))
			return 2;
		if((arr[2]==symb1 && arr[6]==symb1 && arr[4]!==symb2) )
			return 4;


        return -1;

    }
    function endGame(symb){
    	
    	$("#gameResult").hide();
    	if(symb===userSymb)
    	{

    		$("#gameResult").html('<h2 class="text-center green">Congrats!You won...');

    	}
    	else if(symb=="draw")
    	{
    		$("#gameResult").html('<h2 class="text-center blue">Game draw...');
    	}
    	else
    		$("#gameResult").html('<h2 class="text-center red">Oops!Bot wins...');

    	arr=["","","","","","","","",""];
    	$("#gameResult").fadeIn(1000);
    	
    
    	$("#gameResult").delay(1000).fadeOut(1000,function(){
    		$("#playBox").hide();
    		for(var i=0;i<=8;i++)
    		$("#"+i).html("");
    		$("#symbSelect").delay().fadeIn();
    	});
    	

    }
	function compTurn(){
		var u=checkUserGame();
		var c=checkCompGame();
		if(c>-1)
		{
			setCompSymb(c);
            endGame(compSymb);
		}
		else if(u>-1)
		{
			setCompSymb(u);
		}
			
		else
		{
			var k= arr.join('').split(userSymb).length-1;

            if(k === 1 )
            {
            	var uPos=arr.indexOf(userSymb);
            	if(uPos!==4){
            		setCompSymb(4);
            	}
            	else{
            		setCompSymb(2);
            	}
			}
            else if(k === 2)
            {
            	var uPos=[];
            	for(var i=0;i<9;i++)
            	{
            		if(arr[i]===userSymb)
            			uPos.push(i);
            	}
            	//console.log(uPos);
            	if(arr[0]==userSymb )
            	{
                	if(arr[7]==userSymb){
                		setCompSymb(3);
                	}
                	else if(arr[5]==userSymb){
                		setCompSymb(2);
                	}
                	else if(arr[8]==userSymb){
                		setCompSymb(3);
                	}
          		}
          		else if(arr[2]==userSymb){
          			if(arr[3]==userSymb)
          				setCompSymb(1);
          			else if(arr[7]==userSymb)
          				setCompSymb(3);
          			else if(arr[6]==userSymb)
          				setCompSymb(5);
          		}
          		else if(arr[6]==userSymb){
          			if(arr[1]==userSymb)
          				setCompSymb(0);
                	else if(arr[5]==userSymb)
          				setCompSymb(7);
          			else if(arr[4]==userSymb)
          				setCompSymb(0);
          		}
          		else if(arr[8]==userSymb){
          			if(arr[3]==userSymb)
          				setCompSymb(7);
          			else if(arr[0]==userSymb)
          				setCompSymb(3);
          			else if(arr[1]==userSymb)
          				setCompSymb(3);
          		}
          		else if(arr[1]==userSymb){
          			if(arr[3]==userSymb)
          				setCompSymb(0);
          			else if(arr[7]==userSymb)
          				setCompSymb(0);
          			else if(arr[5]==userSymb)
          				setCompSymb(2);
          		}
          		else if(arr[3]==userSymb){
          			if(arr[7]==userSymb)
          				setCompSymb(6);
          			else if(arr[5]==userSymb)
          				setCompSymb(0);
          			
          		}
          		else if(arr[7]==userSymb){
          			if(arr[5]==userSymb)
          				setCompSymb(8);
          		}
            	
            }
            else if(k >= 3 && k<5)
            {
            	
            	/*while(f===0){
            		var temp=Math.round(Math.random()*8);
            		if(arr[temp] !== userSymb && arr[temp] !== compSymb){
            			f=1;
            			setCompSymb(temp);

            		}
            	}*/
            	var f=Math.round(Math.random());
            	if(f===1){
            		for(var i=8;i>=0;i--){
            			if(arr[i]!==compSymb && arr[i]!==userSymb)
            			{
            				setCompSymb(i);
            				break;
            			}
            		}
            	}
            	else{
            		for(var i=0;i<=8;i++){
            			if(arr[i]!==compSymb && arr[i]!==userSymb)
            			{
            				setCompSymb(i);
            				break;
            			}
            		}

            	}
            }
            else if(k===5)
            {
            	endGame("draw");
            }
		}
	}

	
});