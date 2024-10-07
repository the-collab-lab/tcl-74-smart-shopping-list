import logo from '../assets/logo.png';

export function Loading() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-[#99D98C]">
			<img
				src={logo}
				alt="CollabShop Logo, a collaboration platform for grocery shopping."
				className="w-24 sm:w-32 md:w-40 h-auto mb-4"
			/>
			<h2 className="text-[#184E77] text-base sm:text-lg md:text-xl font-semibold">
				Please hold on while we prepare your experience.
			</h2>
		</div>
	);
}
