var encabezado = document.createElement("header");

var div1 = document.createElement("div");
div1.setAttribute("ID", "slider");

var d1 = document.createElement("div");
var i1 = document.createElement("img");
i1.setAttribute("src", "../img/azul1.jpg");
i1.setAttribute("class", "s");
i1.setAttribute("height", "200");
i1.setAttribute("width", "900");
i1.setAttribute("alt", "1");
d1.appendChild(i1);

var d2 = document.createElement("div");
var i2 = document.createElement("img");
i2.setAttribute("src", "../img/azul2.jpg");
i2.setAttribute("class", "s");
i2.setAttribute("height", "200");
i2.setAttribute("width", "900");
i2.setAttribute("alt", "2");
d2.appendChild(i2);

var d3 = document.createElement("div");
var i3 = document.createElement("img");
i3.setAttribute("src", "../img/azul3.jpg");
i3.setAttribute("class", "s");
i3.setAttribute("height", "200");
i3.setAttribute("width", "900");
i3.setAttribute("alt", "3");
d3.appendChild(i3);

var d4 = document.createElement("div");
var i4 = document.createElement("img");
i4.setAttribute("src", "../img/grande1.jpg");
i4.setAttribute("class", "s");
i4.setAttribute("height", "200");
i4.setAttribute("width", "900");
i4.setAttribute("alt", "4");
d4.appendChild(i4);


div1.appendChild(d1);
div1.appendChild(d2);
div1.appendChild(d3);
div1.appendChild(d4);
//alert("");

var div2 = document.createElement("div");
div2.setAttribute("ID", "titulo");

var div3 = document.createElement("div");
div3.setAttribute("ID", "letra");

var texto = document.createTextNode("Aprendiendo Guitarra");
div3.appendChild(texto);
div2.appendChild(div3);

encabezado.appendChild(div1);
encabezado.appendChild(div2);
document.body.appendChild(encabezado);



