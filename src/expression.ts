import { Bank } from './bank'
import { Currency } from './currency'
import { Money } from './money'

export interface Expression {
  // eslint-disable-next-line no-unused-vars
  reduce (bank: Bank, to: Currency): Money
}
