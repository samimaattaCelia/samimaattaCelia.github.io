


function updateSize() {
	var brailleInput = document.getElementById("input");
	var musicSymbolsText = document.getElementById("musicSymbols");
	if (musicSymbolsText) musicSymbolsText.style.fontSize = document.getElementById("musicTextSizeInput").value;
	// backupText.style.fontSize = document.getElementById("regularTextSizeInput").value;
	brailleInput.style.fontSize = document.getElementById("brailleSizeInput").value;
}
	