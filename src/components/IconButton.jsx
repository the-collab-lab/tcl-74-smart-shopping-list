import '../views/Layout.css';

export function IconButton({
	as: Component = 'button',
	IconComponent,
	...props
}) {
	return (
		<Component {...props}>
			{IconComponent && <IconComponent />} <br />
			{props.label && <span>{props.label}</span>}
		</Component>
	);
}
