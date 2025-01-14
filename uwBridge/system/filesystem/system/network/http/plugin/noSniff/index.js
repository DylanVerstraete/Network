module.exports = async (uwApp, extend) => {
	const noSniff = (req, res, next) => {
		res.header('x-content-type-options', 'nosniff');
		return next();
	};
	extend.noSniff = noSniff;
};
