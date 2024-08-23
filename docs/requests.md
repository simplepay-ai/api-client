# Requests

## `CryptocurrencyListRequest`

| Field      | Type                     | Example | Default | Description                              |
| :--------- | :----------------------- | :------ | :------ | :--------------------------------------- |
| `rates`    | `boolean` or `undefined` | `true`  | `false` | Include cryptocurrency rates in response |
| `networks` | `boolean` or `undefined` | `true`  | `false` | Include networks list in response        |

## `InvoiceCreateRequest`

| Field            | Type               | Example                                      | Default | Description                                                                               |
| :--------------- | :----------------- | :------------------------------------------- | :------ | :---------------------------------------------------------------------------------------- |
| `type`           | `enum<payment>`    | `payment`                                    |         | Invoice type                                                                              |
| `parentId`       | `string` or `null` | `dd90187e-d1d0-405f-bf2f-242c15403297`       | `null`  | Parent invoice ID                                                                         |
| `clientId`       | `string`           | `46778124-f9e0-4eba-ae1a-ecd5c0d9e90b`       |         | ID of end customer, who makes the payment                                                 |
| `from`           | `string`           | `0x41ce73496136A0072013B9187550e30841eDeD74` |         | Wallet address from which customer made payment                                           |
| `cryptocurrency` | `string`           | `USDT`                                       |         | Cryptocurrency symbol                                                                     |
| `network`        | `string`           | `ethereum`                                   |         | Network symbol                                                                            |
| `currency`       | `string`           | `USD`                                        |         | Fiat currency symbol ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) alphabetic code) |
| `price`          | `number`           | `500`                                        |         | Price in fiat currency                                                                    |
