const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attemp = document.getElementById('attemp');
let result = document.getElementById('result');

const Guess = {
	max: 10,
	attemptsNumber: 0,
	numberDrawn: function randonValue() {
		return Math.round(Math.randon() * this.max);
	}
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt (attempt, value) {
	attempt.innerHTML = 'Tentativa:' + value
};

function handleSubmit(e) {
	e.preventeDefalt();

	let kick = getElementById('kick').value;

	if (!kick) {
		alert( 'Digite um valor!' );
		return;
	};

	updateAttempt(attemp, ++Guess.attemptsNumber);

	if (numberDrawn == kick) {
		playAgain();
		status.innerHTML = 'Parabens você acertou!';
		result.style.transition = '0.4s';
		result.style.backgroundColor = '#37c978';
		result.style.color = '#fff';
		status.style.color = '#fff';
		clean();
	} else if (numberDrawn > kick) {
		status.innerHTML = 'O numero é maior';
		status.style.color = '#dd4251';
		clean();
	} else if (numberDrawn < kick) {
		status.innerHTML = 'O numero é menor';
		status.style.color = '#dd4251';
		clean();
	}
};
function playAgain() {
	document.getElementById('btnRestart').style.diplay = 'flex';
};
function restart() {
	document.location.reload(true);
};
function clean() {
	document.getElementById('kick').value = '';
};