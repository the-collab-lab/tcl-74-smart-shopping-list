import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data }) {
	return (
		<>
			<p>
				Hello from the <code>/list</code> page!
			</p>
			<ul>
				{/**
				 * uses ternary operator to display "no items" msg if list is empty
				 */}
				{data.length !== 0 ? (
					data.map((item) => {
						return <ListItem key={item.id} name={item.name} />;
					})
				) : (
					<li> No items available!</li>
				)}
			</ul>
		</>
	);
}
