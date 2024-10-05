import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * calls a toast notification to pop up
 * @param {string} text The text that should appear in the notification
 * @param {string} type The styling for the notification: "info", "success", "error", "warning", "default"
 */
export const notify = (text, type) =>
	toast(text, {
		role: 'alert',
		autoClose: 3000,
		type,
		draggable: true,
		closeOnClick: true,
		pauseOnHover: true,
		hideProgressBar: true,
	});
