# Cosmos Testnet Faucet

This faucet app allows anyone who passes a captcha to request tokens for a Cosmos account address.

## How to deploy a faucet

1. Clone this repository locally

2. Create Google reCAPTCHA v2 keys.
    - [Go here](https://www.google.com/recaptcha/admin/create). *(If you want to use existing keys, [go here](https://www.google.com/recaptcha/admin))*
    - Fill out the form. Make sure you select `reCAPTCHA v2 - "I'm not a robot" Checkbox`.
    - *Note - you can start out with google's test API keys:*
        - Site key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
        - Secret key: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`


4. Configure the faucet backend`:
    ```
    git clone https://github.com/tendermint/faucet
    cd faucet
    make install
   export PORT=8000
   export MNEMONIC='guard city cruise fall foster feature kiwi eager unlock humble mutual stem rug legend spoil warfare select describe damage mix satisfy salmon robust gallery'
   export CLI_NAME=cosmzoned
   export DENOMS=unolus
   MAX_CREDIT=100000000  # 100_000_000 == 100nolus
   faucet
    ```

5. Make sure the faucet account have funds. The faucet basically performs a `tx send` for every token request, so make sure the faucet account have enough tokens (more tokens could be added later by sending more funds to the faucet account)..
    ```
    cosmzoned keys add faucet --recover --keyring-backend test
   cosmzoned tx bank send <token-holder-address>  nolus1t8h3v4zfezvqn767f42ylyzjyf75r0rc9deww8 1000000000unolus --chain-id nolus-private --from <token-holder> --keyring-backend test
    ```

6. Change the `.env` template if necessary
    - `VUE_APP_CHAIN` - Should hold the `chain-id`
    - `VUE_APP_RECAPTCHA_SITE_KEY` - Google reCAPTCHA Site Key
    - `VUE_APP_CLAIM_URL` - URL for the claim server request. Leave as is.
    - `VUE_APP_FAUCET_AMOUNT` - Amount of tokens to send on each request. Should specify amount+denom e.g. 123uscrt.

7. Start faucet ui:
   ```
   npm install
   npm run serve
   ```
