module.exports = () => {
  return {
    require: ['./tests/_setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    tap: true,
    verbose: true,
    color: true,
    babel: true
  }
}
