import mongoose from "mongoose";

const <collectionName>Schema = new mongoose.Schema({
	database: String,
	list: String,
}

const <collectionName> = mongoose.model("<collectionName>", <collectionName>Schema);

export default <collectionName>;
