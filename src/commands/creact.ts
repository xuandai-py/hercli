import {intro, outro, select, text} from '@clack/prompts'
import {Args, Command, Flags} from '@oclif/core'
import * as fs from 'node:fs'

// create a arrow promise function
// get user input

const getInput = async () => {
  const dirName = (await text({
    initialValue: 'my-app',
    message: 'What is the name of your project?',
    validate(value) {
      const regex = new RegExp('^[a-zA-Z-]+$')

      if (!value) {
        return 'Directory name is required 👀'
      }

      if (!regex.test(value)) {
        return 'Directory name may only contain letters and dashes 😬'
      }
    },
  })) as string
  return dirName
}

const existsDirectory = async (path: string): Promise<boolean> => {
  try {
    await fs.promises.access(path)

    const stats = await fs.promises.lstat(path)

    return stats.isDirectory()
  } catch {
    return false
  }
}

export default class Creact extends Command {
  static override args = {}

  static override description = 'describe the command here'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {}

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Creact)
    const dirName = await getInput()

    const dirExists = await existsDirectory(dirName)

    if (dirExists) {
      outro(`Directory ${dirName} already exists 😬`)
      return
    }

    const template = await select({
      initialValue: 'empty',
      message: 'Select a template',
      options: [
        {
          label: 'Empty',
          value: 'empty',
        },
        {
          label: 'React',
          value: 'react',
        },
      ],
    })

    console.log(template)

    intro('Welcome to creact cli')
  }
}
