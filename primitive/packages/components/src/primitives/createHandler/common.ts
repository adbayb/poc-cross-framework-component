import { ElementProps } from "../createElement/common";

export type ReactiveValue<Value> = { value: Value };

type HandlerFactory<Props extends Record<string, unknown>> = (
	props: Props,
	hooks: {
		useState: <Value>(
			initialValue: Value
		) => [value: ReactiveValue<Value>, setValue: (nextValue: Value) => void];
		useMemo: <Value>(
			factory: () => Value,
			dependencyCollection: ReadonlyArray<unknown>
		) => Value;
		useEffect: (
			callback: () => void,
			dependencyCollection: ReadonlyArray<unknown>
		) => void;
	}
) => () => ElementProps;

type UseHandler<Props extends Record<string, unknown>> = (
	props: Props
) => () => ElementProps;

/**
 * Creates a framework agnostic handler (to manage stateful logic / hook like)
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
 * 	return { backgroundColor: isBlack ? "black" : "navy" };
 * })()
 *
 * const elementProps = useButton({ isBlack: false })
 */
export type CreateHandler = <Props extends Record<string, unknown>>(
	handler: HandlerFactory<Props>
) => UseHandler<Props>;
