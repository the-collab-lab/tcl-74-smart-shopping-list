import logo from '../assets/logo.png';

export function Loading() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-bgPrimary">
			<div className="flex flex-col items-center animate-fadeIn">
				<img
					src={logo}
					alt="CollabShop Logo, a collaboration platform for grocery shopping."
					className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 animate-pulse"
				/>
				<h2 className="text-txtPrimary text-sm sm:text-base md:text-lg font-semibold mb-2">
					Please hold on while we prepare your experience.
				</h2>
				<div className="w-10 h-10 border-t-4 border-blue-300 rounded-full animate-spin"></div>
			</div>
		</div>
	);
}
