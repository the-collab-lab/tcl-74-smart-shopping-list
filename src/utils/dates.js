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
export function calculateDaysDifferenceFromNow(dateToCompare) {
	const comparisonDate = dateToCompare.toDate();
	const presentDate = new Date();
	const diffInMilliseconds = presentDate.getTime() - comparisonDate.getTime();
	return Math.round(diffInMilliseconds / ONE_DAY_IN_MILLISECONDS);
}

export function comparePurchaseUrgency(list) {
	const inactive = [];
	const overdue = [];
	const future = [];
	//iterate through the list and categorize each item
	list.forEach((item) => {
		//positive numbers represent the past, negative numbers represent the future
		const days = calculateDaysDifferenceFromNow(item.dateNextPurchased);
		if (days >= 60) {
			/*
				-If sixty or more days have passed since the last purchase, we consider the item inactive.
				-We flip the days to negative* to represent inactivity because inactive items should be sorted in reverse order from overdue and future items. 
				-For instance, an item that is  62 days overdue will be placed below an item that is 61 days overdue. It is less relevant to the user because more time has elapsed since they engaged with it.
			*/
			item.sortCriteria = {
				tag: 'No longer active',
				daysUntilNextPurchase: -days, // * flip the days to negative
			};
			inactive.push(item);
		} else if (days < 60 && days > 0) {
			item.sortCriteria = { tag: 'Past due date', daysUntilNextPurchase: days };
			overdue.push(item);
		} else if (days <= 0 && days >= -7) {
			item.sortCriteria = { tag: 'Due soon', daysUntilNextPurchase: days };
			future.push(item);
		} else if (days < -7 && days >= -30) {
			item.sortCriteria = {
				tag: 'Due kind of soon',
				daysUntilNextPurchase: days,
			};
			future.push(item);
		} else if (days < -30) {
			item.sortCriteria = { tag: 'Due not soon', daysUntilNextPurchase: days };
			future.push(item);
		}
	});
	//function to sort lists by days until next purchase and alphabetically if days are equal
	const sortList = (list) => {
		const sortedList = [...list].sort((a, b) => {
			if (
				a.sortCriteria.daysUntilNextPurchase ===
				b.sortCriteria.daysUntilNextPurchase
			) {
				//sorts alphabetically if days are the same
				return a.name.localeCompare(b.name);
			}
			return (
				//sort by days until next purchase
				b.sortCriteria.daysUntilNextPurchase -
				a.sortCriteria.daysUntilNextPurchase
			);
		});
		return sortedList;
	};

	const sortedOverdue = sortList(overdue);
	const sortedFuture = sortList(future);
	const sortedInactive = sortList(inactive);

	return sortedOverdue.concat(sortedFuture).concat(sortedInactive);
}
