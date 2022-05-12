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
					children: ctx.slots.default?.()[0]?.children as string,
				};
			};
			const mappedProps = reactive({
				current: mapPropsToOutsideContract(),
			});
			// @ts-expect-error props incompatibility to fix
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
