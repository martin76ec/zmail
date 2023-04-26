import { Book } from '@/models'
import { LoremIpsum } from 'lorem-ipsum'
import shortid from 'shortid'

const DATA: Array<Book> = []

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const capitalizeFirstLetter = ([first, ...rest]: string): string =>
  first.toUpperCase() + rest.join('')

DATA.push({
  id: shortid.generate().toString(),
  name: capitalizeFirstLetter(
    lorem.generateWords(Math.round(Math.random() * 4))
  )
})

export default DATA
