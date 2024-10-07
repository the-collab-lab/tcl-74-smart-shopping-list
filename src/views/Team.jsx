import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import doribelAvatar from '../assets/avatars/doribelAvatar.jpg';
import nicholasAvatar from '../assets/avatars/nicholasAvatar.png';
import shuvekshaAvatar from '../assets/avatars/shuvekshaAvatar.jpg';
import stacyAvatar from '../assets/avatars/stacyAvatar.jpg';
// import mentor1Avatar from '../assets/avatars/mentor1Avatar.jpg';
// import mentor2Avatar from '../assets/avatars/mentor2Avatar.jpg';

const developers = [
	{
		name: 'Doribel Tercero-Parker',
		photo: doribelAvatar,
		github: 'https://github.com/dterceroparker',
		linkedin: 'https://www.linkedin.com/in/doribelt-p/',
		portfolio: 'http://doribel-portfolio.netlify.app/',
	},
	{
		name: 'Nicholas Rocco',
		photo: nicholasAvatar,
		github: 'https://github.com/NickRoccodev11',
		linkedin: 'https://www.linkedin.com/in/nicholasroccodev/',
		portfolio: 'https://nicholasroccodev.netlify.app/',
	},
	{
		name: 'Shuveksha Tuladhar',
		photo: shuvekshaAvatar,
		github: 'https://github.com/shuveksha-tuladhar',
		linkedin: 'https://www.linkedin.com/in/shuvekshatuladhar/',
		portfolio: 'https://shuveksha-tuladhar.github.io/',
	},
	{
		name: 'Stacy Daniel',
		photo: stacyAvatar,
		github: 'https://github.com/stacy-tech',
		linkedin: 'https://www.linkedin.com/in/stacy-d/',
	},
];

const mentors = [
	{
		name: 'EJ Mason',
		// photo: mentor1Avatar,
		github: 'https://github.com/mentor1',
		linkedin: 'https://www.linkedin.com/in/mentor1/',
		portfolio: 'https://mentor1-portfolio.com',
	},
	{
		name: 'Megan Sullivan',
		// photo: mentor2Avatar,
		github: 'https://github.com/mentor2',
		linkedin: 'https://www.linkedin.com/in/mentor2/',
		portfolio: 'https://mentor2-portfolio.com',
	},
	{
		name: 'Jenny Takahara',
		// photo: mentor2Avatar,
		github: 'https://github.com/mentor2',
		linkedin: 'https://www.linkedin.com/in/mentor2/',
		portfolio: 'https://mentor2-portfolio.com',
	},
];

export function Team() {
	return (
		<div className="bg-[#99D98C] p-10 text-center">
			<h1 className="mb-5 text-[#184E77] text-4xl font-bold">
				Meet the Team Behind CollabShop
			</h1>
			<p className="mb-10 text-[#184E77] text-lg leading-relaxed">
				We are a passionate group of developers, united by our love for learning
				and collaboration. Our goal is to create an experience that feels
				friendly, inclusive, and helpful for all users. Let&apos;s connect and
				grow together!
			</p>
			{/* Developers Section */}
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

			{/* Mentors Section */}
			<h2
				style={{
					marginTop: '40px',
					color: '#333',
					fontSize: '1.8em',
				}}
			>
				Mentors
			</h2>
			<div
				className="team-container"
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '20px',
				}}
			>
				{mentors.map((mentor, index) => (
					<div
						className="mentor-card"
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
							src={mentor.photo}
							alt={mentor.name ? `${mentor.name}'s photo` : 'Mentor photo'}
							style={{
								width: '100px',
								height: 'auto',
								borderRadius: '5%',
								boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
								marginBottom: '15px',
							}}
						/>
						<h3 style={{ color: '#555', marginBottom: '10px' }}>
							{mentor.name}
						</h3>
						<div
							className="mentor-links"
							style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
						>
							<a
								href={mentor.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${mentor.name} GitHub`}
								style={{ color: '#333' }}
							>
								<FaGithub size={24} />
							</a>
							<a
								href={mentor.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${mentor.name} LinkedIn`}
								style={{ color: '#0077b5' }}
							>
								<FaLinkedin size={24} />
							</a>
							{mentor.portfolio && (
								<a
									href={mentor.portfolio}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${mentor.name} Portfolio`}
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
