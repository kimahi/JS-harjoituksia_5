const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for (i=0; i<kuvat.length; i++) {
  ul = document.getElementsByTagName("ul")[0];
  li = document.createElement("li");
  img = document.createElement("img");
  img.src = kuvat[i];
  img.alt = "Kissa";
  ul.appendChild(li);
  li.appendChild(img);
}