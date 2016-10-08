function myfunction() {
	var person = prompt("Please enter your name", "Name");
	var person2 = prompt("Please enter your age ", "1-100");
	var person1 = prompt("Please enter your favourite color name", "black");
	var person3 = prompt("Please enter your Blood group", "'o've");
	var person4 = prompt("Please enter your D.O.B", "d/m/y");
	var x = document.createElement("center")
	document.body.appendChild(x);
	var c = document.createElement("h1")
	var d = document.createTextNode(person + " Biodata ");
	x.appendChild(c);
	c.appendChild(d);
	c.setAttribute("id", "pass")
	document.getElementById("pass").style.fontSize = person2 + "px";
	document.getElementById("pass").style.color = person1;
	var e = document.createElement("table")
	x.appendChild(e);
	var f = document.createElement("tr")
	e.appendChild(f);
	var g = document.createElement("td")
	f.appendChild(g);
	var h = document.createTextNode("Name:");
	g.appendChild(h);
	var i = document.createElement("td")
	f.appendChild(i);
	var j = document.createElement("input")
	i.appendChild(j);
	j.setAttribute("type", "text");
	j.setAttribute("id", "input");
	j.setAttribute("placeholder", person);
	j.setAttribute("readonly", "true");
	var k = document.createElement("tr")
	e.appendChild(k);
	var m = document.createElement("td")
	k.appendChild(m);
	var n = document.createTextNode("Age:");
	m.appendChild(n);
	var o = document.createElement("td")
	k.appendChild(o);
	var p = document.createElement("input")
	o.appendChild(p);
	p.setAttribute("type", "text");
	p.setAttribute("id", "input");
	p.setAttribute("placeholder", person2);
	p.setAttribute("readonly", "true");
	var q = document.createElement("tr")
	e.appendChild(q);
	var r = document.createElement("td")
	q.appendChild(r);
	var s = document.createTextNode("Favourite colour:");
	r.appendChild(s);
	var t = document.createElement("td")
	q.appendChild(t);
	var u = document.createElement("input")
	t.appendChild(u);
	u.setAttribute("type", "text");
	u.setAttribute("id", "input");
	u.setAttribute("placeholder", person1);
	u.setAttribute("readonly", "true");
	var v = document.createElement("tr")
	e.appendChild(v);
	var w = document.createElement("td")
	v.appendChild(w);
	var y = document.createTextNode("Blood group:");
	w.appendChild(y);
	var z = document.createElement("td")
	v.appendChild(z);
	var a1 = document.createElement("input")
	z.appendChild(a1);
	a1.setAttribute("type", "text");
	a1.setAttribute("id", "input");
	a1.setAttribute("placeholder", person3);
	a1.setAttribute("readonly", "true");
	var b1 = document.createElement("tr")
	e.appendChild(b1);
	var c1 = document.createElement("td")
	b1.appendChild(c1);
	var d1 = document.createTextNode("D.O.B");
	c1.appendChild(d1);
	var e1 = document.createElement("td")
	b1.appendChild(e1);
	var f1 = document.createElement("input")
	e1.appendChild(f1);
	f1.setAttribute("type", "text");
	f1.setAttribute("id", "input");
	f1.setAttribute("placeholder", person4);
	f1.setAttribute("readonly", "true");
}
myfunction();
