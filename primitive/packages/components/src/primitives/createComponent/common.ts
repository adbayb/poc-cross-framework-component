import { Element } from "../createElement/common";

type Component<Props extends Record<string, unknown>> = (
	props: Props
) => Element;

type ComponentFactory<Props extends Record<string, unknown>> = (
	props: Props
) => () => Element;

export type CreateComponent = <Props extends Record<string, unknown>>(
	factory: ComponentFactory<Props>
) => Component<Props>;
