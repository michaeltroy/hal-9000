import TermSource from './lib/terminal.min'

/**
 * Create a terminal.
 */
 
$('#term_demo').terminal(function(command, term) {
  switch (command) {
    case 'foo':
      term.echo("You just typed 'foo'");
      break;
    case 'bar':
      term.echo("You just typed 'bar'");
      break;
    case 'color':
      document.body.style.backgroundColor = getRandomColor();
      term.echo('Ooo, a new pretty color');
      break;
    case 'help':
      term.echo('foo \nbar \ncolor (random background color)');
      break;
    default:
      term.echo('Type "help" a for list of commands\n');
      break;
  }
}, { prompt: '', height: 400, greetings: "Type 'help' for commands"});


/** 
 * Random color generator function
 */
 
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}