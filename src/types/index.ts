import { 
  Interface, 
  Fragment, JsonFragment, 
  defaultAbiCoder,
  LogDescription,
} from '@ethersproject/abi'
import { Description } from '@ethersproject/properties'

class ParsedLog extends LogDescription {
  readonly address: string;
  readonly event: string;
}

class ParsedLogDescription extends Description<ParsedLog> {
  readonly address: string;
  readonly event: string;
}

export {
  Interface,
  Fragment,
  JsonFragment,
  defaultAbiCoder,
  ParsedLogDescription,
}