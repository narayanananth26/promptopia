import mongoose from "mongoose";

// track the connection
let isConnected = false;

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("MongoDB is lready connected");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbNAME: "share_prompt",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		isConnected = true;

		console.log("MongoDB connected");
	} catch (error) {
		console.log(error);
	}
};
