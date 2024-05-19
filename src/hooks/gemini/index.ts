import {GoogleGenerativeAI} from '@google/generative-ai'

// Access your API key as an environment variable (see "Set up your API key" above)
const key: string = process.env.API_KEY || ''

if (!key) {
  console.error('Missing environment variable: MY_API_KEY')
  throw new Error('Missing environment variable: MY_API_KEY')
}

const genAI = new GoogleGenerativeAI(key)

// ...

const model = genAI.getGenerativeModel({model: 'gemini-pro'})
export async function run(prompt: string) {
  //   const prompt = 'Write a story about a vietnam.'

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  console.log(text)
  // ...
}
