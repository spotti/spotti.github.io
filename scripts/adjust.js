$(window).load(function()
{
	var windowHeight = $(window).height();
	
	adjustEverything();
	
	$(window).resize(function()
	{
		adjustEverything();
	});
	
	function adjustEverything()
	{
		windowHeight = $(window).height();
		
		if(((windowHeight-$('.content').outerHeight())/2)>0)
		{
			$('.content').css('margin-top', ((windowHeight-$('.content').outerHeight())/2));
		}
		else
		{
			$('.content').css('margin-top',0);
		}
	}
});