$("#btn").click(function() {
    var input = $(document.createElement('input'));
    input.attr("type", "file");
    input.trigger('click');
    return false;
});












$(".folder").mousedown(function(e) {
        var menu = $("#rmenuFull");
        if( e.button == 2 ) {
            var posX = e.originalEvent.clientX;
            var posY = e.originalEvent.clientY;
            menu.css('top', posY);
            menu.css('left', posX);
            menu.show('400');
            currentElement = e.target;
            return false;
        } else {
            if($(e.target).closest(".main-menu").length != 0) {

            } else {
                menu.hide();
            }
        }

    });
function renameIt() {
    var modal = $("#renameModal"),
        input = $("#renameInput"),
        inputVal = "";

    modal.modal('show');
    var parent = $(currentElement).closest(".folder") || $(currentElement).closest(".fileSortable") || null;
    $("#renameButton").click(function(e) {
        inputVal = input.val() || null;
        if(inputVal) {
            parent.find('p').text(inputVal);
            modal.modal('hide');
        } else {
            console.log("el");
        }
    });
};
