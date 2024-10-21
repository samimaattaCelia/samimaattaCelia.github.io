var chars = ["f", "d", "s", "j", "k", "l", "a", "ø"];
if (localStorage.getItem("c")) {
	chars[7] = localStorage.getItem("c")
	document.getElementById("dot8").value = chars[7]
}
function u() {
	chars[7] = document.getElementById("dot8").value;
	localStorage.setItem("c", chars[7]);
}
// cp = charsPushed
var cp = Array(5).fill(false);
// https://codebeautify.org/minify-js
// https://stackoverflow.com/questions/75033757/calling-a-server-function-from-sveltekit-page
// http://www.jsfuck.com/
// https://www.fontspace.com/musiqwik-font-f3722#action=charmap&id=rvL8
var brailleAlphabet = "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿⡀⡁⡂⡃⡄⡅⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚⡛⡜⡝⡞⡟⡠⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢑⢒⢓⢔⢕⢖⢗⢘⢙⢚⢛⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰⢱⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣈⣉⣊⣋⣌⣍⣎⣏⣐⣑⣒⣓⣔⣕⣖⣗⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤⣥⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⣽⣾⣿";
// b = brailleInput
var b = document.getElementById("input");
var brailleIn2Powers = 0;
var keyIsDown;
var runCode = window.location.hostname == "kvile.com" && new Date().getFullYear() < 2026;
// runCode = true;
function copyText() {
	b.select();
	document.execCommand("copy");
}
function clearText() {
	b.value = "";
}

b.addEventListener("keydown", (event) => {
	if (event.code == 'Tab' || event.key == '	' || event.key == 'Tab') {
		// setFocusNext("input");
		// setFocusNext("showVisualText");
		// for(i=0;i<charsPushed.length;i++) charsPushed[i]=false;
		for (i = 0; i < cp.length; i++) {
			cp[i] = false;
		}
		// charsPushed = charsPushed.map(c => false)
		keyIsDown = false;
		document.getElementById("copyText").focus();
	} else if (chars.indexOf(event.key) != -1 && runCode) {
		cp[chars.indexOf(event.key)] = true;
		keyIsDown = true;
	}
});

b.addEventListener("keyup", (event) => {
	if (keyIsDown) {
		keyIsDown = false;
		for (i = 0; i < cp.length; i++) {
			if (cp[i]) {
				brailleIn2Powers += 2 ** i;
			}
		}
		addTextToElement(b, brailleAlphabet.charAt(brailleIn2Powers));
		for (i = 0; i < cp.length; i++) {
			cp[i] = false;
		}
		brailleIn2Powers = 0;
	} else if (event.code == "Space" || event.key == " ") { //" "
		addTextToElement(b, "⠀"); // the font for O (big o, not zero) is same as "Space"
	} else if (event.key == "Backspace" && b.value.length > 0) { //8
		backspaceChar(b);
	} else if (event.key == "Delete" && b.value.length > 0) { //46
		deleteChar(b);
	} else if (event.key == "ArrowLeft") { //37
		arrowLeft(b);
	} else if (event.key == "ArrowRight") { //39
		arrowRight(b);
	} else if (event.key == "ArrowUp") { //38
		arrowUp(b);
	} else if (event.key == "ArrowDown") { //40
		arrowDown(b);
	} else if (event.key == "End") { //35
		end(b);
	} else if (event.key == "Home") { //36
		home(b);
	} else if (event.key == "Enter") { //13
		addTextToElement(b, "\n");
	}
	// updateBackupText();
});

function setPosition(el, focusIndex) {
	el.setSelectionRange(focusIndex + 1, focusIndex + 1);
}

// gc = getCaretPosition
function gc(editableDiv) {
	return editableDiv.selectionStart;
}

function addTextToElement(element, insertText) {
	if (element.value.length > 0) {
		var originalPosition = gc(element);
		var originalContent = element.value;
		var front = originalContent.substring(0, originalPosition);
		var back = originalContent.substring(originalPosition, originalContent.length);
		console.log(`${front} ${insertText} ${back}`)
		var newText = front + insertText + back;
		element.value = newText; //.replace(/\s\s+/g, " ");  
		setPosition(element, originalPosition);
	} else {
		element.value = insertText;
		setPosition(element, 0);
	}
}

function backspaceChar(element) {
	var originalPosition = gc(element);
	var originalContent = element.value;
	var front = originalContent.substring(0, originalPosition - 1);
	var back = originalContent.substring(originalPosition, originalContent.length);
	element.value = front + back;
	try {
		setPosition(element, originalPosition - 2);
	} catch (error) { }
}

function deleteChar(element) {
	var originalPosition = gc(element);
	var originalContent = element.value;
	var front = originalContent.substring(0, originalPosition);
	var back = originalContent.substring(originalPosition + 1, originalContent.length);
	element.value = front + back;
	setPosition(element, originalPosition - 1);
}

function arrowLeft(element) {
	setPosition(element, Math.max(gc(element) - 2, -1));
	try {
	} catch (error) { }
}

function arrowRight(element) {
	setPosition(element, Math.min(gc(element), element.value.length - 1));
	try {
	} catch (error) { }
}

function arrowUp(element) {
	return 0;
}

function arrowDown(element) {
	return 0;
}

function home(element) {
	setPosition(element, -1);
}

function end(element) {
	setPosition(element, element.value.length - 1);
}