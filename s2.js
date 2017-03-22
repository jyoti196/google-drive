 var fileupload = document.getElementById('fUpload');
 var img = document.getElementById('tableBanner');


 fileupload .addEventListener('change', function() {
     var file = this.files[0];
    if (file.type.indexOf('image') < 0) {

        return;
     }
    var fReader = new FileReader();
     fReader.onload = function() {
         img.src = fReader.result;
     };

     fReader.readAsDataURL(file);
 });

 function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width/2;
     canvas.height = img.height/2;

     var ctx = canvas.getContext("2d");
     ctx.drawImage(img, 0, 0);

     var dataURL = canvas.toDataURL("image/png");

     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

 function fetchimage () {

 }


 fetchimage();


// window.path.query
