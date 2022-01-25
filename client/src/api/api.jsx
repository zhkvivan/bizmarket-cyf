import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:3100",
});

export const Post = async (url, data) => {
	await instance.post(url, data);
	console.log("Data has been sent to the server");
};

export const Get = async (url) => {
	const data = await instance.get(url);
	return data;
};
