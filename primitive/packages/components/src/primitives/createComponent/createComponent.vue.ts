import { type VNode, h } from "vue";
import { CreateElementFunction } from "./common";

export const createElement: CreateElementFunction<VNode> = (tagName, props) => {
	return h(tagName, props);
};
