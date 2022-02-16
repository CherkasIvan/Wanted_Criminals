import { UnknownPropertyPipe } from "./unknown-property.pipe"

describe('UnknownPropertyPipe', () => {
    let unknown = new UnknownPropertyPipe()
  
    it('Should return "Unknown" if string is empty', () => {
      expect(unknown.transform('')).toBe(
        'Unknown'
      )
    })
  
    it('Should return "Hello" if string is hello', () => {
      expect(unknown.transform('Hello')).toBe(
        'Hello'
      )
    })
  })