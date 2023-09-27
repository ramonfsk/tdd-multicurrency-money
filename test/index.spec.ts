import { joinText } from '@/index'

describe('should exibe hello + your localizantion', () => {
  it('should exibe hello + your localizantion', () => {
    const localization = 'world'
    const messasge = joinText(localization)
    expect(messasge).toEqual(`hello ${localization}!`)
  })
})
