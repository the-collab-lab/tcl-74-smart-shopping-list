import logo from '../assets/logo.png';

export function LandingPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-bgPrimary p-6 sm:p-8 md:p-10">
			<img
				src={logo}
				alt="CollabShop Logo, a collaboration platform for grocery shopping."
				className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto mb-6 max-w-full rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300 ease-in-out"
			/>
			<h1 className="bg-[#99D98C] text-txtPrimary text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 p-4 rounded-lg shadow-sm max-w-2xl">
				<strong>CollabShop</strong> is more than just a grocery app—it&apos;s a
				tool that embodies the spirit of teamwork and collaboration.
			</h1>
			<p className="bg-[#99D98C] text-txtPrimary text-base sm:text-lg md:text-xl text-center mb-4 p-4 rounded-lg shadow-sm max-w-2xl leading-relaxed">
				Created by early-career developers from{' '}
				<a
					href="https://the-collab-lab.codes/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-txtPrimary font-bold underline hover:text-[#1A759F] transition duration-300"
				>
					<strong>The Collab Lab</strong>
				</a>
				, our smart shopping list app learns your buying habits, reminds you of
				what you might need for your next store run, and allows you to
				effortlessly share and collaborate on lists.
			</p>

			<p className="bg-[#99D98C] text-txtPrimary font-semibold text-base sm:text-lg md:text-xl text-center mb-6 p-4 rounded-lg shadow-sm max-w-xl">
				With CollabShop, planning your grocery trips becomes a seamless and
				enjoyable experience!
			</p>
			<p className="bg-[#99D98C] text-txtPrimary text-lg sm:text-xl md:text-2xl text-center font-bold mb-6 p-4 rounded-lg shadow-sm max-w-lg">
				Ready to start your journey? Click the sign-in button below to begin.
			</p>
		</div>
	);
}
