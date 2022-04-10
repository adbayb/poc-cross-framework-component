export type ButtonProps = {
	children: string;
	onClick: () => void;
	variation?: "primary" | "secondary";
};

export const Button = ({
	children,
	onClick,
	variation = "primary",
}: ButtonProps) => {
	return (
		<button
			style={{
				backgroundColor: variation === "secondary" ? "lightcoral" : "lightblue",
			}}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
