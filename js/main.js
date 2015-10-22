$(".progressbar .progress").each(function(){
	var $this = $(this);
	var _width = parseInt($this.data('width'));
	$this.animate({width: _width + "%"}, 1000); 
});