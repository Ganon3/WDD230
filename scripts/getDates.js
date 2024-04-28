document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `This was last modifide: ${new Date(document.lastModified)}`;