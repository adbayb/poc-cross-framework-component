import { ReactElement, createElement as createReactElement } from "react";
import { CreateElementFunction } from "./common";

export const createElement: CreateElementFunction<ReactElement> = (
	tagName,
	props
) => {
	return createReactElement(tagName, props);
};
