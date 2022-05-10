import { render } from "preact";
import type { FunctionalComponent } from "preact";
import { renderToString } from "preact-render-to-string";

export const createCustomElement = (
	tagName: string,
	Component: FunctionalComponent,
	props: { current: Record<string, unknown> }
) => {
	if (typeof window !== "undefined" && !customElements.get(tagName)) {
		class WebComponentWrapper extends HTMLElement {
			static get observedAttributes() {
				return Object.keys(props.current);
			}

			attributeChangedCallback() {
				this.update();
			}

			connectedCallback() {
				this.update();
			}

			update() {
				render(<Component {...props.current} />, this);
			}
		}

		customElements.define(tagName, WebComponentWrapper);
	}

	return renderToString(<Component {...props.current} />);
};
