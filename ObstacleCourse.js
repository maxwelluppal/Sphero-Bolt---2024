// Programmer: Max Uppal
// Team Member: Ethan VanLandegent
// Bolt ID: SB-EC76
// Date: 4-24-24
// Program: Obstacle Course - Sandbox
// Program URL: https://edu.sphero.com/program/16752514/edit

async function startProgram() {
	//Maxwell Uppal
	await roll((getHeading() + 35), 120, 1.57);
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
	
	
}