import {GoogleGenerativeAI} from '@google/generative-ai'
import 'dotenv/config'

// Access your API key as an environment variable (see "Set up your API key" above)
const key = process.env.API_KEY || ''
if (!key) {
  console.error('Missing environment variable: API_KEY')
  throw new Error('Missing environment variable: API_KEY')
}

const genAI = new GoogleGenerativeAI(key)
const model = genAI.getGenerativeModel({model: 'gemini-pro'})

export async function run(prompt: string) {
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  console.log(text)
}

// export function run(prompt: string): Promise<string> {
//   return new Promise((resolve, reject) => {
//     model
//       .generateContent(prompt)
//       .then((result) => result.response)
//       .then((response) => response.text())
//       .then((text) => resolve(text)) // Resolve the Promise with the generated text
//       .catch((error) => {
//         console.error('Error generating content:', error)
//         // Handle error gracefully (optional)
//         reject(error) // Reject the Promise with the error
//       })
//   })
// }
