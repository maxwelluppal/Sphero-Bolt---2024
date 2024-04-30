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


	// Programmer:               - Sound One Checkpoint Commit - Date:
	


	// Programmer:               - Red LED Checkpoint Commit - Date: 



	// Programmer:               - Sound Two Checkpoint Commit - Date: 



	// Programmer:               - Green LED Checkpoint Commit - Date: 



	// Programmer:               - Purple LED & Sound Three Checkpoint Commit - Date:



	// Programmer:               - Finish Text & Audio Commit - Date: 

}
