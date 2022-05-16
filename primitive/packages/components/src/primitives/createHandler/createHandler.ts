import { useEffect, useMemo, useState } from "react";
import { CreateHandler } from "./common";

/**
 * Creates a framework agnostic handler (React hook like).
 * Responsibility: manage stateful logic and output mapped Element properties.
 *
 * @example
 * type ButtonHandlerProps = {
 * 	isBlack: boolean
 * };
 *
 * const useButton = createHandler<ButtonHandlerProps>((props, hooks) => {
 * 	const [isBlack, setIsBlack] = hooks.useState(props.isBlack);
 *
 *	hooks.useEffect(() => {
 *		const intervalId = setInterval(() => { setIsBlack(!isBlack) }, 1000);
 *		return () => clearInterval(intervalId);
 *	}, [isBlack])
 *
 * 	return () => ({ backgroundColor: isBlack ? "black" : "navy" });
 * })
 *
 * const elementProps = useButton({ isBlack: false })()
 */
export const createHandler: CreateHandler = (handler) => {
	return (props) => {
		return handler(props, {
			useEffect,
			useMemo,
			useState(initialValue) {
				type Value = typeof initialValue;

				const [state, setState] = useState({
					value: initialValue,
				});

				return [
					state,
					(nextValue: Value) => {
						setState({ value: nextValue });
					},
				];
			},
		});
	};
};
