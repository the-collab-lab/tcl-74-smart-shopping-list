import '../views/Layout.css';

export function IconButton({
	as: Component = 'button',
	icon,
	label,
	...props
}) {
	return (
		<Component {...props}>
			{icon && <i className={icon}></i>} <br />
			{label && <span>{label}</span>}
		</Component>
	);
}
