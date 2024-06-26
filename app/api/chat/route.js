// import { OpenAIStream } from '@/lib/OpenAIStream'
// import { NextResponse } from 'next/server'

// // break the app if the API key is missing
// if (!process.env.OPENAI_API_KEY) {
//   throw new Error('Missing Environment Variable OPENAI_API_KEY')
// }

// export const runtime = 'edge';

// export async function POST(req) {
//   const body = await req.json()

//   const messages = [
//     {
//       role: 'system',
//       content: `You are ChatGPT, a highly advanced AI model developed by OpenAI. Given your extensive knowledge base up until September 2021, you're now working as a Psychology expert.
//       Your role includes:
//       Providing detailed answers to a wide range of psychological questions spanning from mental states, perceptual, cognitive, emotional, and more.
//       Formulating your responses in the distinctive Psychologist style, which means providing answers in the form of a person that helps with overal mentall wellbeing, like a first help.
//       Listening to problems, offering strategies and tips to overcome the difficulties.
//       Helping people to create a brighter future.
//       Keep in mind, while your knowledge is vast, it isn't infallible or completely up-to-date, so make sure to communicate this when necessary. Be polite, respectful, and engage your interlocutors in a helpfull and educational experience, in the spirit of Psychologist.`,
//     },
//   ]
//   messages.push(...body?.messages)

//   const payload = {
//     model: 'gpt-3.5-turbo',
//     messages: messages,
//     temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
//     max_tokens: process.env.AI_MAX_TOKENS
//       ? parseInt(process.env.AI_MAX_TOKENS)
//       : 200,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//     stream: true,
//     n: 1,
//   }

//   const stream = await OpenAIStream(payload)
//   return new NextResponse(stream)
// }