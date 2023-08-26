"use client";

import Link from "next/link";
import Image from "next/image";
import { getProviders, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

function Nav() {
	const isUserLoggedIn = true;

	const [providers, setProviders] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await getProviders();
			setProviders(res);
		})();
	}, []);

	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap2 flex-center">
				<Image
					src="/assets/images/logo.svg"
					alt="Promptopia logo"
					width={30}
					height={30}
					className="object-contain"
				/>
				<p className="logo_text">Promptopia</p>
			</Link>

			{/* Desktop navigation */}
			<div className="sm:flex hidden">
				{isUserLoggedIn ? (
					<div className="flex gap-3 md:gap-5">
						<Link href="/create-prompt" className="black_btn">
							Create Post
						</Link>

						<button
							type="button"
							onClick={signOut}
							className="outline_btn"
						>
							Sign Out
						</button>

						<Link href="/profile">
							<Image
								src="/assets/images/logo.svg"
								width={30}
								height={30}
								className="rounded-full"
								alt="User profile"
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => {
								<button
									type="button"
									key={provider.name}
									onClick={() => {
										signIn(provider.id);
									}}
									className="black_btn"
								>
									Sign In
								</button>;
							})}
					</>
				)}
			</div>
		</nav>
	);
}

export default Nav;
