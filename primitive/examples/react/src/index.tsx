import { render } from "react-dom";
// @ts-expect-error fixed in next TS beta https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#package-json-exports-imports-and-self-referencing
import test from "@primitive/components/vue";

console.log(test);

const App = () => {
	return <p>Hello world</p>;
};

render(<App />, document.getElementById("root"));
