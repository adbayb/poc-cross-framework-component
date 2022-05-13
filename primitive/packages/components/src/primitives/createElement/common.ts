type ColorToken = "transparent" | "white" | "black" | "navy";

interface Props {
	backgroundColor?: ColorToken;
}

export type CreateElementFunction<Element> = (
	tagName: string,
	props: Props
) => Element;

export const mapBackgroundColorPropsToAttributes = (backgroundColor: Props) => {
	if (backgroundColor === "navy") return "rgb(0, 0, 128)";

	return backgroundColor;
};
