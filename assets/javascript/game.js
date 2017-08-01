
	$(document).ready(function() {
	  alert("Welcome to the Maple OreCollector!");

	var wins = 0;
	var loses = 0;
	var counter = 0;
	var gem = Math.floor((Math.random() * (120 - 19) + 19));
	$("#gem").html(gem);

	var crystalbronze = Math.floor(Math.random() * 12 + 1);
	var crystalgold = Math.floor(Math.random() * 12 + 1);
	var crystalmithril = Math.floor(Math.random() * 12 + 1);
	var crystalsilver = Math.floor(Math.random() * 12 + 1);

	function reset() {

	  gem = Math.floor((Math.random() * (120 - 19) + 19));
	  $("#gem").html(gem);
	  crystalbronze = Math.floor(Math.random() * 11 + 1);
	  crystalgold = Math.floor(Math.random() * 11 + 1);
	  crystalmithril = Math.floor(Math.random() * 11 + 1);
	  crystalsilver = Math.floor(Math.random() * 11 + 1);
	  counter = 0;
	}


	function winlose() {
	  if (gem === counter) {
	    wins++;
	    alert("Congradumalations!! You actually won!!");
	    $("#wins").html(wins);
	    reset()
	  } else if (counter > gem) {
	    loses++;
	    alert("Poor soul, try again!!");
	    $("#loses").html(loses);
	    reset()
	  }	
	}

	  function win3lose3() {
	  if (wins === 3) {
	    alert("You are on Firee!! You reach the end level");
	    alert("Thanks for playing!! Enjoy the Cat video!");
	    window.location.href = "https://www.youtube.com/watch?v=UjXi6X-moxE";

	  } else if (loses === 3) {
	    alert("WOW, Already lost 3x!! Maybe you should give up..if you haven't one once!");
	    alert("Here I'll even reset your score for loses after the nxt game if you lose again!");
	    loses = 0;
	    winlose()

	  }
}



	  $("#bronze").on("click", function() {
	    counter += crystalbronze;
	    $("#counter").html(counter);
	    winlose();
	    win3lose3();
	  });

	  $("#gold").on("click", function() {
	    counter += crystalgold;
	    $("#counter").html(counter);
	    winlose();
	    win3lose3();
	  });

	  $("#mithril").on("click", function() {
	    counter += crystalmithril;
	    $("#counter").html(counter);
	    winlose();
	    win3lose3();
	  });
	  $("#silver").on("click", function() {
	    counter += crystalsilver;
	    $("#counter").html(counter);
	    winlose();
	    win3lose3();
	  });


	});
