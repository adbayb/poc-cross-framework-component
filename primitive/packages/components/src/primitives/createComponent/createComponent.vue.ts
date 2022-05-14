import { defineComponent } from "vue";
import { CreateComponent } from "./common";

export const createComponent: CreateComponent = (component) => {
	return defineComponent({
		setup(props, ctx) {
			return () => {
				// @ts-expect-error fix incompatibility
				return component({
					...props,
					children: ctx.slots.default?.(),
				});
			};
		},
	}) as unknown as typeof component;
};
