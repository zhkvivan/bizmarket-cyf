import { Router } from "express";
import db from "./db";

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

router.get("/health", (_, res) => {
	db.query("select version()")
		.then((result) => {
			if(result.rows.length > 0) {
				res.status(200).send({ server:result.rows[0] });
			}
		});

});

router.get();

export default router;

