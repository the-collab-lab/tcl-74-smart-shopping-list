import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const developers = [
	{
		name: 'Doribel Tercero-Parker',
		photo: 'public/img/doribel.jpg',
		github: 'https://github.com/dterceroparker',
		linkedin: 'https://www.linkedin.com/in/doribelt-p/',
		portfolio: 'http://doribel-portfolio.netlify.app/',
	},
	{
		name: 'Nicholas Rocco',
		photo: 'public/img/nicholas.png',
		github: 'https://github.com/NickRoccodev11',
		linkedin: 'https://www.linkedin.com/in/nicholasroccodev/',
		portfolio: 'https://nicholasroccodev.netlify.app/',
	},
	{
		name: 'Shuveksha Tuladhar',
		photo: 'public/img/shuveksha.jpg',
		github: 'https://github.com/shuveksha-tuladhar',
		linkedin: 'https://www.linkedin.com/in/shuvekshatuladhar/',
		portfolio: 'https://shuveksha-tuladhar.github.io/',
	},
	{
		name: 'Stacy Daniel',
		photo: 'public/img/stacy.jpg',
		github: 'https://github.com/stacy-tech',
		linkedin: 'https://www.linkedin.com/in/stacy-d/',
	},
];

export function Team() {
	return (
		<div
			style={{
				padding: '20px',
				textAlign: 'center',
				backgroundColor: '#f9f9f9',
			}}
		>
			<h1
				style={{
					marginBottom: '20px',
					color: '#333',
					fontSize: '2em',
				}}
			>
				Meet the Team Behind CollabShop
			</h1>
			<p
				style={{
					marginBottom: '40px',
					color: '#555',
					fontSize: '1em',
					lineHeight: '1.6',
				}}
			>
				We are a passionate group of developers, united by our love for learning
				and collaboration. Our goal is to create an experience that feels
				friendly, inclusive, and helpful for all users. Let&apos;s connect and
				grow together!
			</p>
			<div
				className="team-container"
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '20px',
				}}
			>
				{developers.map((dev, index) => (
					<div
						className="developer-card"
						key={index}
						style={{
							backgroundColor: '#fff',
							borderRadius: '8px',
							padding: '20px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: '250px',
							transition: 'transform 0.3s, box-shadow 0.3s',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-5px)';
							e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(0)';
							e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
						}}
					>
						<img
							src={dev.photo}
							alt={dev.name ? `${dev.name}'s photo` : 'Developer photo'}
							style={{
								width: '100px',
								height: 'auto',
								borderRadius: '5%',
								boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
								marginBottom: '15px',
							}}
						/>
						<h3 style={{ color: '#555', marginBottom: '10px' }}>{dev.name}</h3>
						<div
							className="developer-links"
							style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
						>
							<a
								href={dev.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${dev.name} GitHub`}
								style={{ color: '#333' }}
							>
								<FaGithub size={24} />
							</a>
							<a
								href={dev.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${dev.name} LinkedIn`}
								style={{ color: '#0077b5' }}
							>
								<FaLinkedin size={24} />
							</a>
							{dev.portfolio && (
								<a
									href={dev.portfolio}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${dev.name} Portfolio`}
									style={{ color: '#000' }}
								>
									<FaGlobe size={24} />
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
