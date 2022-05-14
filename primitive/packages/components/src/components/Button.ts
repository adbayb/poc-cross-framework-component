import { createComponent } from "../primitives/createComponent";
import { createElement } from "../primitives/createElement";
import { createHandler } from "../primitives/createHandler";

export type ButtonProps = {
	variation: "primary" | "secondary";
	children: string;
};

export const Button = createComponent<ButtonProps>((props) => {
	const elementProps = useButtonHandler(props);

	return createElement("button", { ...props, ...elementProps });
});

const useButtonHandler = createHandler<Partial<ButtonProps>>((props, hooks) => {
	const [variation, setVariation] = hooks.useState(props.variation);

	hooks.useEffect(() => {
		setVariation(props.variation);
	}, [props.variation]);

	hooks.useEffect(() => {
		const intervalId = setInterval(() => {
			setVariation(variation === "primary" ? "secondary" : "primary");
		}, 1000);

		return () => clearInterval(intervalId);
	}, [variation]);

	return {
		backgroundColor: variation === "primary" ? "white" : "navy",
	};
});
