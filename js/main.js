let		aboutRight = document.querySelector('#a1'),
		aboutLeft = document.querySelector('#a2'),

		benefitsRight = document.querySelector('#b1'),
		benefitsLeft = document.querySelector('#b2'),
        
		serviceRight = document.querySelector('#se1'),
		serviceLeft = document.querySelector('#se2'),

		electroRight = document.querySelector('#e1'),
		electroLeft = document.querySelector('#e2'),

		faqRight = document.querySelector('#f1'),
		faqLeft = document.querySelector('#f2'),

		carsRight = document.querySelector('#c1'),
		carsLeft = document.querySelector('#c2'),

		auctionRight = document.querySelector('#au1'),
		auctionLeft = document.querySelector('#au2'),

		sUp1 = document.querySelector('#s1')/*,
		sUp2 = document.querySelector('#s2'),
		sUp3 = document.querySelector('#s3'),
		sUp4 = document.querySelector('#s4'),
		sUp5 = document.querySelector('#s5')*/;
function hideElements() {
	if (window.innerWidth > 768) {
        	aboutRight.classList.add('vis');
			aboutLeft.classList.add('vis');
			benefitsRight.classList.add('vis');
			benefitsLeft.classList.add('vis');        
			serviceRight.classList.add('vis');
			serviceLeft.classList.add('vis');
			electroRight.classList.add('vis');
			electroLeft.classList.add('vis');
			faqRight.classList.add('vis');
			faqLeft.classList.add('vis');
			carsRight.classList.add('vis');
			carsLeft.classList.add('vis');
			auctionRight.classList.add('vis');
			auctionLeft.classList.add('vis');
			sUp1.classList.add('vis');
/*			sUp2.classList.add('vis');
			sUp3.classList.add('vis');
			sUp4.classList.add('vis');
			sUp5.classList.add('vis');*/
	}
}

hideElements();

    let	headerColor = document.querySelector('.header_top'),
        logo = document.querySelector('.logo'), 
        logoMin = document.querySelector('.logo_min'),
        logoText = document.querySelector('.logo_text'),
        logoStars = document.querySelector('.logo_stars'),
        navScrollMin = document.querySelector('nav')
        menuBtn = document.querySelector('.star_menu'),
        buttonElementFirst = document.querySelector('#be1'),
        buttonElementSecond = document.querySelector('#be2'),
        buttonElementThird = document.querySelector('#be3');
    
function scrollFunctions() {
let	pageY = window.pageYOffset + 500;
    if (window.innerWidth > 768) {
    


    if (window.pageYOffset+aboutRight.getBoundingClientRect().bottom > pageY || window.pageYOffset+aboutLeft.getBoundingClientRect().bottom > pageY) {
    	aboutRight.classList.add('slideInRight');
    	aboutLeft.classList.add('slideInLeft'); 
    }

	else if (window.pageYOffset+benefitsRight.getBoundingClientRect().bottom > pageY || window.pageYOffset+benefitsLeft.getBoundingClientRect().bottom > pageY  ) {
		benefitsRight.classList.add('slideInLeft');
		benefitsLeft.classList.add('slideInRight');
	}

	else if (window.pageYOffset+serviceRight.getBoundingClientRect().bottom > pageY || window.pageYOffset+serviceLeft.getBoundingClientRect().bottom > pageY  ) {
		serviceRight.classList.add('slideInLeft');
		serviceLeft.classList.add('slideInRight');
	}

	else if (window.pageYOffset+electroRight.getBoundingClientRect().bottom > pageY || window.pageYOffset+electroLeft.getBoundingClientRect().bottom > pageY  ) {
		electroRight.classList.add('slideInLeft');
		electroLeft.classList.add('slideInRight');
	}

	else if (window.pageYOffset+faqRight.getBoundingClientRect().bottom > pageY || window.pageYOffset+faqLeft.getBoundingClientRect().bottom > pageY  ) {
		faqRight.classList.add('slideInLeft');
		faqLeft.classList.add('slideInRight');
	}

	else if (window.pageYOffset+carsRight.getBoundingClientRect().bottom > pageY || window.pageYOffset+carsLeft.getBoundingClientRect().bottom > pageY  ) {
		carsRight.classList.add('slideInLeft');
		carsLeft.classList.add('slideInRight');
	}

	else if (window.pageYOffset+auctionRight.getBoundingClientRect().bottom > pageY || window.pageYOffset+auctionLeft.getBoundingClientRect().bottom > pageY  ) {
		auctionRight.classList.add('slideInLeft');
		auctionLeft.classList.add('slideInRight');
	}

	else if (window.pageYOffset+sUp1.getBoundingClientRect().bottom > pageY || window.pageYOffset+sUp1.getBoundingClientRect().bottom > pageY  ) {
		sUp1.classList.add('fadeInUp');
	}
}
}

