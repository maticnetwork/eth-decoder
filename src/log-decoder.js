import Decoder from "./decoder"

export default class LogDecoder extends Decoder {
  decodeLogs(logs = []) {
    return logs.map(log => {
      for (let i = 0; i < this._interfaces.length; i++) {
        const iface = this._interfaces[i]
        const parsedLog = iface.parseLog(log)
        if (parsedLog) {
          return {
            // parsedArgs,
            address: log.address.toLowerCase(),
            ...parsedLog,
            event: parsedLog.name,
            args: parsedLog.values
          }
        }
      }

      throw new Error("Log doesn't match")
    })
  }
}
