import { createElement as createReactElement } from "react";
import { CreateElement, mapElementPropsToPlatformAttributes } from "./common";

export const createElement: CreateElement = (tagName, props) => {
	return createReactElement(
		tagName,
		mapElementPropsToPlatformAttributes(props)
	);
};
