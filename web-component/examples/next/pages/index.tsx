import type { NextPage } from "next";
import {
	Button,
	ButtonProps,
	createCustomElement,
} from "@web-component/components";
import { FunctionComponent, useEffect, useMemo, useState } from "react";

const createReactCustomElement = <Props extends Record<string, unknown>>(
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

const ReactButton = createReactCustomElement(Button, "wc-button");

const Home: NextPage = () => {
	const [variation, setVariation] =
		useState<NonNullable<ButtonProps["variation"]>>("primary");

	useEffect(() => {
		const intervalId = setInterval(() => {
			setVariation(variation === "primary" ? "secondary" : "primary");
		}, 2000);

		return () => {
			clearInterval(intervalId);
		};
	}, [variation]);

	return (
		<ReactButton
			variation={variation}
			onPress={() => console.log("press")}
		>
			{variation}
		</ReactButton>
	);
};

export default Home;
