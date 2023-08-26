import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	async session({ session }) {
		try {
			await connectToDB();

			// check if a user already exists

			// if not, create a new user

			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	},
	async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
