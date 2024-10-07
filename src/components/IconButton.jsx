import '../views/Layout.css';

export function IconButton({
	as: Component = 'button',
	IconComponent,
	...props
}) {
	return (
		<Component
			{...props}
			className={`flex items-center justify-center px- py-4 rounded-md shadow-md transition duration-200 ease-in-out 
			${props.className} 
			${props.disabled ? 'bg-[#184E77] cursor-not-allowed' : 'bg-[#184E77] text-white hover:bg-[#1E6091]'}`}
			disabled={props.disabled}
		>
			{IconComponent && <IconComponent className="mr-4 text-2xl" />}
			{props.label && <span className="text-2xl">{props.label}</span>}
		</Component>
	);
}
