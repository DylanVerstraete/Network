module.exports = async (uwApp, extend) => {
	const {
		config,
		utility: {
			isFunction
		}
	} = uwApp;
	const contentSecurityPolicyCache = config.http.plugins.contentSecurityPolicy;
	const isFunct = isFunction(contentSecurityPolicyCache);
	const contentSecurityPolicy = (req, res, next) => {
		const host = req.headers.host;
		if (isFunct) {
			res.header('content-security-policy', contentSecurityPolicyCache({
				host
			}));
		} else {
			res.header('content-security-policy', req.headers.host);
		}
		return next();
	};
	extend.contentSecurityPolicy = contentSecurityPolicy;
};
