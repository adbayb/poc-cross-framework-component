import { forwardRef } from "react";
import { CreateComponent } from "./common";

export const createComponent: CreateComponent = (component) => {
	// eslint-disable-next-line react/display-name
	return forwardRef((props, ref) =>
		// @ts-expect-error fix incompatibility
		component({ ...props, ref })
	) as unknown as typeof component;
};
