export function Loading() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-bgPrimary dark:bg-bgPrimaryDark">
			<div className="flex flex-col items-center animate-fadeIn">
				<h2 className="text-txtPrimary dark:text-txtPrimaryDark text-sm sm:text-base md:text-lg font-semibold mb-2">
					Please hold on while we prepare your experience.
				</h2>
				<div className="w-10 h-10 border-t-4 border-blue-300 dark:border-blue-500 rounded-full animate-spin"></div>
			</div>
		</div>
	);
}
