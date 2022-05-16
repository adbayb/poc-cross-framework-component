import { forwardRef } from "react";
import { CreateComponent } from "./common";

/**
 * Creates a framework agnostic component.
 * Responsibility: handle component creation including ref management.
 *
 * @example
 * type ButtonProps = {
 * 	onPress: () => void
 * }
 *
 * const Button = createComponent<ButtonProps>((props) => {
 * 	return () => createElement("button", {
 * 	  onClick: onPress,
 * 	})
 * })
 *
 * const buttonElement = Button({
 *  onPress() {
 *   console.log("click")
 *  }
 * })()
 */
export const createComponent: CreateComponent = (factory) => {
	return forwardRef((props, ref) =>
		// @ts-expect-error fix incompatibility
		factory({ ...props, ref })()
	) as unknown as ReturnType<CreateComponent>;
};
