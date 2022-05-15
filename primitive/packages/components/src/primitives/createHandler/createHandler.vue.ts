import { type UnwrapRef, readonly, ref, watch } from "vue";
import { CreateHandler } from "./common";

export const createHandler: CreateHandler = (handler) => {
	return (props) => {
		return handler(props, {
			useEffect(callback, dependencyCollection) {
				watch(
					dependencyCollection,
					() => {
						callback();

						// const clean = callback();
						// if (typeof clean === "function") {
						// 	clean();
						// }
					},
					{ immediate: true, deep: true }
				);
			},
			useMemo(factory) {
				// @note: dummy function -> no complex logic needed since Vue setup is only run once.
				return factory();
			},
			// @ts-expect-error to fix
			useState<Value>(initialValue: Value) {
				const state = ref(initialValue);
				const set = (value: Value): void => {
					state.value = value as UnwrapRef<Value>;
				};

				return [readonly(state), set];
			},
		});
	};
};
