import { defineComponent, h } from "vue";
import { Button, createCustomElement } from "@web-component/adapter";

// @todo: transform it to generic adapter
// { components: { VueButton: createVueComponent(Button) } }
export default defineComponent({
	name: "VueButton", // optional
	props: ["variation", "onPress"], // @todo: get props dynamically
	setup(props, ctx) {
		const mapPropsToOutsideContract = () => {
			return {
				...props,
				children: ctx.slots.default()[0].children as string,
			};
		};
		const mappedProps = reactive({
			current: mapPropsToOutsideContract(),
		});
		const content = createCustomElement("wc-button", Button, mappedProps);

		onBeforeUpdate(() => {
			mappedProps.current = mapPropsToOutsideContract();
		});

		return () =>
			h("wc-button", {
				...props,
				innerHTML: typeof window === "undefined" ? content : undefined,
			});
	},
});
