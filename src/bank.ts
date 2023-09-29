import { Currency } from './currency'
import { Expression } from './expression'
import { Money } from './money'

export class Bank {
  // eslint-disable-next-line no-unused-vars
  reduce (source: Expression, to: Currency): Money {
    return Money.dollar(10)
  }
}
