import app from '../app';
import multiEvent from './multiEvent';
import { cssRender, cssUnrender } from './css';
const {
	watch,
	utility: {
		each,
		get,
		apply,
	}
} = app;
const createWatchers = (currentView, item, key) => {
	if (get('isWatcher', item._)) {
		currentView.watchers[key] = item;
		return;
	}
	item.options = item.options || {};
	item.methods = item.methods || {};
	let {
		prefix,
		suffix,
	} = item.options;
	const { idProperty } = item.options;
	const { methods, } = item;
	const createMethod = methods.create || 'push';
	const readMethod = methods.read || 'push';
	prefix = (prefix) ? `${prefix}.` : '';
	suffix = (suffix) ? `.${suffix}` : '';
	item.prefix = prefix;
	item.suffix = suffix;
	currentView.watchers[key] = watch({
		async create(json) {
			await currentView.syncCollection(key, json.item, createMethod, idProperty);
			currentView.fire(`${prefix}create${suffix}`, json.item, json);
		},
		async delete(json) {
			await currentView.removeByIndex(key, json.item[idProperty], idProperty);
			currentView.fire(`${prefix}delete${suffix}`, json.item, json);
		},
		async read(json) {
			await currentView.syncCollection(key, json.items, readMethod, idProperty);
			currentView.fire(`${prefix}read${suffix}`, json.item, json);
		},
		async update(json) {
			await currentView.syncCollection(key, json.item, createMethod, idProperty);
			currentView.fire(`${prefix}update${suffix}`, json.item, json);
		},
	}, item.options);
};
const removeInstance = function(currentView, styles) {
	cssUnrender(styles);
	each(currentView.watchers, (item, key) => {
		item.stop();
		item[key] = null;
	});
	currentView.styles = null;
	currentView.asset = null;
};
const onrenderInstance = function(currentView, styles) {
	cssRender(styles);
	if (currentView.watchers) {
		each(currentView.watchers, (item) => {
			item.start();
		});
	}
};
export const buildComponentEvents = function(componentConfig) {
	const {
		styles,
		watchers,
	} = componentConfig;
	const thisComponent = this;
	thisComponent.watchers = (watchers) ? watchers(thisComponent) : {};
	if (thisComponent.watchers) {
		each(thisComponent.watchers, (item, key) => {
			createWatchers(thisComponent, item, key);
		});
	}
	thisComponent.asset = componentConfig.asset;
	thisComponent.on({
		multi(cmpntEvent, ...args) {
			app.log(cmpntEvent, ...args);
			return multiEvent(this, cmpntEvent, ...args);
		},
		render() {
			return onrenderInstance(this, styles);
		},
		teardown() {
			return removeInstance(this, styles);
		},
	});
};
const onConstruct = function(componentConfig) {
	const sourceConstruct = componentConfig.onconstruct;
	componentConfig.onconstruct = function(...args) {
		apply(buildComponentEvents, this, [componentConfig, ...args]);
		if (sourceConstruct) {
			return apply(sourceConstruct, this, args);
		}
	};
	const sourceRender = componentConfig.onrender;
	componentConfig.onrender = function(...args) {
		if (sourceRender) {
			return apply(sourceRender, this, args);
		}
	};
};
export default onConstruct;
