import type { NextPage } from "next";
import { Button, ButtonProps } from "@wrapper/components";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
	const [variation, setVariation] =
		useState<NonNullable<ButtonProps["variation"]>>("primary");

	useEffect(() => {
		const intervalId = setInterval(() => {
			setVariation(variation === "primary" ? "secondary" : "primary");
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [variation]);

	return (
		<Button
			variation={variation}
			onPress={() => console.log("click")}
		>
			{variation}
		</Button>
	);
};

/*
// An example of React HOC to create component with the `createCustomElement` adapter.
// For showcasing purpose only: it's uneeded since `@wrapper/components` library is built with React.
const createComponent = <Props extends Record<string, unknown>>(
	Component: FunctionComponent,
	tagName: string
) => {
	const CustomComponent = tagName || Component.name.toLowerCase();
	const propsRef = {
		current: null,
	} as unknown as { current: Props };

	return (props: Props) => {
		const { children, onPress, ...propsWithoutChildren } = props;

		propsRef.current = props;

		// @note: returns pre-rendered content
		const content = useMemo(() => {
			return createCustomElement(CustomComponent, Component, propsRef);
		}, []);

		return (
			// @ts-ignore
			<CustomComponent
				{...propsWithoutChildren}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		);
	};
};
*/

export default Home;
