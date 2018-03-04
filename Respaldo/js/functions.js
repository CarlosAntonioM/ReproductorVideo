/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function cambiarVideo(seleccion) {
    var video = document.getElementById("videos");
    if (seleccion == "Recall") {
        video.src = "Overwatch Animated Short  Recall.mp4";
    } else if (seleccion == "Alive") {
        video.src = "Overwatch Animated Short  “Alive”.mp4";
    } else if (seleccion == "Dragons") {
        video.src = "Overwatch Animated Short  “Dragons”.mp4";
    } else if (seleccion == "Hero") {
        video.src = "Overwatch Animated Short  “Hero”.mp4";
    } else {
        video.src = "Overwatch Animated Short  The Last Bastion.mp4";
    }
}

function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
}
function drop_handler(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.files;

    var video=document.getElementById("videos");

    video.src=window.URL.createObjectURL(data[0])
    video.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
    video.load();
    }

