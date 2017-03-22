var currentElement=null;

$(document).ready(function(){
    getFolderName();
    var count=0;

    $(".folder_name").draggable({
          revert:"invalid"
          });

    $(".drive-file").draggable({
          revert:"invalid"
          });

    $('#bin').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
            count=count+1;
            $("#count").text(count);
        }

    });





    $("#myModal").click(function(){
        $("#myModal1").modal();
    });


    $("#create_folder").click(function(){
        var input = $("#folder_name");
        if(input.val() == '') {
            input.css('border-color', 'red');
        } else {
            var folder = '<div class="col-xs-6 col-sm-2 col-md-2 folder_name"><div class="folders" ><i class="fa fa-folder" aria-hidden="true" id="folder"></i><b class="f">' + input.val() + '</b></div></div>'
            $("#folderss").append(folder);
            $("#myModal1").modal("hide");
            $(".folder_name").draggable({
                revert:"invalid"
            });

            $('#bin').droppable({
                over: function(event, ui) {
                    ui.draggable.remove();
                }
            });

        }
        $(".folder_name").mousedown(function(e) {
            var menu = $("#id_contextmenu1");
            if( e.button == 2 ) {
                $("#delete_menu").show();
                var posX = e.originalEvent.clientX;
                var posY = e.originalEvent.clientY;

                currentElement = e.target;
                console.log(currentElement);
                menu.css('top', posY);
                menu.css('left', posX);
                 menu.show('400');

                return false;
            } else {
                menu.hide('100');
            }
            return true;
        });

        $(".folders").dblclick(function(e) {
            e.preventDefault();
            var folder_name2=$(this).find('b').text();
            window.location.href = "List.html?folder_name2=" + folder_name2;
        });


    });



    $("#clk").click(function(){
        $("#myModal2").modal("show");
    });

    $("#create_file").click(function(){
        var allowedFiles = [".docx", ".pdf",".txt"];
        var fileUpload = $("#folder_name1");
        var lblError = $("#lblError");
        var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
        if (!regex.test(fileUpload.val().toLowerCase())) {
            lblError.html("Please upload files having extensions: <b>" + allowedFiles.join(', ') + "</b> only.");
            return false;
        } else {
            var mainDiv = $("<div></div>").addClass("col-xs-6 col-sm-2 col-md-2 drive-file");
            var rectangleDiv = $("<div></div>").addClass("rectangle1");
            var fileIcon = $("<i></i>").addClass("fa");
            var fileName = $("<div></div>").addClass("rec").append("<h5><b class='f'>" + fileUpload.val() + "</b></h5>");

            var ext = fileUpload.val().split(".")[1];

            if(ext === 'txt') {
                fileIcon.addClass('fa-file-text');
            } else if(ext === 'docx') {
                fileIcon.addClass('fa-file-word-o');
            } else {
                fileIcon.addClass('fa-file-pdf-o');
            }

            rectangleDiv.append(fileIcon);
            rectangleDiv.append(fileName);
            mainDiv.append(rectangleDiv);
            $("#files").append(mainDiv);
            $("#myModal2").modal("hide");
            $(".drive-file").draggable({
                revert:"invalid"
            });

            $('#bin').droppable({
                over: function(event, ui) {
                    ui.draggable.remove();
                }
            });

        }
        $(".drive-file").mousedown(function(e) {
            var menu = $("#id_contextmenu2");
            if( e.button == 2 ) {
                $("#delete_menu").show();
                var posX = e.originalEvent.clientX;
                var posY = e.originalEvent.clientY;

                currentElement = e.target;
                menu.css('top', posY);
                menu.css('left', posX);
                 menu.show('400');

                return false;
            } else {
                menu.hide('100');
            }
            return true;
        });


    });




        $("#list").click(function() {
            $("#list_view").show();
            $("#grid_view").hide();
            $("#grid").show();
            $(this).hide();

        });
        $("#grid").click(function() {
            $("#list_view").hide();
            $("#grid_view").show();
            $("#list").show();
            $(this).hide();
        });





    $("#dp").click(function(){
        $("#myModal3").modal("show");
    });



    $("#image_upload").bind("click", function () {
        var allowedFiles = [".jpg", ".png", ".gif"];
        var fileUpload = $("#fUpload");
        var lblError = $("#lblError1");
        var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
        if (!regex.test(fileUpload.val().toLowerCase())) {
            lblError.html("Please upload files having extensions: <b>" + allowedFiles.join(', ') + "</b> only.");
            return false;
        }
        else{

            $("#myModal6").modal("hide");
        }

    });




    document.oncontextmenu = function() {return false;};

    $(document).mousedown(function(e){
        var menu = $("#id_contextmenu");
        if( e.button == 2 ) {
            var posX = e.originalEvent.clientX;
            var posY = e.originalEvent.clientY;


            menu.css('top', posY);
            menu.css('left', posX);
            menu.show('400');
            $("#id_contextmenu1").hide('100');
            $("#id_contextmenu2").hide('100');
            return false;
        } else {
            menu.hide('100');
            $("#id_contextmenu1").hide('100');
            $("#id_contextmenu2").hide('100');
        }
        return true;
    });




    $(".drive-file").mousedown(function(e) {
        var menu = $("#id_contextmenu2");
        if( e.button == 2 ) {
            $("#delete_menu").show();
            var posX = e.originalEvent.clientX;
            var posY = e.originalEvent.clientY;

            currentElement = e.target;
            menu.css('top', posY);
            menu.css('left', posX);
            menu.show('400');
            $("#id_contextmenu").hide('100');
            return false;
        } else {
            menu.hide('100');
        }
        return true;
    });


    $(".folder_name").mousedown(function(e) {
        var menu = $("#id_contextmenu1");
        if( e.button == 2 ) {
            $("#delete_menu").show();
            var posX = e.originalEvent.clientX;
            var posY = e.originalEvent.clientY;

            currentElement = e.target;

            menu.css('top', posY);
            menu.css('left', posX);
             menu.show('400');

            return false;
        } else {
            menu.hide('100');
        }
        return true;
    });


    // $('#myModal4').on('show.bs.modal', function (e) {
    //     document.getElementById("error").innerHTML = ("");
    // })






    $("#delete_menu1").click(function(e) {
        var elm = $(currentElement).closest('.drive-file');
        elm.remove();
        console.log(elm);
    });


    $("#delete_menu").click(function(e) {
        var elm = $(currentElement).closest('.folder_name');
        elm.remove();
        console.log(elm);
    });


    $(".navbar-default").mousedown(function(e){
        var menu = $("#id_contextmenu");
        if( e.button == 2 ) {
            var posX = e.originalEvent.clientX;
            var posY = e.originalEvent.clientY;
            menu.css('top', posY);
            menu.css('left', posX);
            menu.hide('400');
            return false;
        }
    });


    $(".sidenav").mousedown(function(e){
        var menu = $("#id_contextmenu");
        if( e.button == 2 ) {
            var posX = e.originalEvent.clientX;
            var posY = e.originalEvent.clientY;
            menu.css('top', posY);
            menu.css('left', posX);
            menu.hide('400');
            return false;
        }
    });


    $("#r_folder").click(function(){
        $("#myModal5").modal();
    });


    $("#create_folder2").click(function(){
        var input = $("#folder_n");

        if(input.val() == '') {
            input.css('border-color', 'red');
        } else {
            var folder = '<div class="col-xs-6 col-sm-2 col-md-2 folder_name"><div class="folders" ><i class="fa fa-folder" aria-hidden="true" id="folder"></i><b class="f">' + input.val() + '</b></div></div>'
            $("#folderss").append(folder);
            $("#myModal5").modal("hide");
            $(".folder_name").draggable({
                revert:"invalid"
            });

            $('#bin').droppable({
                over: function(event, ui) {
                    ui.draggable.remove();
                }
            });




        }
        $(".folder_name").mousedown(function(e) {
            var menu = $("#id_contextmenu1");
            if( e.button == 2 ) {
                $("#delete_menu").show();
                var posX = e.originalEvent.clientX;
                var posY = e.originalEvent.clientY;

                currentElement = e.target;
                menu.css('top', posY);
                menu.css('left', posX);
                 menu.show('400');

                return false;
            } else {
                menu.hide('100');
            }
            return true;
        });

    });



    $("#r_file").click(function(){
        $("#myModal6").modal("show");
    });

    $("#create_file2").click(function(){
        var allowedFiles = [".docx", ".pdf",".txt"];
        var fileUpload = $("#file_n");
        var lblError = $("#lblError2");
        var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
        if (!regex.test(fileUpload.val().toLowerCase())) {
            lblError.html("Please upload files having extensions: <b>" + allowedFiles.join(', ') + "</b> only.");
            return false;
        } else {
            var mainDiv = $("<div></div>").addClass("col-xs-6 col-sm-2 col-md-2 drive-file");
            var rectangleDiv = $("<div></div>").addClass("rectangle1");
            var fileIcon = $("<i></i>").addClass("fa");
            var fileName = $("<div></div>").addClass("rec").append("<h5><b class='f'>" + fileUpload.val() + "</b></h5>");

            var ext = fileUpload.val().split(".")[1];

            if(ext === 'txt') {
                fileIcon.addClass('fa-file-text');
            } else if(ext === 'docx') {
                fileIcon.addClass('fa-file-word-o');
            } else {
                fileIcon.addClass('fa-file-pdf-o');
            }

            rectangleDiv.append(fileIcon);
            rectangleDiv.append(fileName);
            mainDiv.append(rectangleDiv);
            $("#files").append(mainDiv);
            $("#myModal6").modal("hide");
            $(".drive-file").draggable({
                revert:"invalid"
            });

            $('#bin').droppable({
                over: function(event, ui) {
                    ui.draggable.remove();
                }
            });

        }
        $(".drive-file").mousedown(function(e) {
            var menu = $("#id_contextmenu2");
            if( e.button == 2 ) {
                $("#delete_menu").show();
                var posX = e.originalEvent.clientX;
                var posY = e.originalEvent.clientY;

                element = e.target;
                menu.css('top', posY);
                menu.css('left', posX);
                menu.show('400');

                return false;
            } else {
                menu.hide('100');
            }
            return true;
        });
    });

    $("#open").click(function(e) {
        e.preventDefault();
        var folder_name2=$(this).find('b').text();
        window.location.href = "List.html?folder_name2=" + folder_name2;
    });

    $(".folders").dblclick(function(e) {
        e.preventDefault();
        var folder_name2=$(this).find('b').text();
        window.location.href = "List.html?folder_name2=" + folder_name2;
    });



});

