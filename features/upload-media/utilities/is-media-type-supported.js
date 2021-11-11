import config from "../../../config"

const {
  gallery: { supportedMediaFiles },
} = config

const isMediaTypeSupported = mediaType =>
  supportedMediaFiles.indexOf(mediaType) > -1

export default isMediaTypeSupported
