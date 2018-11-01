let paiva = new Date();

let p = document.getElementById("kello");
/*document.getElementById("kello").innerHTML = h.getHours();
document.getElementById("kello").innerHTML = min.getMinutes();*/


/*
function clock() {
  p.innerHTML += paiva.getHours() + ":" + paiva.getMinutes() + ":" + paiva.getSeconds() + " ";
}

setTimeout(clock(), 1000);
*/


function klo(){
  let paiva = new Date();
  let h = paiva.getHours();
  let m = paiva.getMinutes();
  let s = paiva.getSeconds();

  if (s<10 && m<10) {
    let aika = h + ":0" + m + ":0" + s;
    document.getElementById("kello").innerText = aika;
  }
  else if (s<10) {
    let aika = h + ":" + m + ":0" + s;
    document.getElementById("kello").innerText = aika;
  }
  else if (m<10) {
    let aika = h + ":0" + m + ":" + s;
    document.getElementById("kello").innerText = aika;
  } else {
    let aika = h + ":" + m + ":" + s;
    document.getElementById("kello").innerText = aika;
  }

  setInterval(klo, 1000);
}

klo();