$(document).ready(function(){
     $("#sortable1,#sortable2,#sortable3,#sortable4,#sortable5,#sortable6").sortable({
               containment:".jira-board-table",
               cursor: "move",
               cursorAt: { top: 56, left: 56 },
               connectWith: "#sortable1,#sortable2,#sortable3,#sortable4,#sortable5,#sortable6"

            });
 $(".tl").droppable({
        classes :{
            "ui-droppable active":"ui-state active",
            "ui-droppable hover":"ui-state hover"
        },
        drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
        return false;
      }

    });
});
