import { defineComponent } from "vue";
import { CreateComponent } from "./common";

export const createComponent: CreateComponent = (component) => {
	return defineComponent({
		setup(props) {
			return () => {
				// @ts-expect-error fix props incompatibility
				component(props);
			};
		},
	}) as unknown as typeof component;
};
