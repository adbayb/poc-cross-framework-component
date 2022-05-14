type ColorToken = "transparent" | "white" | "black" | "navy";

export interface ElementProps {
	backgroundColor?: ColorToken;
	children?: string | number | boolean | null | undefined;
}

export type Element = unknown;

export type CreateElement = (tagName: string, props: ElementProps) => Element;

export const mapElementPropsToPlatformAttributes = ({
	backgroundColor,
	children,
}: ElementProps) => {
	let mappedBackgroundColor: string | undefined = backgroundColor;

	if (backgroundColor === "navy") {
		mappedBackgroundColor = "rgb(0, 0, 128)";
	}

	return {
		children,
		style: { backgroundColor: mappedBackgroundColor },
	};
};
