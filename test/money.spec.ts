import { Dollar } from '@/dollar'
import { Euro } from '@/euro'

describe('Money', () => {
  it('should return 10 when five dollars are multiplied by two and 15 when multiplied by three', () => {
    const five: Dollar = new Dollar(5)
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy()
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
  })

  it('should return 10 when five euros are multiplied by two and 15 when multiplied by three', () => {
    expect(new Euro(5).equals(new Euro(5))).toBeTruthy()
    expect(new Euro(5).equals(new Euro(6))).toBeFalsy()
  })

  it('should return true when dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})
