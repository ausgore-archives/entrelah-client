import { useState, ReactNode } from "react";

interface Props {
	title: string;
	children: ReactNode;
}

export default function MainNavItem(props: Props) {
	const [showMegaMenu, setShowMegaMenu] = useState(false);
	const handleMouseEnter = () => setShowMegaMenu(true);
	const handleMouseLeave = () => setShowMegaMenu(false);

	return (
		<li className="pb-1 hover:text-red-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<span className="cursor-pointer"> {props.title} </span>
			{showMegaMenu && <div className="absolute bg-white rounded-sm shadow-md border">
				<ul className="grid grid-cols-1 text-gray-600"> {props.children} </ul>
			</div>}
		</li>
	);
}