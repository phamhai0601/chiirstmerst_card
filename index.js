const elemCard      = document.querySelector('div.card');
const elemClickIcon = document.querySelector('span.click-icon');

elemCard.addEventListener('click', function() {
	elemCard.classList.toggle('is-opened');
	elemClickIcon.classList.toggle('is-hidden');
});

let body  = document.querySelector('body');
let count = 50;
for(let i = 0; i < 50; i++) {
	let leftSnow  = Math.floor(Math.random() * body.clientWidth);
	let topSnow   = Math.floor(Math.random() * body.clientHeight);
	let widthSnow = Math.floor(Math.random() * 50);
	let timeSnow  = Math.floor((Math.random() * 5) + 5);
	let blurSnow  = Math.floor(Math.random() * 20);
	let div       = document.createElement('div');
	div.classList.add('snow');
	div.style.left              = leftSnow + 'px';
	div.style.top               = topSnow + 'px';
	div.style.width             = widthSnow + 'px';
	div.style.height            = widthSnow + 'px';
	div.style.animationDuration = timeSnow + 's';
	div.style.filter            = "blur(" + blurSnow + "px)";
	body.appendChild(div);
}
