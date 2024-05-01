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
	await roll((getHeading() + 0), 50, 3.5);
	setMainLed({ r: 0, g: 0, b: 255 });


	// Programmer: Maxwell Uppal - Sound One Checkpoint Commit - Date:4/30/24
	await roll((getHeading() + 90), 50, 2.4);
	await Sound.ScienceFiction.Blaster.play(true);
	


	// Programmer: Ethan Vanlandegent - Red LED Checkpoint Commit - Date:5/1/24 
	await roll((getHeading() + 90), 50, 1.92);
	await roll((getHeading() + 45), 50, 1.4);


	// Programmer: Maxwell Uppal - Sound Two Checkpoint Commit - Date:5/1/24



	// Programmer:               - Green LED Checkpoint Commit - Date: 



	// Programmer:               - Purple LED & Sound Three Checkpoint Commit - Date:



	// Programmer:               - Finish Text & Audio Commit - Date: 

}
