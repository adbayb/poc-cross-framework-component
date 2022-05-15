import { forwardRef } from "react";
import { CreateComponent } from "./common";

export const createComponent: CreateComponent = (factory) => {
	return forwardRef((props, ref) =>
		// @ts-expect-error fix incompatibility
		factory({ ...props, ref })()
	) as unknown as ReturnType<CreateComponent>;
};
