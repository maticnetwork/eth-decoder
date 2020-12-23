import Decoder from './decoder'
import { ParsedLogDescription } from './types'

export default class LogDecoder extends Decoder {
  decodeLogs(logs = []): Array<ParsedLogDescription> {
    return logs.map(log => {
      for (let i = 0; i < this.interfaces.length; i++) {
        const iface = this.interfaces[i]
        try {
          const parsedLog = iface.parseLog(log)
          if (parsedLog) {
            return new ParsedLogDescription({
              ...parsedLog,
              address: log.address.toLowerCase(),
              event: parsedLog.name,
            })
          }
        } catch (e) {
          // ignore
        }
      }

      return null
    })
    .filter(obj => obj !== null)
  }
}
