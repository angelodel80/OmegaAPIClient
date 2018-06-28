'use strct';

var app = angular.module('OmegaRest',[]);

require('./directives');
require('./services');
require('./controllers');

/*$(function() {
    var $input = $("input[name='keyword']"),
      $context = $("#textContext");
    $input.on("input", function() {
      var term = $(this).val();
      $context.show().unmark();
      if (term) {
        $context.mark(term, {
          done: function() {
            $context.not(":has(mark)").hide();
          }
        });
      }
    });
  });
  */