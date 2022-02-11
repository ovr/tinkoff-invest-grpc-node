# Tinkoff Invest gRPC Client with TypeScript definitions

[![npm version](https://badge.fury.io/js/tinkoff-invest.svg)](https://badge.fury.io/js/tinkoff-invest)

```sh
yarn add tinkoff-invest
npm i --save tinkoff-invest
```

```typescript
const client = new TinkoffClient(
    'mytoken'
);

// Response will be a gRPC message with TS definitions
const response = await client.users.getAccounts(new GetAccountsRequest());
console.log('Response', response.toObject());
```

# LICENSE

MIT

