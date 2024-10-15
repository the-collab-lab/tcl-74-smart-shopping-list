export function LandingPage() {
	return (
		<div className="bg-bgPrimary dark:bg-bgPrimaryDark flex flex-col items-center justify-center p-6 sm:p-8 md:p-10">
			<h1 className=" text-txtPrimary dark:text-txtPrimaryDark text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 p-4 rounded-lg max-w-2xl">
				<strong>CollabShop</strong> is more than just a grocery app—it&apos;s a
				tool that embodies the spirit of teamwork and collaboration.
			</h1>
			<p className="text-txtPrimary dark:text-txtPrimaryDark text-base sm:text-lg md:text-xl text-center mb-4 p-4 rounded-lg max-w-2xl leading-relaxed">
				Created by early-career developers from{' '}
				<a
					href="https://the-collab-lab.codes/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-txtPrimary dark:text-txtPrimaryDark font-bold underline hover:text-[#1A759F] transition duration-300"
				>
					<strong>The Collab Lab</strong>
				</a>
				, our smart shopping list app learns your buying habits, reminds you of
				what you might need for your next store run, and allows you to
				effortlessly share and collaborate on lists.
			</p>

			<p className=" text-txtPrimary dark:text-txtPrimaryDark font-semibold text-base sm:text-lg md:text-xl text-center mb-6 p-4 rounded-lg max-w-xl">
				With CollabShop, planning your grocery trips becomes a seamless and
				enjoyable experience!
			</p>
			<p className="text-txtPrimary dark:text-txtPrimaryDark text-lg sm:text-xl md:text-2xl text-center font-bold mb-6 p-4 rounded-lg max-w-lg">
				Ready to start your journey? Click the sign-in button below to begin.
			</p>
		</div>
	);
}