window.addEventListener('scroll', function () {
    scrollFunctions();
});

scrollFunctions();

function scrollNav() {
    if (window.pageYOffset > 200 ) {
    	headerColor.classList.add('hc');
        logo.classList.add('nav_min');
        logo.classList.add('np');
        logoMin.classList.add('nav_min');
        logoText.classList.add('nav_min');
        logoStars.classList.add('fade_out');
        logoStars.classList.remove('fade_in');
        if (window.innerWidth < 768){
        	menuBtn.classList.add('logo_stars_menu');
        }
        if (window.innerWidth > 768){
        	menuBtn.classList.remove('logo_stars_menu');
        }
        menuBtn.classList.add('fade_in');
        menuBtn.classList.remove('fade_out');

    }
    else if (window.pageYOffset <= 200) {
    	headerColor.classList.remove('hc');
        logo.classList.remove('nav_min');
        logo.classList.remove('np');
        logoMin.classList.remove('nav_min');
        logoText.classList.remove('nav_min');
        logoStars.classList.remove('fade_out');
        logoStars.classList.add('fade_in');
        // menuBtn.classList.remove('logo_stars_menu');
        menuBtn.classList.remove('fade_in');
        menuBtn.classList.add('fade_out');

    }
}
window.addEventListener('scroll', function () {
    scrollNav();
});
scrollNav();

 var nav = document.querySelector('.logo');
	function show() {
			document.querySelector("nav").classList.toggle('mo_min');
			headerColor.classList.toggle('bl');
			document.querySelector(".logo").classList.toggle('np');
			document.querySelector(".logo_menu").classList.toggle('dn');
			logoMin.classList.toggle('dn');
			logoText.classList.toggle('dn');
			logoStars.classList.toggle('dn');

	}
	function act() {document.querySelector(".toggle-btn").classList.toggle('active');}


let lastScrollTop = 0;
let main = document.querySelector('main');
let menuPadMin = document.querySelector('.menu')
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

console.log(window.pageYOffset);
console.log(main.offsetTop);
	if (/*st > lastScrollTop && */window.pageYOffset >= main.offsetTop - 200){
      // downscroll code
		logoMin.classList.add('slideOutLeft');
		logoMin.classList.remove('slideInLeft');
		logo.classList.add('nav_min_n');
		logo.classList.add('np4');
		logoText.classList.add('nav_min_n');
		menuBtn.classList.add('logo_stars_menu_min');
		buttonElementFirst.classList.add('mt8');
		buttonElementFirst.classList.add('be_min');     
		buttonElementSecond.classList.add('be_min');
		buttonElementThird.classList.add('be_min');
		menuPadMin.classList.add('m_li_min');


		// navScrollMin.classList.add('');

      console.log('gotcha!');
	} 
	if (st < lastScrollTop /*&& window.pageYOffset >= main.offsetTop - 45*/) {
      // upscroll code
		logoMin.classList.remove('slideOutLeft');
		logoMin.classList.add('slideInLeft');
		logo.classList.remove('nav_min_n');
		logo.classList.remove('np4');
		logoText.classList.remove('nav_min_n');
		menuBtn.classList.remove('logo_stars_menu_min');
		buttonElementThird.classList.remove('be_min');
		buttonElementSecond.classList.remove('be_min');
		buttonElementFirst.classList.remove('be_min');
		buttonElementFirst.classList.remove('mt8');
		menuPadMin.classList.remove('m_li_min');





      console.log('scroll up');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);



var q = document.getElementsByClassName('question_container');


	for (var i = 0; i < q.length; i++) {
		q[i].onclick = function() {
			var a = this.querySelector('.answer');
			var r = this.querySelector('.arrow');
			console.log(a);
			if (a.style.display == 'block') {
				a.style.display = 'none';
				r.classList.add('rotateOut');
				r.classList.remove('rotateIn'); 
			}
			else {
				a.style.display = 'block';
				r.classList.add('rotateIn');
				r.classList.remove('rotateOut');
			}
		}
	}





