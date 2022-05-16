import { createElement as createReactElement } from "react";
import { CreateElement, mapElementPropsToPlatformAttributes } from "./common";

/**
 * Creates a framework agnostic element.
 * Responsibility: manage element creation and handle core logic across elements (tokens management,
 * platform specificities, responsive attribute mapping, style API, security concerns...).
 *
 * @example
 * const buttonElement = createElement("button", {
 *   onClick() {},
 * })
 */
export const createElement: CreateElement = (tagName, props) => {
	return createReactElement(
		tagName,
		mapElementPropsToPlatformAttributes(props)
	);
};
