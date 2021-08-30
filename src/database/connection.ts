import { Pool } from "pg";

const createConnection = async () => {
	const client = new Pool({
		host: process.env.HOST_DB,
		port: parseInt(process.env.PORT_DB, 10),
		user: process.env.USER_DB,
		password: process.env.PASSWORD_DB,
		database: process.env.DATABASE_DB,
	});

	await client.connect();

	return { client };
};

export { createConnection };
