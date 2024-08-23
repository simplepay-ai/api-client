# Entities

## `Currency`

Fiat currency

| Field    | Type     | Example                                | Description                                                                          |
| :------- | :------- | :------------------------------------- | :----------------------------------------------------------------------------------- |
| `id`     | `string` | `5e091838-d7bb-4365-a395-84d82d1ac7c2` | Currency ID                                                                          |
| `symbol` | `string` | `USD`                                  | Currency symbol ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) alphabetic code) |
| `code`   | `number` | `840`                                  | Currency code ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) numeric code)      |

## `Cryptocurrency`

| Field      | Type                                                         | Example                                           | Description                                                 |
| :--------- | :----------------------------------------------------------- | :------------------------------------------------ | :---------------------------------------------------------- |
| `id`       | `string`                                                     | `4967cf90-ce74-4edf-9b4e-f6392de1c95a`            | Cryptocurrency ID                                           |
| `symbol`   | `string`                                                     | `USDT`                                            | Cryptocurrency symbol                                       |
| `decimals` | `number`                                                     | `18`                                              | Number of decimal places                                    |
| `stable`   | `boolean`                                                    | `true`                                            | Is stablecoin                                               |
| `networks` | [`Network[]`](#network) or `undefined`                       | See [`Network`](#network)                         | List of blockchains in which cryptocurrency may be accepted |
| `rates`    | [`CryptocurrencyRates`](#cryptocurrencyrates) or `undefined` | See [`CryptocurrencyRates`](#cryptocurrencyrates) | Conversion rates to fiat currencies                         |

## `CryptocurrencyRates`

Conversion rates to fiat currencies

Key is [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) alphabetic code of fiat currency

Value is price for 1 coin

Example:

```typescript
{
    USD: 1,
    EUR: 0.98
}
```

## `Network`

Blockchain network

| Field    | Type     | Example                                | Description    |
| :------- | :------- | :------------------------------------- | :------------- |
| `id`     | `string` | `7639e9e4-6306-46a9-9acc-cc943d0d0c60` | Network ID     |
| `symbol` | `string` | `ethereum`                             | Network symbol |
| `name`   | `string` | `Ethereum`                             | Network name   |
| `type`   | `string` | `EVM`                                  | Network type   |

## `Invoice`

| Field            | Type                                | Example                                                              | Description                                     |
| :--------------- | :---------------------------------- | :------------------------------------------------------------------- | :---------------------------------------------- |
| `id`             | `string`                            | `6ef3cc15-24ae-4192-9744-a9017ed153cc`                               | Invoice ID                                      |
| `parentId`       | `string` or `null`                  | `dd90187e-d1d0-405f-bf2f-242c15403297`                               | Parent invoice ID                               |
| `clientId`       | `string`                            | `46778124-f9e0-4eba-ae1a-ecd5c0d9e90b`                               | ID of end customer, who makes the payment       |
| `from`           | `string`                            | `0x41ce73496136A0072013B9187550e30841eDeD74`                         | Wallet address from which customer made payment |
| `to`             | `string`                            | `0x1105F97fBAB9674Ef069331F2b48E9B870ed9Adc`                         | Wallet address of payment recipient             |
| `amount`         | `string`                            | `501.723934`                                                         | Invoice amount in cryptocurrency                |
| `price`          | `string`                            | `500.00`                                                             | Invoice price in fiat currency                  |
| `type`           | `enum<payment>`                     | `payment`                                                            | Invoice type                                    |
| `status`         | `InvoiceStatus`                     | `success`                                                            | Invoice status                                  |
| `txHash`         | `string` or `null`                  | `0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e` | Transaction hash                                |
| `txBlock`        | `number` or `null`                  | `1000000`                                                            | Block number                                    |
| `createdAt`      | `string`                            | `2024-07-31T00:48:53Z`                                               | Invoice creation timestamp                      |
| `updatedAt`      | `string`                            | `2024-07-31T00:49:28Z`                                               | Invoice update timestamp                        |
| `expireAt`       | `string`                            | `2024-07-31T01:14:28Z`                                               | Invoice expiration timestamp                    |
| `cryptocurrency` | [`Cryptocurrency`](#cryptocurrency) | See [`Cryptocurrency`](#cryptocurrency)                              | Invoice cryptocurrency                          |
| `network`        | [`Network`](#network)               | See [`Network`](#network)                                            | Invoice network                                 |
| `currency`       | [`Currency`](#currency)             | See [`Currency`](#currency)                                          | Invoice fiat currency                           |
