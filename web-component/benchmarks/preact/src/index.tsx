/* eslint-disable @typescript-eslint/no-namespace */
import { render } from "preact";
import register from "preact-custom-element";
import { Button, ButtonProps } from "./components/Button";

register(Button, "wc-button", ["children"], { shadow: true });

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"wc-button": ButtonProps;
		}
	}
}

declare module "preact" {
	namespace JSX {
		interface IntrinsicElements {
			"wc-button": ButtonProps;
		}
	}
}

render(
	<>
		<wc-button onClick={() => console.log("primary")}>Click me!</wc-button>
		<wc-button
			onClick={() => console.log("secondary")}
			variation="secondary"
		>
			Click me!
		</wc-button>
	</>,
	document.getElementById("root") as HTMLElement
);
