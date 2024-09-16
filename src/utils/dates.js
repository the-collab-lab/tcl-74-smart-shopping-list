const ONE_DAY_IN_MILLISECONDS = 86400000;

/**
 * Get a new JavaScript Date that is `offset` days in the future.
 * @example
 * // Returns a Date 3 days in the future
 * getFutureDate(3)
 * @param {number} offset
 */
export function getFutureDate(offset) {
	return new Date(Date.now() + offset * ONE_DAY_IN_MILLISECONDS);
}
export function getDaysBetweenDates(dateToCompare) {
	const comparisonDate = dateToCompare.toDate();
	console.log(comparisonDate);
	const presentDate = new Date();
	const diffInMilliseconds = presentDate.getTime() - comparisonDate.getTime();
	return Math.round(diffInMilliseconds / ONE_DAY_IN_MILLISECONDS);
}
