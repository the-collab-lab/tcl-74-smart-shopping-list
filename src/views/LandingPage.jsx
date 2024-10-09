import logo from '../assets/logo.png';

export function LandingPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-bgPrimary p-6">
			<img
				src={logo}
				alt="CollabShop Logo, a collaboration platform for grocery shopping."
				className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto mb-6"
			/>
			<h1 className="text-txtPrimary text-xl sm:text-2xl md:text-4xl font-bold text-center mb-4">
				<strong>CollabShop</strong> is more than just a grocery app—it&apos;s a
				tool that embodies the spirit of teamwork and collaboration. Created by
				early-career developers from{' '}
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
				effortlessly share and collaborate on lists. With CollabShop, planning
				your grocery trips becomes a seamless and enjoyable experience!
			</h1>
			<p className="text-txtPrimary font-bold text-base sm:text-lg md:text-xl text-center mb-6">
				Ready to start your journey? Click the sign-in button below to begin
				planning your grocery runs with CollabShop today.
			</p>
		</div>
	);
}
