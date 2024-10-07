export function Loading() {
	return (
		<div style={{ textAlign: 'center', padding: '20px' }}>
			<img
				src={`${import.meta.env.BASE_URL}logo.png`}
				alt="Loading..."
				style={{ width: '150px' }}
			/>
			<h2>Please hold on while we prepare your experience.</h2>
		</div>
	);
}
