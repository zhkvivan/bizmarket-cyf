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
	db.query("SELECT id, name, link FROM category")
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
router.post("/addad", (req, res) => {
	const input = req.body;

	const parameterizedInsertStatement = `
		INSERT INTO adListing(
			adTitle, 
			sellerName,
			sellerCompany,
			sellerPhone,
			sellerEmail,
			createdDate, 
			updatedDate, 
			price, 
			quantity, 
			minQuantity,
			description, 
			location, 
			imageURL, 
			categoryId) 
		VALUES($1, $2, $3, $4, $5, current_timestamp, current_timestamp, $6, $7, $8, $9, $10, $11, $12) RETURNING id, imageURL;`;

	const parameterizedQueryValues = [
		input.adTitle,
		input.sellerName,
		input.sellerCompany,
		input.sellerPhone,
		input.sellerEmail,
		input.price,
		input.quantity,
		input.minimumQuantity,
		input.description,
		input.location,
		input.image,
		input.category,
	];

	db.query(parameterizedInsertStatement, parameterizedQueryValues)
		.then((result) => {
			console.debug("Successfully created ad", result.rows);
			res.status(201).json({
				message: "Ad created successfully",
				ad: result.rows[0],
			});
		})
		.catch((error) => {
			console.error("Failed to create new Ad ", error);
			res
				.status(500)
				.json({ message: "Oh, no! Something went wrong... Sorry about that!" });
		});
});

router.get("/ad", (req, res) => {
	const input = req.body;
	const parameterizedQueryValues = [input];

	const parameterizedInsertStatement = `SELECT * FROM adListing WHERE id = $1 and where categoryId = $2`;
	db.query(parameterizedInsertStatement, parameterizedQueryValues)
		.then((result) => {
			//console.debug("successfully got the ads", result.rows);
			if (result.rows.length > 0) {
				res.status(200).send({ results: result.rows });
			} else {
				res.status(404).json({ message: "Not Found" });
			}
		})
		.catch((error) => {
			console.error("Failed to get all ads", error);
			res
				.status(500) // Internal server error

				.json({ message: "Oh, no! Something went wrong... Sorry about that!" });
		});
});

router.get("/viewads", (_, res) => {
	db.query(
		// "SELECT ad.adTitle, ad.sellerName, ad.sellerCompany,ad.sellerPhone,ad.sellerEmail,ad.expiryDate,ad.price,ad.quantity,ad.minQuantity,ad.description,ad.location,ad.imageURL,cat.id,cat.name FROM adListing  ad INNER JOIN  category  cat ON  ad.categoryId=cat.Id"
		"SELECT * from adListing"
	)
		.then((result) => {
			//onsole.debug(result);
			if (result.rows.length > 0) {
				res.status(200).send({ results: result.rows });
			}
		})
		.catch((error) => {
			console.error("Failed to get all ads", error);
			res
				.status(500)
				.json({ message: "Oh, no! Something went wrong... Sorry about that!" });
		});
});

export default router;
