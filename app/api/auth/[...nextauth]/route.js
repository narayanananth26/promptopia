// * AUTHORIZATION HANDLER

const { default: NextAuth } = require("next-auth/next");
import { connectToDB } from "@utils/database";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	async session({ session }) {},
	async signIn({ profile }) {
		try {
			await connectToDB();

			// 1. check if a user already exists

			// 2. If not, create a new user

			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	},
});

export { handler as GET, handler as POST };
