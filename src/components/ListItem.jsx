import { useState } from 'react';
import './ListItem.css';

export function ListItem({ name }) {
	return <li className="ListItem">{name}</li>;
}
