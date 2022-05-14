import { h } from "vue";
import { CreateElement, mapElementPropsToPlatformAttributes } from "./common";

export const createElement: CreateElement = (
	tagName,
	{ children, ...restProps }
) => {
	return h(tagName, mapElementPropsToPlatformAttributes(restProps), children);
};
