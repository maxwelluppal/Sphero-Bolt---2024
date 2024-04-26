// Programmer: Ethan VanLandegent
// Team Member: Max Uppal
// Bolt ID: SB-EC76
// Date: 4-24-24
// Program: My Obstacle Course - Sandbox
// Program URL: https://edu.sphero.com/program/16752539/edit

async function startProgram() {
	//Maxwell Uppal
	await roll((getHeading() + 35), 120, 1.52);
	//Ethan VanLandegent
	await delay(1);
	await roll((getHeading() - 35), 120, 1.15);
	//Maxwell Uppal
	await delay(1);
	await roll((getHeading() - 90), 120, 1.2);
	//Ethan VanLandegent
	await delay(1);
	await roll((getHeading() - 90), 120, 0.7);
	await roll((getHeading() - 90), 120, 0.3);
	await roll((getHeading() - 45), 120, 1.5);
	// Maxwell Uppal - PC #12 - 5th Checkpoint
	setMainLed({ r: 160, g: 32, b: 240 });
	await delay(1);
	await roll((getHeading() - 45), 120, .5);
	await roll((getHeading() - 90), 120, 1.2);
	await roll((getHeading() - 140), 120, 2);
	//Ethan VanLandegent - PC #13 - 6th Checkpoint Final
	setMainLed({ r: 255, g: 255, b: 0 });
	await delay(1);
	await roll((getHeading() + 45), 120, 3);
	await roll((getHeading() + 90), 120, 1.125);
}