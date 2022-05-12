import { Button as ButtonReact } from "@web-component/adapter";
import { createComponent } from "./createComponent";

export const Button = createComponent("wc-button", ButtonReact, [
	"children",
	"onPress",
	"variation",
]);
