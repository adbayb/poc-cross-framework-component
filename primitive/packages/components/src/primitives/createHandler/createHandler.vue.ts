import { onMounted, ref } from "vue";
import { CreateHandler, ReactiveValue } from "./common";

export const createHandler: CreateHandler = (handler) => {
	return (props) => {
		return handler(props, {
			useEffect(callback) {
				onMounted(() => {
					callback();
				});

				// @todo: watch / update management + cleanup function
				// onUpdated(callback);
				// watch(
				// 	dependencyCollection,
				// 	() => {
				// 		callback();
				// 		// const clean = callback();
				// 		// if (typeof clean === "function") {
				// 		// 	clean();
				// 		// }
				// 	},
				// 	{ immediate: true, deep: true }
				// );
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
