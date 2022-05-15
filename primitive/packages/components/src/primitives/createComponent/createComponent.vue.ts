import { defineComponent } from "vue";
import { CreateComponent } from "./common";

export const createComponent: CreateComponent = (factory) => {
	return defineComponent({
		inheritAttrs: false,
		setup(_, ctx) {
			// @ts-expect-error fix incompatibility
			const render = factory({
				...ctx.attrs,
				children: ctx.slots.default?.(),
			});

			return () => {
				return render();
			};
		},
	}) as unknown as ReturnType<CreateComponent>;
};
