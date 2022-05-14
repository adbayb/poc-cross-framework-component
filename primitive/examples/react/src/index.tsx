import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import { Button, type ButtonProps } from "@primitive/components";
import { useState } from "react";

const App = () => {
	const [variation, setVariation] =
		useState<ButtonProps["variation"]>("primary");

	return (
		<div style={{ display: "flex", gap: 8 }}>
			<Button variation={variation}>Hello world</Button>
			<button
				onClick={() => {
					setVariation(variation === "primary" ? "secondary" : "primary");
				}}
			>
				Toggle property
			</button>
		</div>
	);
};

console.log(renderToString(<App />));

render(<App />, document.getElementById("root"));
