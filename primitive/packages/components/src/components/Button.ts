import { createComponent } from "../primitives/createComponent";
import { createElement } from "../primitives/createElement";
import { createHandler } from "../primitives/createHandler";

export type ButtonProps = {
	defaultIsWhite: boolean;
	children: string;
};

export const Button = createComponent<ButtonProps>((props) => {
	const elementProps = useButtonHandler(props);

	return createElement("button", { ...props, ...elementProps });
});

const useButtonHandler = createHandler<Partial<ButtonProps>>((props, hooks) => {
	const [isWhite, setIsWhite] = hooks.useState(props.defaultIsWhite);

	hooks.useEffect(() => {
		const intervalId = setInterval(() => {
			setIsWhite(!isWhite);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [isWhite]);

	return {
		backgroundColor: isWhite ? "white" : "navy",
	};
});
