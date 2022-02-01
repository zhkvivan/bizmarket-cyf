import { Pool } from "pg";
import fs from "fs";

const dbUrl =
	process.env.DATABASE_URL || "postgres://localhost:5432/final_project";

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: dbUrl.includes("localhost") ? false : { rejectUnauthorized: false },
});

export const connectDb = async () => {
	let client;
	try {
		const sql = fs.readFileSync("./server/model/schema.sql").toString();
		const mock = fs.readFileSync("./server/model/data.sql").toString();
		client = await pool.connect();
		client.query(sql, (err, _) => {
			if (err) {
				console.log("Error creating database or it already exists so continuing anyway");
			}
			client.query(mock, (_, response) => console.log('Created mock data'));
		});
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("Postgres connected to", client.database);
	client.release();
};

export const disconnectDb = () => pool.close();

export default { query: pool.query.bind(pool) };