function getFolderName() {

    var path = window.location.search;
    var name = path.split("=")[1];
    var target = $("#folder_heading");

    if(target.length != 0) {
        target.text(name).addClass("text-uppercase");
        var folder = '<div class="col-xs-6 col-sm-2 col-md-2 folder_name"><div class="folders" ><i class="fa fa-folder" aria-hidden="true" id="folder"></i><b class="f">' +  +'</b></div></div>';
        $("#folderss").append(folder);
    }

}





function renameIt() {

    var modal = $("#myModal4"),
    input = $("#re_name"),
    inputVal = "";

    modal.modal('show');
    var parent = $(currentElement).closest(".folders") || $(currentElement).closest(".drive-file") || null;
    $("#ok").click(function(e) {
        e.preventDefault();
        inputVal = input.val() || null;
        if(inputVal) {
            parent.find('b').text(inputVal);
            modal.modal('hide');
        } else {
            document.getElementById("error").innerHTML = ("Please enter a name first");
        }
    });
}



function renameIt1() {

    var modal = $("#myModal4"),
        input = $("#re_name"),
        inputVal = "";

    modal.modal('show');
    var parent = $(currentElement).closest(".rectangle1") || null || $(currentElement).closest(".folder_name");
    $("#ok").click(function(e) {
        e.preventDefault();
        inputVal = input.val()|| null;

        if(inputVal) {
            parent.find("b").text(inputVal);
            modal.modal('hide');
        } else {
            document.getElementById("error").innerHTML = ("Please enter a name first");
        }
    });
}

function displayPic(e) {
    var modal=$("#myModal3")
    var a = $("#tableBanner").attr('src')
    $("#dp").attr("src", a);
    $('#tableBanner').find('img').attr("src", $("#dp").attr("src"));
    modal.modal('hide');
}
