const {
	scan,
	parseCredentials,
} = require('node-appletv');
const methods = {
	async scan() {
		// devices is an array of AppleTV objects
		const devices = await scan();
		return devices;
	},
	async pairNew(device, setPin) {
		await device.openConnection();
		const pairDevice = await device.pair();
		// the pin is provided onscreen from the Apple TV
		const pin = await setPin();
		await pairDevice(pin);
		// you're paired!
		const credentialsString = device.credentials.toString();
		const credentials = parseCredentials(credentialsString);
		console.log(credentialsString, credentials, `The identifier is the first value in the string value of the Credentials object.`);
		return device;
	},
	async pair(device) {
		const credentialsString = device.credentials.toString();
		const credentials = parseCredentials(credentialsString);
		console.log(credentialsString, credentials);
		return;
		const devices = await scan(uniqueIdentifier);
		let device = devices[0];
		await device.openConnection(credentials);
		// you're connected!
		// press menu
		console.log('Sent a menu command!');
		// monitor now playing info
		device.on('nowPlaying', (info) => {
			console.log(info.toString());
		});
	}
};
module.exports = methods;
