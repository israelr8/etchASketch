// Variables that start off the program
	var dimension = 4;
	var total = dimension * dimension;
	var newSize = 100 / dimension;

	var $square = $("<div />", 
	{
	    class: 'square'
	});


$(document).ready(function () 
{
	for (var i = 0; i < total; i++)
        $(".container").append($square.clone());

    $('.square').on("mouseover", function() 
    {
    	$(this).toggleClass('coloredBox');
    });

// Will start once buttons are clicked
    $(".reset").click(function()
	{
		var dimension =  prompt("Enter new Size:");
		$('.square').remove();
		var total = dimension * dimension;
		var newSize = 100 / dimension;

		for (var i = 0; i < total; i++)
			 $(".container").append($square.clone());
	    
	    $(".square").width(newSize + '%');
		$(".square").height(newSize + '%');

	    $('.square').on("mouseover", function() 
	    {
	    	$(this).toggleClass('coloredBox');
	    });

	});

	$(".random").click(function() 
	{
		$('.square').remove();
		var dimension =  prompt("Enter new Size:");
		var total = dimension * dimension;
		var newSize = 100 / dimension;

		for (var i = 0; i < total; i++)
			$(".container").append($square.clone());
	    
	    $(".square").width(newSize + '%');
		$(".square").height(newSize + '%');

	    $('.square').on("mouseover", function() 
	    {
	    	var rainbow = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + 
				(Math.floor(Math.random() * 256)) + ',' + 
				(Math.floor(Math.random() * 256)) + ')';

	    	$(this).css("background-color", rainbow);
	    });
	});
});