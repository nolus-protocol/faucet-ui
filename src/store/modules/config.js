const state = {
  chain: process.env.VUE_APP_CHAIN,
  claimUrl: process.env.VUE_APP_CLAIM_URL,
  recaptchaSiteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
  faucetAmount: process.env.VUE_APP_FAUCET_AMOUNT,
};

const mutations = {};

export default {
  state,
  mutations,
};
