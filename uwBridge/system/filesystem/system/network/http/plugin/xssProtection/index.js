module.exports = async (app, extend) => {
  const xssProtection = (req, res, next) => {
    res.header('x-xss-protection', '1; mode=block');
    return next();
  };
  extend.xssProtection = xssProtection;
};