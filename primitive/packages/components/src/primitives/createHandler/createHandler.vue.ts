import { CreateHandler } from "./common";

export const createHandler: CreateHandler = (handler) => {
	return (props) => {
		return handler(props, {
			// @todo
			useEffect() {},
			useMemo(factory) {
				return factory();
			},
			useState(value) {
				return [value, () => {}];
			},
		});
	};
};
