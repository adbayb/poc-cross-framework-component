import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import { Button } from "@primitive/components";

const App = () => {
	return (
		<div>
			{/* @ts-expect-error to fix */}
			<Button defaultIsWhite>Hello world</Button>
		</div>
	);
};

console.log(renderToString(<App />));

render(<App />, document.getElementById("root"));
