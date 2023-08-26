"use client";

import Link from "next/link";
import Image from "next/image";

function Nav() {
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
		</nav>
	);
}

export default Nav;
