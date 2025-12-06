"use client";

import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
			<h1 className="text-6xl font-bold text-blue-500 mb-2">404</h1>
			<p className="text-gray-400 mb-6">Page Not Found</p>
			<Link
				href="/"
				className="bg-blue-600 px-5 py-2 rounded-md hover:bg-blue-700 transition"
			>
				Go Home
			</Link>
		</div>
	);
}
