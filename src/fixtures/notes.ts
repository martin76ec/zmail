import { Note } from '@/models'
import { LoremIpsum } from 'lorem-ipsum'
import shortid from 'shortid'

const DATA: Array<Note> = []

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
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
    body: capitalizeFirstLetter(
      lorem.generateWords(Math.round(Math.random() * 20) + 5)
    )
  })
}

export default DATA
