import { defineComponent } from "vue";
import { CreateComponent } from "./common";

export const createComponent: CreateComponent = (component) => {
	return defineComponent({
		inheritAttrs: false,
		setup(_, ctx) {
			return (instance: { $attrs: Record<string, unknown> }) => {
				// @ts-expect-error fix incompatibility
				return component({
					...instance.$attrs,
					children: ctx.slots.default?.(),
				});
			};
		},
	}) as unknown as typeof component;
};
