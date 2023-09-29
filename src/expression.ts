import { Currency } from './currency'
import { Money } from './money'

export interface Expression {
  // eslint-disable-next-line no-unused-vars
  reduce (to: Currency): Money
}
