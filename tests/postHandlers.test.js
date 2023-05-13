// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "Kelsey",
	"cardId": 5
}

test('Should return 201 status code', async () => {
let actualStatusCode;
try {
	const response = await fetch(`${config.API_URL}/api/v1/kits`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	});
	actualStatusCode = response.status;
} catch (error) {
	console.error(error);
}
expect(actualStatusCode).toBe(201);
});


test('Response body should contain the name as Kelsey', async () => {
let actualResponseBody;
try {
	const response = await fetch(`${config.API_URL}/api/v1/kits`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	});
	actualResponseBody = await response.json();
} catch (error) {
	console.error(error);
}
expect(actualResponseBody.name).toBe("Kelsey");
});