/* eslint-disable import/no-default-export, import/namespace */
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import pkg from "./package.json";

const isDev = process.argv.includes("--watch");

const getExtensions = (suffixes = [""]) =>
	suffixes
		.map((suffix) => [
			`${suffix}.ts`,
			`${suffix}.tsx`,
			`${suffix}.js`,
			`${suffix}.jsx`,
		])
		.reduce((acc, ext) => acc.concat(ext), [])
		.concat(".json");

const createConfig = (target = "react") => {
	let extensions, output;

	switch (target) {
		case "vue":
			output = {
				file: pkg["exports"]["./vue"]["import"]["default"],
				format: "cjs",
				sourcemap: isDev,
			};
			extensions = getExtensions([".vue"]);

			break;
		case "react":
		default:
			output = {
				file: pkg["exports"]["."]["import"]["default"],
				format: "cjs",
				sourcemap: isDev,
			};
			extensions = getExtensions();

			break;
	}

	return {
		input: pkg.source,
		output,
		external: [
			...Object.keys(pkg.optionalDependencies),
			...Object.keys(pkg.devDependencies),
		],
		plugins: [
			nodeResolve({ extensions }),
			typescript({
				tsconfig: "./tsconfig.json",
				outputToFilesystem: true,
			}),
			commonjs(),
			!isDev && filesize(),
		].filter(Boolean),
	};
};

export default [createConfig(), createConfig("vue")];
