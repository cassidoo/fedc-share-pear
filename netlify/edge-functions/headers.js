export default async (request, context) => {
	const response = await context.next();

	// Handle preflight requests
	if (request.method === "OPTIONS") {
		return new Response("ok", {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Content-Type, markdown"
			}
		});
	}

	response.headers.set("Access-Control-Allow-Origin", "*");

	// Accept markdown header
	response.headers.set(
		"Access-Control-Allow-Headers",
		"Content-Type, markdown"
	);

	// Cache for 30 days
	response.headers.set("Cache-Control", "public, max-age=2592000, immutable");

	return response;
};
