import { render } from "preact";
import { renderToString } from "preact-render-to-string";

export const createCustomElement = <Props extends Record<string, unknown>>(
	tagName: string,
	Component: (props: Props) => JSX.Element,
	props: { current: Props }
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
