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
				.status(500)
				.json({ message: "Oh, no! Something went wrong... Sorry about that!" });
		});
});

/*
input expected:
    {
        'title': 'My new Ad!',
        'price': '£4.50',
        'quantity': '400',
        'description': 'This is an add for 400 chicken nuggets',
        'location': 'Glasgow',
        'imageURL': 'https://placekitten.com/g/200/300'
    }
*/
router.post("/ad", (req, res) => {
	const input = req.body;

	const parameterizedInsertStatement = `
		INSERT INTO adListing(
			adTitle, 
			sellerName,
    		sellerCompany,
    		sellerPhone,
    		sellerEmail,
			accountId, 
			createdDate, 
			updatedDate, 
			price, 
			quantity, 
			minQuantity,
			description, 
			location, 
			imageURL, 
			categoryId) 
		VALUES($1, $2, $3, $4, $5, 1, current_timestamp, current_timestamp, $6, $7, $8, $9, $10, $11, 1);`;

	const parameterizedQueryValues = [
		input.title,
		input.sellerName,
		input.sellerCompany,
		input.sellerPhone,
		input.sellerEmail,
		input.price,
		input.quantity,
		input.minQuantity,
		input.description,
		input.location,
		input.imageURL,
	];

	db.query(parameterizedInsertStatement, parameterizedQueryValues)
		.then((result) => {
			console.debug("Successfully created ad", result);
			res
				.status(201) // CREATED status code to let user know create worked!
				.json({ message: "Ad created successfully" });
		})
		.catch((error) => {
			console.error("Failed to create new Ad ", error);
			res
				.status(500) // Internal server error
				.json({ message: "Oh, no! Something went wrong... Sorry about that!" });
		});
});

export default router;
