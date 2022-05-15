import { onMounted, onUnmounted, ref, watchEffect } from "vue";
import { CreateHandler, ReactiveValue } from "./common";

export const createHandler: CreateHandler = (handler) => {
	return (props) => {
		return handler(props, {
			useEffect(callback, dependencyCollection = []) {
				if (dependencyCollection.length === 0) {
					let cleanUp: ReturnType<typeof callback> = undefined;

					onMounted(() => {
						cleanUp = callback();
					});

					onUnmounted(() => {
						if (typeof cleanUp === "function") {
							cleanUp();
						}
					});

					return;
				}

				watchEffect((onCleanUp) => {
					const clean = callback();

					if (typeof clean === "function") {
						onCleanUp(clean);
					}
				});
			},
			useMemo(factory) {
				// @note: dummy function -> no complex logic needed since Vue setup is only run once.
				return factory();
			},
			useState(initialValue) {
				type Value = typeof initialValue;

				const state = ref(initialValue) as ReactiveValue<Value>;
				const setState = (value: Value): void => {
					state.value = value;
				};

				return [state, setState];
			},
		});
	};
};
