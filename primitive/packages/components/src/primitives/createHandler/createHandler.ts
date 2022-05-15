import { useEffect, useMemo, useState } from "react";
import { CreateHandler } from "./common";

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
