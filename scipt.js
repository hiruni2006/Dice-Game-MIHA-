var aDie;
	var bDie;
	var aScores;
	var bScores;
	let aCount = 0;
	let bCount = 0;
	let aFTotal = 0;
	let bFTotal = 0;
	let atotal = document.getElementById('aTotal');
	let btotal = document.getElementById('bTotal');

	function highlighter(){
    	if (aFTotal==bFTotal){
	    	atotal.classList.add('selected');
	    	btotal.classList.add('selected');
    	} else if (aFTotal > bFTotal){
    		atotal.classList.add('selected');
    		btotal.classList.remove('selected');
    	} else if (aFTotal < bFTotal){
    		atotal.classList.remove('selected');
    		btotal.classList.add('selected');
    	}
    }
    function randomNumber(){
        aDie = Math.floor(Math.random() * 6) + 1;
        bDie = Math.floor(Math.random() * 6) + 1;

        aScores = document.getElementById('aScore');
        bScores = document.getElementById('bScore');

        let totalMarks = document.querySelector('.totalMarks');
        totalMarks.textContent = aDie + bDie;

        let img1 = document.getElementById('img1');
        let img2 = document.getElementById('img2');
        img1.src = 'diceTextures/p'+aDie+'.png';
        img2.src = 'diceTextures/p'+bDie+'.png';
    }
    function countA(){
    	aCount = aCount + 1;
    	let count = document.getElementById('aScore');
    	count.textContent = aCount;
    }
    function countB(){
    	bCount = bCount + 1;
    	let count = document.getElementById('bScore');
    	count.textContent = bCount;
    }
    function aPressed(){
    	let aTotal = document.getElementById('aTotal');
    	aFTotal = aDie+bDie+aFTotal;
    	aTotal.textContent = aFTotal;

    	highlighter()
    }
    function bPressed(){
    	let bTotal = document.getElementById('bTotal');
    	bFTotal = aDie+bDie+bFTotal;
    	bTotal.textContent = bFTotal;

    	highlighter()
    }