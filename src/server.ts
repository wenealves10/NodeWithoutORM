import express from "express";
import "./database/runMigrations";
import { router } from "./router";

const app = express();
app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
	const language =
		req.rawHeaders[req.rawHeaders.indexOf("Accept-Language") + 1].split(",")[0];

	if (language.toLowerCase() === "pt-br") {
		res.send("Olá mundo!");
		res.end();
	} else {
		res.send("Hello World");
		res.end();
	}
});

app.listen(3000, () => console.log("Server is running on port 3000"));
