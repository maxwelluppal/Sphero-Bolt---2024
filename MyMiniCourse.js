// Programmer: Max Uppal
// Team Member: Ethan VanLandegent
// Bolt ID: SB-EC76
// Date: 4-23-24
// Program: Hello World - Sandbox
// Program URL: https://edu.sphero.com/program/16700420/edit

async function startProgram() {
	await roll((getHeading() + 45), 120, 1);
	await roll((getHeading() - 90), 120, 1.5);
	await roll((getHeading() + 45), 120, .3);
	await roll((getHeading() + 45), 120, .5);
}
