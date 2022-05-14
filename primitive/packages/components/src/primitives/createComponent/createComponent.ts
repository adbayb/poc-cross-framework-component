import { ReactElement, forwardRef } from "react";
import { CreateComponent } from "./common";

export const createComponent: CreateComponent = (component) => {
	// eslint-disable-next-line react/display-name
	return forwardRef(
		(props, ref) => component({ ...props, ref }) as ReactElement
	) as typeof component;
};
