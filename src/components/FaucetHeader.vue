<template>
  <div class="section-header">
    <h1>Rila Testnet Faucet</h1>
    <div class="separator-line"></div>
    <p>Use this faucet to get tokens for the latest Rila testnet. Please don't abuse this service as the number of available tokens is limited.</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "faucet-header",
  computed: {
    ...mapGetters(["config"])
  }
};
</script>

<style lang="stylus">
@import '~variables';

.section-header {
  span.chain {
    white-space: nowrap;
  }

  strong {
    font-weight: 500;
  }
}
</style>
