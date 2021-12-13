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
    supportedMediaFiles: ["photo", "video"],
  },
  cookieOptions: {
    path: "/",
    sameSite: "None",
    secure: true,
  },
  admin: {
    hasuraGraphUrl: `${process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT}/v1/graphql`,
  },
  panel: {
    maxSubjectsPerOrg: 50,
    maxGroupsPerOrg: 10,
  },
  supportedCountries: ["CA", "US"],
  google: {
    // gaTrackingId: "UA-150353421-6",
    // authClientId:
    //   "1075824573473-qm0n7aer5q7u8r1vpsokagia4bjjav33.apps.googleusercontent.com",
    // authScopes: "profile email",
    // recaptchaSiteKey: "6LdnRRoaAAAAAEEvlCuwfHFrXdx-IWNPqv2p6IFZ",
  },
  email: {
    fromAddress: "Memoyard Postman DEV <dev@memoyard.com>",
  },
  demo: {
    demoAccounts: [
      "demoadmin@memoyard.com",
      "demoteacher1@memoyard.com",
      "demoteacher2@memoyard.com",
      "demoteacher3@memoyard.com",
      "demoparent1@memoyard.com",
      "demoparent2@memoyard.com",
    ],
    demoAccountsTicket: "123456",
  },
}
