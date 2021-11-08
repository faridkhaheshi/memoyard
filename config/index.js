import defaultConfig from "./default"
import productionConfig from "./production"

export default process.env.NODE_ENV === "production"
  ? productionConfig
  : defaultConfig
