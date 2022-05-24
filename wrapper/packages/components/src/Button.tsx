export type ButtonProps = {
	children: string;
	onPress: () => void;
	variation?: "primary" | "secondary";
};

export const Button = ({
	children,
	onPress,
	variation = "primary",
}: ButtonProps) => {
	return (
		<button
			style={{
				backgroundColor: variation === "secondary" ? "lightcoral" : "lightblue",
			}}
			onClick={onPress}
		>
			{children}
		</button>
	);
};
