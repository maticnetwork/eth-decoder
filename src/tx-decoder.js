import { BigNumber } from "ethers/utils"
import { defaultAbiCoder } from "ethers/utils/abi-coder"

import Decoder from "./decoder"

export default class TxDecoder extends Decoder {
  decodeTx(tx = {}) {
    if (!tx.value) {
      tx.value = new BigNumber(0)
    }

    for (let i = 0; i < this._interfaces.length; i++) {
      const iface = this._interfaces[i]
      const parsedTransaction = iface.parseTransaction(tx)
      if (parsedTransaction) {
        const parsedArgs = defaultAbiCoder.decode(
          iface.functions[parsedTransaction.name].inputs,
          `0x${tx.data.substring(10)}`
        )

        return {
          parsedArgs,
          ...parsedTransaction
        }
      }
    }

    return null
  }
}