var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("order_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
for (let i = 0; i < btn.length; i++) {
btn[i].onclick = function() {
    modal.style.display = "block";
}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var a = document.getElementsByClassName('timer_text');
var b = document.getElementsByClassName('timer');

function ShowTimes() {
	var now = new Date();
	var hrs = 23-now.getHours();
	var mins = 59-now.getMinutes();
	var secs = 59-now.getSeconds();
	var str = '';
	var count = '';

	str += 'До конца акции осталось: '
	count += '<div class="days"><div>0</div><div>дней</div></div>	<div class="hour"><div>'+hrs+'</div><div>часов</div></div><div class="mins"><div>'+mins+'</div><div>минут</div></div><div class="secs"><div>'+secs+'</div><div>секунд</div></div>';
	for (let i = 0; i<a.length;i++) {
	a[i].innerHTML = str;}
	for (let i = 0; i<b.length;i++) {
	b[i].innerHTML = count;}
}

function Show3Times() {	
	var now = new Date();
	var days = '2';
	var hrs = 23-now.getHours();
	var mins = 59-now.getMinutes();
	var secs = 59-now.getSeconds();
	var str = '';
	var count = '';

	str += 'До начала акции осталось: '
	count += '<div class="days"><div>'+days+'</div><div>дня</div></div><div class="hour"><div>'+hrs+'</div><div>часов</div></div><div class="mins"><div>'+mins+'</div><div>минут</div></div><div class="secs"><div>'+secs+'</div><div>секунд</div></div>';
	for (let i = 0; i<a.length;i++) {
	a[i].innerHTML = str;}
	for (let i = 0; i<b.length;i++) {
	b[i].innerHTML = count;}
}

function Show2Times() {
	var now = new Date();				  
	var days2 = '1';
	var hrs = 23-now.getHours();
	var mins = 59-now.getMinutes();
	var secs = 59-now.getSeconds();
	var str = '';
	var count = '';

	str += 'До начала акции осталось: '
	count += '<div class="days"><div>'+days2+'</div><div>день</div></div><div class="hour"><div>'+hrs+'</div><div>часов</div></div><div class="mins"><div>'+mins+'</div><div>минут</div></div><div class="secs"><div>'+secs+'</div><div>секунд</div></div>';
	for (let i = 0; i<a.length;i++) {
	a[i].innerHTML = str;}
	for (let i = 0; i<b.length;i++) {
	b[i].innerHTML = count;}
}

function Show1Times() {	
	var now = new Date();
	var days1 = '0';
	var hrs = 23-now.getHours();
	var mins = 59-now.getMinutes();
	var secs = 59-now.getSeconds();
	var str = '';
	var count = '';

	str += 'До начала акции осталось: '
	count += '<div class="days"><div>'+days1+'</div><div>дней</div></div><div class="hour"><div>'+hrs+'</div><div>часов</div></div><div class="mins"><div>'+mins+'</div><div>минут</div></div><div class="secs"><div>'+secs+'</div><div>секунд</div></div>';
	for (let i = 0; i<a.length;i++) {
	a[i].innerHTML = str;}
	for (let i = 0; i<b.length;i++) {
	b[i].innerHTML = count;}
}

var now = new Date();
var dayOfMounth = now.getDate();
	console.log(dayOfMounth);

if (dayOfMounth == 4 || dayOfMounth == 8 || dayOfMounth == 12 || dayOfMounth == 16 || dayOfMounth == 20 || dayOfMounth == 24 || dayOfMounth == 28 || dayOfMounth == 31) {
	var myVar = setInterval(ShowTimes, 1000);
	document.querySelector("#before_sale").classList.add('dn');
	document.querySelector("#sale_day").classList.remove('dn');
}
else if (dayOfMounth == 3 || dayOfMounth == 7 || dayOfMounth == 11 || dayOfMounth == 15 || dayOfMounth == 19 || dayOfMounth == 23 || dayOfMounth == 27 || dayOfMounth == 30){
	var myVar = setInterval(Show1Times, 1000);
	document.querySelector("#before_sale").classList.remove('dn');
	document.querySelector("#sale_day").classList.add('dn');
}
else if (dayOfMounth == 2 || dayOfMounth == 6 || dayOfMounth == 10 || dayOfMounth == 14 || dayOfMounth == 18 || dayOfMounth == 22 || dayOfMounth == 26 || dayOfMounth == 29){
	var myVar = setInterval(Show2Times, 1000);
	document.querySelector("#before_sale").classList.remove('dn');
	document.querySelector("#sale_day").classList.add('dn');
}
else {
	var myVar = setInterval(Show3Times, 1000);
	document.querySelector("#before_sale").classList.remove('dn');
	document.querySelector("#sale_day").classList.add('dn');
}