import { Component, Listen, Prop, h } from "@stencil/core";

@Component({
	tag: "wc-button",
	shadow: true,
})
export class WcButton {
	@Prop() variation: "primary" | "secondary" = "primary";

	@Listen("click")
	handleClick() {
		console.log(this.variation);
	}

	render() {
		return (
			<button
				style={{
					backgroundColor:
						this.variation === "secondary" ? "lightcoral" : "lightblue",
				}}
			>
				<slot></slot>
			</button>
		);
	}
}
