import { Button as ButtonReact } from "@wrapper/adapter";
import { createComponent } from "./createComponent";

export const Button = createComponent("wc-button", ButtonReact, [
	"children",
	"onPress",
	"variation",
]);
