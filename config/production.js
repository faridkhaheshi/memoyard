const baseUrl = "https://www.memoyard.com"

module.exports = {
  env: "production",
  baseUrl,
  cookieOptions: {
    path: "/",
    domain: ".memoyard.com",
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
