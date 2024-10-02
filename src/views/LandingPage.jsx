import './LandingPage.css';

export function LandingPage() {
	return (
		<div className="landing-container">
			<img
				src={`${import.meta.env.BASE_URL}logo.png`}
				alt="Logo"
				className="logo"
			/>
			<h1 className="main-heading">
				<strong>CollabShop</strong> is more than just a grocery app—it&apos;s a
				tool that embodies the spirit of teamwork and collaboration. Created by
				early-career developers from{' '}
				<a
					href="https://the-collab-lab.codes/"
					target="_blank"
					rel="noopener noreferrer"
					className="collab-lab-link"
				>
					<strong>The Collab Lab</strong>
				</a>
				, it allows you to effortlessly share and work together on lists,
				bringing people closer, even when planning something as simple as a
				grocery run.
			</h1>
			<p className="subheading">
				Ready to start your journey? Click the sign-in button below to begin
				planning your grocery runs with CollabShop today.
			</p>
		</div>
	);
}
