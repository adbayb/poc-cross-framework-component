import { h } from "vue";
import { CreateElement, mapElementPropsToPlatformAttributes } from "./common";

export const createElement: CreateElement = (tagName, props) => {
	return h(tagName, mapElementPropsToPlatformAttributes(props));
};
