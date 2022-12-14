function scrollFnctiom() {
	const bodyscrll = document.getElementById("body_container");
	let bscrll = bodyscrll.scrollTop;

	if (bscrll < 10) {
		document.getElementById("myBtn").style.display = "block";
	}

	if (bscrll == 0) {
		document.getElementById("myBtn").style.display = "none";
	}
}

function openModal(x) {
	var v = x;
	switch (v) {
		case "myModal":
			document.getElementById("myModal").style.display = "block";
			break;
		case "myModal2":
			document.getElementById("myModal2").style.display = "block";
			break;
		case "myModal3":
			document.getElementById("myModal3").style.display = "block";
			break;
		case "myModal4":
			document.getElementById("myModal4").style.display = "block";
			break;
		case "myModal5":
			document.getElementById("myModal5").style.display = "block";
			break;
		case "myModal6":
			document.getElementById("myModal6").style.display = "block";
			break;
		default:
			location.href = "SouthOfMarket.html";
			break;
	}
}
// modal 1
function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}
//2

function closeModal2() {
	document.getElementById("myModal2").style.display = "none";
}
var slideIndexs = 1;
showSlides2(slideIndexs);

function currentSlide2(n) {
	showSlides2((slideIndexs = n));
}
function plusSlides2(n) {
	showSlides2((slideIndexs += n));
}

function showSlides2(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides2");

	if (n > slides.length) {
		slideIndexs = 1;
	}
	if (n < 1) {
		slideIndexs = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndexs - 1].style.display = "block";
}

//3

function closeModal3() {
	document.getElementById("myModal3").style.display = "none";
}
var slideIndexs3 = 1;
showSlides3(slideIndexs3);

function currentSlide3(n) {
	showSlides3((slideIndexs3 = n));
}
function plusSlides3(n) {
	showSlides3((slideIndexs3 += n));
}

function showSlides3(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides3");

	if (n > slides.length) {
		slideIndexs3 = 1;
	}
	if (n < 1) {
		slideIndexs3 = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndexs3 - 1].style.display = "block";
}

//4
function closeModal4() {
	document.getElementById("myModal4").style.display = "none";
}
var slideIndexs4 = 1;
showSlides4(slideIndexs4);

function currentSlide4(n) {
	showSlides4((slideIndexs4 = n));
}
function plusSlides4(n) {
	showSlides4((slideIndexs4 += n));
}

function showSlides4(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides4");

	if (n > slides.length) {
		slideIndexs4 = 1;
	}
	if (n < 1) {
		slideIndexs4 = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndexs4 - 1].style.display = "block";
}

//5
function closeModal5() {
	document.getElementById("myModal5").style.display = "none";
}
var slideIndexs5 = 1;
showSlides5(slideIndexs5);

function currentSlide5(n) {
	showSlides5((slideIndexs5 = n));
}
function plusSlides5(n) {
	showSlides5((slideIndexs5 += n));
}

function showSlides5(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides5");

	if (n > slides.length) {
		slideIndexs5 = 1;
	}
	if (n < 1) {
		slideIndexs5 = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndexs5 - 1].style.display = "block";
}

//end of modal
function subBarBtn(x) {
	var v = x;
	var sOm_TxtIntro1 = document.getElementById("sOm_TxtIntro1");
	var sOm_TxtIntro2 = document.getElementById("sOm_TxtIntro2");
	var sOm_TxtIntro3 = document.getElementById("sOm_TxtIntro3");
	var sOm_TxtIntro4 = document.getElementById("sOm_TxtIntro4");
	var sOm_TxtIntro5 = document.getElementById("sOm_TxtIntro5");
	switch (v.trim()) {
		case "soma_1":
			sOm_TxtIntro1.scrollIntoView({ behavior: "smooth" });
			location.href = "twoSerendra.html#sOm_TxtIntro1";
			document.getElementById("myBtn").style.display = "block";
			break;
		case "soma_2":
			sOm_TxtIntro2.scrollIntoView({ behavior: "smooth" });
			location.href = "twoSerendra.html#sOm_TxtIntro2";
			document.getElementById("myBtn").style.display = "block";
			break;
		case "soma_3":
			sOm_TxtIntro3.scrollIntoView({ behavior: "smooth" });
			location.href = "twoSerendra.html#sOm_TxtIntro3";
			document.getElementById("myBtn").style.display = "block";
			break;
		case "soma_4":
			sOm_TxtIntro4.scrollIntoView({ behavior: "smooth" });
			location.href = "twoSerendra.html#sOm_TxtIntro4";
			document.getElementById("myBtn").style.display = "block";
			break;
		case "soma_5":
			sOm_TxtIntro5.scrollIntoView({ behavior: "smooth" });
			location.href = "twoSerendra.html#sOm_TxtIntro5";
			document.getElementById("myBtn").style.display = "block";
			break;
		case "myBtn":
			top_bar.scrollIntoView({ behavior: "smooth" });
			document.getElementById("myBtn").style.display = "none";
			break;
		default:
			location.href = "twoSerendra.html";
			break;
	}
}

function dropMenu() {
	const dropdownContent = document.getElementById("dropdown-content");
	dropdownContent.style.display == "none"
		? (dropdownContent.style.display = "block")
		: (dropdownContent.style.display = "none");
}

function myFunction() {
	var displayss = document.getElementById("inquiry_questioniere");
	if (displayss.style.display == "none") {
		displayss.style.display = "block";
	} else {
		displayss.style.display = "none";
	}
}

function menuIcon() {
	const value = document.getElementById("container_id");
	var displayss = document.getElementById("top_bar");
	var ul_class = document.getElementById("ul_class");
	value.classList.toggle("change");
	if (value.className == "container change") {
		displayss.style.height = "auto";
		displayss.style.width = "100%";
		ul_class.style.display = "block";
	} else {
		ul_class.style.display = "none";
		displayss.style.height = "90px";
	}
}

function mySAdwasd(x) {
	const dropdownMenu = document.getElementById("dropdownButton");
	var ul_class = document.getElementById("ul_class");
	const dropdownContent = document.getElementById("dropdown-content");
	if (x.matches) {
		// If media query matches
		const value = document.getElementById("container_id");

		var displayss = document.getElementById("top_bar");

		if (value.className == "container change") {
			// alert("im here now");
			ul_class.style.display = "block";
			ul_class.style.display = "none";
			displayss.style.height = "90px";
			value.classList.toggle("change");
		} else {
			displayss.style.display = "90px";
			ul_class.style.display = "none";
			dropdownContent.style.display = "none";
		}
	} else {
		dropdownContent.style.display = "none";
		ul_class.style.display = "block";
	}
}

var x = window.matchMedia("(max-width:1240px)");

mySAdwasd(x); // Call listener function at run time

x.matchMedia(mySAdwasd); // Attach listener function on state changes
