/* eslint-disable @typescript-eslint/no-namespace */
import { render } from "preact";
import register from "preact-custom-element";
import { Button, ButtonProps } from "./components/Button";

// @note: another alternative compatible with React as well https://github.com/jahilldev/component-elements
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
