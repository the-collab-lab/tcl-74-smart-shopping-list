import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';

export default function ModalDialog({ isOpen, onClose, children, title }) {
	return (
		<Dialog open={isOpen} onClose={onClose} className="relative z-10">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<DialogPanel
						transition
						className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full lg:w-[50rem] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
					>
						<div className="bg-white px-8 pb-6 pt-6 sm:py-12 sm:px-6">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
									<DialogTitle
										as="h3"
										className="text-3xl m-1 py-1 font-bold leading-6 text-txtPrimary"
									>
										{title}
									</DialogTitle>
									<div className="mt-2">
										<p className="text-xl text-gray-500">{children}</p>
									</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
