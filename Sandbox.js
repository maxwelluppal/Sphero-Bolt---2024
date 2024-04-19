// Programmer: Max Uppal
// Team Member: Ethan VanLandegent
// Bolt ID: SB-EC76
// Date: 4-16-24
// Program: Hello World - Sandbox
// Program URL: https://edu.sphero.com/program/16700420/edit

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}
*/

async function startProgram() {
	setMainLed({ r: 255, g: 255, b: 255 });
	await speak("Hello Ethan", true);
	await delay(1);
	for (var NumberTurn = 0; NumberTurn < 4; NumberTurn++) {
		setMainLed(getRandomColor());
		await Sound.Game.Coin.play(true);
		await roll((getHeading() + 90), 90, .5);
		await delay(1);
		
	}
	
}