import { Bank } from './bank'
import { Currency } from './currency'
import { Money } from './money'

export interface Expression {
  // eslint-disable-next-line no-unused-vars
  reduce (bank: Bank, to: Currency): Money
  // eslint-disable-next-line no-unused-vars
  plus (addend: Expression): Expression
  // eslint-disable-next-line no-unused-vars
  times (multiplier: number): Expression
}
