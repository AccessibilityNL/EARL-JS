import pkg from "./package.json"

const production = !process.env.ROLLUP_WATCH

export default {
  input: pkg.main,
  output: {
    file: production ? pkg.browser : `./develop/${pkg.name}.js`,
    name: pkg.name,
    format: "umd",
  },
}
