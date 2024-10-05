import { useState } from 'react';
import { shareList } from '../api/firebase';
import { IconButton } from '../components/IconButton';
import { FaEnvelope } from 'react-icons/fa6';

export function Share() {
	const [recipientEmail, setRecipientEmail] = useState('');

	const handleShare = (event) => {
		event.preventDefault();
		shareList(listPath, currentUserId, recipientEmail)
			.then((result) => {
				alert(result);
				setRecipientEmail('');
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<div>
			<form onSubmit={handleShare}>
				<label htmlFor="recipientEmail"> Recipient Email: </label>
				<input
					type="email"
					id="recipientEmail"
					value={recipientEmail}
					onChange={(e) => setRecipientEmail(e.target.value)}
					required
				/>
				<IconButton
					aria-label="Share with an email"
					as="button"
					className="share-email"
					label="Share"
					IconComponent={FaEnvelope}
					type="submit"
				/>
			</form>
		</div>
	);
}
