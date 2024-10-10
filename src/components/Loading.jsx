import logo from '../assets/logo.png';

export function Loading() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-bgPrimary">
			<div className="flex flex-col items-center animate-fadeIn">
				<img
					src={logo}
					alt="CollabShop Logo, a collaboration platform for grocery shopping."
					className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto mb-6 max-w-full rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300 ease-in-out"
				/>
				<h2 className="text-txtPrimary text-sm sm:text-base md:text-lg font-semibold mb-2">
					Please hold on while we prepare your experience.
				</h2>
				<div className="w-10 h-10 border-t-4 border-blue-300 rounded-full animate-spin"></div>
			</div>
		</div>
	);
}
