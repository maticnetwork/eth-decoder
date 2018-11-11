import { Interface } from "ethers/utils/interface"

export default class Decoder {
  constructor(abis = []) {
    this._interfaces = []
    abis.forEach(abi => {
      const methodInterface = new Interface(abi)
      this._interfaces.push(methodInterface)
    })
  }

  getInterfaces() {
    return this._interfaces
  }
}
