const fs = require('fs')
const path = require('path')

const filePath = path.join(process.cwd(), 'problem2.txt')

fs.readFile(filePath, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const paragraphs = data.split('\n\n')
  const reg = / |\n/
  for (let p of paragraphs) {
    const line = p.split(reg)
    let newLine = ''
    for(let word of line) {
      if(newLine.length + 1 + word.length > 80) {
        console.log(newLine)
        newLine = ''
      }
      newLine += word + " "
    }
    console.log('')
  }
})