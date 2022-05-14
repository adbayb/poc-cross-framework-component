import { defineComponent, h, onBeforeUpdate, reactive } from "vue";
import { createCustomElement } from "@web-component/adapter";

export const createComponent = <Props extends Record<string, unknown>>(
	tagName: string,
	Component: (props: Props) => JSX.Element,
	attributes: Array<keyof Props>
) => {
	return defineComponent({
		name: tagName,
		props: attributes as Array<string>,
		setup(props, ctx) {
			const mapPropsToOutsideContract = () => {
				return {
					...props,
					// @note: should be improved to allow non primitive children (eg. "String content <span>Other fragment</span>") (slot usage instead?)
					children: ctx.slots.default?.().map((node) => node.children),
				};
			};
			const mappedProps = reactive({
				current: mapPropsToOutsideContract(),
			});
			// @ts-expect-error deep evaluation to fix
			const content = createCustomElement(tagName, Component, mappedProps);

			onBeforeUpdate(() => {
				mappedProps.current = mapPropsToOutsideContract();
			});

			return () =>
				h(tagName, {
					...props,
					innerHTML: typeof window === "undefined" ? content : undefined,
				});
		},
	});
};
