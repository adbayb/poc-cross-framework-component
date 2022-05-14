type ColorToken = "transparent" | "white" | "black" | "navy";

export interface ElementProps {
	backgroundColor?: ColorToken;
}

export type Element = unknown;

export type CreateElement = (tagName: string, props: ElementProps) => Element;

export const mapElementPropsToPlatformAttributes = (props: ElementProps) => {
	let backgroundColor: string = props.backgroundColor;

	if (backgroundColor === "navy") {
		backgroundColor = "rgb(0, 0, 128)";
	}

	return {
		backgroundColor,
	};
};
