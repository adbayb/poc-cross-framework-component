import { createComponent } from "../primitives/createComponent";
import { createElement } from "../primitives/createElement";
import { createHandler } from "../primitives/createHandler";

export type ButtonProps = {
	variation: "primary" | "secondary";
	children: string;
};

export const Button = createComponent<ButtonProps>((props) => {
	// @note: handlers must be called before the render function (ie. () => createElement(XXX))
	// to make them work properly whatever the framework (Vue needs to initialize its hooks outside the render function)
	// That's why the `createComponent` imposes a render function as return value instead of a `createElement` return value.
	const useButton = createButtonHandler(props);

	return () => {
		const elementProps = useButton();

		return createElement("button", { ...props, ...elementProps });
	};
});

const createButtonHandler = createHandler<Partial<ButtonProps>>(
	(props, hooks) => {
		const [variation, setVariation] = hooks.useState(props.variation);

		hooks.useEffect(() => {
			setVariation(props.variation);
		}, [props.variation]);

		hooks.useEffect(() => {
			const intervalId = setInterval(() => {
				setVariation(variation.value === "primary" ? "secondary" : "primary");
			}, 1000);

			return () => clearInterval(intervalId);
		}, [variation]);

		return () => {
			return {
				backgroundColor: variation.value === "primary" ? "white" : "navy",
			};
		};
	}
);
