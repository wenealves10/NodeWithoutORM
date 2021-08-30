import path from "path";
import fs from "fs";
import dotenv from "dotenv";

import { createConnection } from "./connection";

dotenv.config();

(async () => {
	console.log("Start migrations", new Date());
	const { client } = await createConnection();

	const fileDatabaseDir = path.join(__dirname, "migrations");

	fs.readdir(fileDatabaseDir, (err, files) => {
		if (err) {
			console.error(err);
		}
		files.forEach((file) => {
			fs.readFile(path.join(fileDatabaseDir, file), async (error, content) => {
				if (error) {
					console.error(error);
				}

				const runMigrationsQuery = content.toString();
				await client.query(runMigrationsQuery);
			});
		});
	});

	console.log("Finish migrations", new Date());
})();
