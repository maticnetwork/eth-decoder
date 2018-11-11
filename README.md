# eth-log-decoder

Simple library to decode ethereum logs and transaction

### Install

```bash
$ npm install --save eth-log-decoder
```

### Usage

**Log parser**

```js
import { LogDecoder } from "eth-log-decoder"

const ERC20TokenABI = /* { .... } */ // ABI for ERC20 token contract

// create decoder object
const decoder = new LogDecoder(
  [
    ERC20TokenABI,
    // ... other ABIs
  ]
);

// parse logs
const parsedLogs = decoder.decodeLogs(receipt.logs) // For truffle testsuite, use `receipt.receipt.logs`
console.log(parsedLogs)
```

**Tx parser**

```js
import { TxDecoder } from "eth-log-decoder"

const ERC20TokenABI = /* { .... } */ // ABI for ERC20 token contract

// create decoder object
const decoder = new TxDecoder(
  [
    ERC20TokenABI,
    // ... other ABIs
  ]
);

// parse tx
const parsedTx = decoder.decodeTx({ data: '0x..', value: '1000', from: '...', ... })
console.log(parsedTx)
```

### License

MIT
