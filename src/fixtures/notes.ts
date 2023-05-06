import { Note } from '@/models'
import { LoremIpsum } from 'lorem-ipsum'
import shortid from 'shortid'

const DATA: Array<Note> = []

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 12,
    min: 8
  },
  wordsPerSentence: {
    max: 32,
    min: 16
  }
})

const capitalizeFirstLetter = ([first, ...rest]: string): string =>
  first.toUpperCase() + rest.join('')

for (let index = 0; index < 100; index++) {
  DATA.push({
    id: shortid.generate().toString(),
    title: capitalizeFirstLetter(
      lorem.generateWords(Math.round(Math.random() * 3) + 2)
    ),
    body: capitalizeFirstLetter(lorem.generateWords())
  })
}

export default DATA
