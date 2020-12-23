import { Interface, Fragment, JsonFragment } from './types'

export default class Decoder {
  readonly interfaces: Array<Interface>

  constructor(abis: Array<string | Array<Fragment | JsonFragment | string>> = []) {
    this.interfaces = new Array<Interface>()
    abis.forEach(abi => {
      const methodInterface = new Interface(abi)
      this.interfaces.push(methodInterface)
    })
  }
}
