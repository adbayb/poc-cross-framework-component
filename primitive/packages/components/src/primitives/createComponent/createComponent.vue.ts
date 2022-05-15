import { defineComponent } from "vue";
import { CreateComponent } from "./common";

export const createComponent: CreateComponent = (factory) => {
	return defineComponent({
		inheritAttrs: false,
		setup(_, ctx) {
			const props = { ...ctx.attrs, children: ctx.slots.default?.() };
			// @ts-expect-error fix incompatibility
			const render = factory(props);

			return () => {
				return render();
			};
		},
	}) as unknown as ReturnType<CreateComponent>;
};
