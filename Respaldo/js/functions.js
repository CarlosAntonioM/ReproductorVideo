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
    ev.dataTransfer.dropEffect = "copy"; //aqui es para selecciona la accion, si quieres ue solo lo mueva o lo copie
}
function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.files;//asignas el vector de archivos a una variable
    //var listado="";
    //localStorage.setItem(listado);
    var video=document.getElementById("videos");//agarras la etiqueta video para poder editarla

    video.src=window.URL.createObjectURL(data[0]);//este comando te convierte a url el archivo, es necesario para poder reproducir el archivo en el cource
    video.onload = function() {//ponle esta funcon ahuevo, ya que esto hara que se reproduzca bien el video  
        window.URL.revokeObjectURL(this.src);
      }
    video.load();
    }

