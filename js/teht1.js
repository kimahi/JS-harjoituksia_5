document.getElementsByTagName("td")[0].innerHTML = "<td>Kim</td>";
document.getElementsByTagName("td")[1].innerHTML = "<td>B</td>";
document.getElementsByTagName("td")[3].innerHTML = "<td>Umpikuja 1 01620, VATNAA</td>";

tr1 = document.getElementsByTagName("tr")[0];
let td1 = document.createElement("th");
td1.innerHTML = "Puhelin";
tr1.appendChild(td1);

tr2 = document.getElementsByTagName("tr")[1];
let td2 = document.createElement("td");
td2.innerHTML = "040 1234567";
tr2.appendChild(td2);

document.getElementsByTagName("td")[2].remove();
document.getElementsByTagName("th")[2].remove();
