import { Element } from "../createElement/common";

type Component<Props extends Record<string, unknown>> = (
	props: Props
) => Element;

/**
 * Creates a framework agnostic component
 *
 * @example
 * type ButtonProps = {
 * 	onPress: () => void
 * }
 *
 * const Button = createComponent<ButtonProps>((props) => {
 * 	return createElement("button", {
 * 	  onClick: onPress,
 * 	})
 * })
 *
 * const buttonElement = Button({
 *  onPress() {
 *   console.log("click")
 *  }
 * })
 */
export type CreateComponent = <Props extends Record<string, unknown>>(
	component: Component<Props>
) => Component<Props>;
