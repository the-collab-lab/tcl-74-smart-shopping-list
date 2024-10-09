import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { Loading } from '../components/Loading';
import doribelAvatar from '../assets/avatars/doribelAvatar.jpg';
import nicholasAvatar from '../assets/avatars/nicholasAvatar.png';
import shuvekshaAvatar from '../assets/avatars/shuvekshaAvatar.jpg';
import stacyAvatar from '../assets/avatars/stacyAvatar.jpg';
import ejAvatar from '../assets/avatars/ejAvatar.png';
import jennyAvatar from '../assets/avatars/jennyAvatar.jpg';
import meganAvatar from '../assets/avatars/meganAvatar.jpg';
import { useEffect, useState } from 'react';

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
		photo: ejAvatar,
		github: 'https://github.com/mxmason',
		linkedin: 'https://www.linkedin.com/in/mxmason/',
		portfolio: 'http://www.ejmason.com',
	},
	{
		name: 'Jenny Takahara',
		photo: jennyAvatar,
		github: 'https://github.com/jtkabenni',
		linkedin: 'https://www.linkedin.com/in/ehime-takahara/',
		portfolio: 'https://www.jennytakahara.com/',
	},
	{
		name: 'Megan Sullivan',
		photo: meganAvatar,
		github: 'https://github.com/meganesu',
		linkedin: 'https://www.linkedin.com/in/meganesu/',
		portfolio: 'https://meganesulli.com/',
	},
];

export function Team() {
	/* This will be removed once the Logo ticket is finalized to ensure the UI is correct. */
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="bg-bgPrimary p-10 text-center">
			<h1 className="mb-5 text-txtPrimary text-4xl font-bold">
				Meet the Team Behind CollabShop
			</h1>
			<p className="mb-10 text-txtPrimary text-lg leading-relaxed">
				We are a passionate group of developers, united by our love for learning
				and collaboration. Our goal is to create an experience that feels
				friendly, inclusive, and helpful for all users. Let&apos;s connect and
				grow together!
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
				{developers.map((dev, index) => (
					<div
						key={index}
						className="bg-[#168AAD] rounded-lg p-6 shadow-lg w-72 transition-transform transform hover:scale-105 hover:shadow-2xl"
					>
						<img
							src={dev.photo}
							alt={dev.name ? `${dev.name}'s photo` : 'Developer photo'}
							className="w-35 h-35 object-cover object-top mx-auto mb-4"
						/>
						<h3 className="text-[#B5E48C] text-xl font-semibold mb-2">
							{dev.name}
						</h3>
						<div className="flex justify-center gap-4">
							<a href={dev.github} target="_blank" rel="noopener noreferrer">
								<FaGithub
									className="text-[#0e324e] hover:text-[#52b788] transition-colors"
									size={24}
								/>
							</a>
							<a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
								<FaLinkedin
									className="text-[#0e324e] hover:text-[#52b788] transition-colors"
									size={24}
								/>
							</a>
							{dev.portfolio && (
								<a
									href={dev.portfolio}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGlobe
										className="text-[#0e324e] hover:text-[#52b788] transition-colors"
										size={24}
									/>
								</a>
							)}
						</div>
					</div>
				))}
			</div>
			<h2 className="mt-10 mb-5 text-[#1A759F] text-3xl font-extrabold text-center tracking-wider">
				Mentors
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
				{mentors.map((mentor, index) => (
					<div
						key={index}
						className="bg-[#168AAD] rounded-lg p-6 shadow-lg w-72 transition-transform transform hover:scale-105 hover:shadow-2xl"
					>
						<img
							src={mentor.photo}
							alt={mentor.name ? `${mentor.name}'s photo` : 'Mentor photo'}
							className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
						/>
						<h3 className="text-[#B5E48C] text-xl font-semibold mb-2">
							{mentor.name}
						</h3>
						<div className="flex justify-center gap-4">
							<a href={mentor.github} target="_blank" rel="noopener noreferrer">
								<FaGithub
									className="text-[#0e324e] hover:text-[#52b788] transition-colors"
									size={24}
								/>
							</a>
							<a
								href={mentor.linkedin}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin
									className="text-[#0e324e] hover:text-[#52b788] transition-colors"
									size={24}
								/>
							</a>
							{mentor.portfolio && (
								<a
									href={mentor.portfolio}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGlobe
										className="text-[#0e324e] hover:text-[#52b788] transition-colors"
										size={24}
									/>
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
