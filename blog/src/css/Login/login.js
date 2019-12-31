programFill = function(context) {

		context.beginPath();
		context.arc(0, 0, 1, 0, PI2, true);
		context.closePath();
		context.fill();
	}
programStroke = function(context) {
		context.lineWidth = 0.05;
		context.beginPath();
		context.arc(0, 0, 1, 0, PI2, true);
		context.closePath();
		context.stroke();

	}
	export {
		programStroke,
		programFill
	}
