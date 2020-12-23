import { BigNumberish } from '@ethersproject/bignumber'
import { defaultAbiCoder } from './types'

import Decoder from './decoder'

export default class TxDecoder extends Decoder {
  decodeTx(tx: { data: string, value?: BigNumberish }) {
    for (let i = 0; i < this.interfaces.length; i++) {
      const iface = this.interfaces[i]
      const parsedTransaction = iface.parseTransaction(tx)
      if (parsedTransaction) {
        const parsedArgs = defaultAbiCoder.decode(
          iface.functions[parsedTransaction.name].inputs,
          `0x${tx.data.substring(10)}`
        )

        return {
          parsedArgs,
          ...parsedTransaction,
        }
      }
    }

    return null
  }
}
