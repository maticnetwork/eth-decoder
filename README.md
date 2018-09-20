# eth-log-decoder

Simple library to decode ethereum logs

### Install

```bash
$ npm install eth-log-decoder
```

### Usage

```js
import LogDecoder from "eth-log-decoder";

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

### License

MIT
