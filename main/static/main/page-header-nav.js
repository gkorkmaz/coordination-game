$('.page-header').append(
  '<ul id="help-nav" class="nav float-right">' +
  	'<li class="no-hover nav-item float-right">' +
    	'<a class="nav-link" href="javascript:void(0);">Tour</a>' +
  	'</li>'+
    '<li class="no-hover nav-item float-right">' + 
    	'<a class="nav-link" href="" data-toggle="modal" data-target="#InstructionsModal">Instructions</a>' +
  	'</li>' +
    '<li class="no-hover nav-item float-right">' + 
    	'<a class="nav-link" href="" data-toggle="modal" data-target="#QuizModal">Quiz</a>'+
  	'</li>' +
  '</ul>'
);

if ($('.otree-title').html().indexOf('Messaging') >= 0) {
    $('#help-nav > .nav-item:first-child > a').attr('onclick', 'startDiscussTour()');
}
else if ($('.otree-title').html().indexOf('Decision') >= 0) {
    $('#help-nav > .nav-item:first-child > a').attr('onclick', 'startDecideTour()');
}