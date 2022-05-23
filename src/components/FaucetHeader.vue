<template lang="pug">
.section-header
  h1 Nolus Network
  p Use this faucet to get tokens for the #[span.chain {{ config.chain }}] testnet.<br/> Please don't abuse this service&mdash;the number of available tokens is <br/> limited.
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
  padding-left:1rem;
  padding-right:1rem;
  span.chain {
    white-space: nowrap;
  }

  strong {
    font-weight: 500;
  }
}
</style>
