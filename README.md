# eth-decoder

[![Build Status](https://travis-ci.org/maticnetwork/eth-decoder.svg?branch=master)](https://travis-ci.org/maticnetwork/eth-decoder)

Simple library to decode ethereum transaction and logs

### Install

```bash
$ npm install --save @maticnetwork/eth-decoder
```

### Usage

**Log parser**

```js
import { LogDecoder } from "@maticnetwork/eth-decoder"

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
import { TxDecoder } from "@maticnetwork/eth-decoder"

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
