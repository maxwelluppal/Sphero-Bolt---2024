// Programmer: Ethan VanLandegent
// Team Member: Max Uppal
// Bolt ID: SB-EC76
// Date: 4-30-24
// Program: Maze Competition 
// Program URL: https://edu.sphero.com/program/16788332/edit

async function startProgram() {
	// Programmer: Maxwell Uppal - Start Text & Audio Checkpoint Commit - Date: 4/30/24
	await scrollMatrixText('Start', { r: 66, g: 56, b: 255 }, 30, true)
	await speak("Start", true);
	

	// Programmer: Ethan Vanlandegent - Blue LED Checkpoint Commit - Date: 4/30/24
	await roll((getHeading() + 0), 50, 3.4);
	await delay(1)
	setMainLed({ r: 0, g: 0, b: 255 });
	await delay(1)


	// Programmer: Maxwell Uppal - Sound One Checkpoint Commit - Date:4/30/24
	await roll((getHeading() + 90), 50, 2.45);
	await delay(1)
	await Sound.ScienceFiction.Blaster.play(true); 
	await delay(1)
	


	// Programmer: Ethan Vanlandegent - Red LED Checkpoint Commit - Date:5/1/24 
	await roll((getHeading() + 90), 50, 1.6);
	await delay(1)
	await roll((getHeading() + 38), 50, 1.45);
	await delay(1)


	// Programmer: Maxwell Uppal - Sound Two Checkpoint Commit - Date:5/1/24
	await roll((getHeading() - 90), 50, .75);
	await delay(1)
	await roll((getHeading() - 90), 50, 1.4);
	await delay(1)
	await Sound.ScienceFiction.Blaster.play(true);


	// Programmer:Ethan VanLandegent - Green LED Checkpoint Commit - Date: 5/1/24
	await roll((getHeading() + 90), 50, 1.2);
	await delay(1)
	await roll((getHeading() + 45), 50, .75);
	await delay(1)
	setMainLed({ r: 0, g: 255, b: 0 });
	// Programmer: Maxwell Uppal - Purple LED & Sound Three Checkpoint Commit - Date:5/2/24
	await roll((getHeading() - 90), 50, 0,9);
	await delay(1)
	await roll((getHeading() - 90), 50, 1.15);
	await delay(1)
	await roll((getHeading() - 90), 50, 1.05);
	await delay(1)
	await roll((getHeading() - 45), 50, 1.2);
	await delay(1)
	setMainLed({ r: 128, g: 0, b: 128 });
	await Sound.ScienceFiction.Blaster.play(true);
	// Programmer: Ethan Vanlandegent - Finish Text & Audio Commit - Date:5/2/24
	await roll((getHeading() + 45), 50, 3);
	await scrollMatrixText('Finish', { r: 66, g: 56, b: 255 }, 30, true)
	await speak("Finish", true);

}
