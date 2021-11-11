const baseUrl = "http://localhost:3000"

module.exports = {
  env: "development",
  baseUrl,
  gallery: {
    breakpointCols: {
      default: 4,
      1800: 3,
      1100: 2,
      500: 1,
    },
  },
  cookieOptions: {
    path: "/",
    sameSite: "None",
    secure: true,
  },
  google: {
    // gaTrackingId: "UA-150353421-6",
    // authClientId:
    //   "1075824573473-qm0n7aer5q7u8r1vpsokagia4bjjav33.apps.googleusercontent.com",
    // authScopes: "profile email",
    // recaptchaSiteKey: "6LdnRRoaAAAAAEEvlCuwfHFrXdx-IWNPqv2p6IFZ",
  },
}
