import { Router } from "express";
import db from "./db";
import cors from "cors";

const router = new Router();

router.use(cors());

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

router.get("/health", (_, res) => {
	db.query("select version()").then((result) => {
		if (result.rows.length > 0) {
			res.status(200).send({ server: result.rows[0] });
		}
	});
});

router.get("/categories", (_, res) => {
	db.query("SELECT id, name FROM category")
		.then((result) => {
			console.debug("successfully got all categories", result);
			if (result.rows.length > 0) {
				res.status(200).send({ results: result.rows });
			}
		})
		.catch((error) => {
			console.error("Failed to get all categories", error);
			res
				.status(500) // Internal server error
				.json({ message: "Oh, no! Something went wrong... Sorry about that!" });
		});
});

export default router;
