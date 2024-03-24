// 'use client';

// import { throttle } from '@/lib/throttle';
// import { useEffect, useState, useRef } from 'react';
// import { ChatLine, LoadingChatLine } from './chat-line';
// import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
// import cx from 'classnames';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { sendMessage } from '@/app/api/twinChat/route';
// import { userAgent } from 'next/server';

// // default first message to display

// const InputMessage = ({ loading, addMessage }) => {
//   const [isGeneratingQuestion, setIsGeneratingQuestion] = useState(false);
//   const [input, setInput] = useState('');
//   // const [responseMessage, setResponseMessage] = useState('');
//   const shouldShowLoadingIcon = loading || isGeneratingQuestion;
//   const inputActive = input !== '' && !shouldShowLoadingIcon;

//   const handleSendMessage = async () => {
//     try {
//       addMessage({
//         role: 'user',
//         content: input
//       })
//       setInput('');
//       setIsGeneratingQuestion(true);
//       const response = await sendMessage(input);
//       // setResponseMessage(answer);
//       addMessage({
//         role: 'assistant',
//         content: response
//       })
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsGeneratingQuestion(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0  flex flex-col items-center clear-both">
//       <div className="mx-2 my-4 flex-1 w-full md:mx-4 md:mb-[52px] lg:max-w-2xl xl:max-w-3xl">
//         <div className="relative mx-2 flex-1 flex-col rounded-md border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] sm:mx-4">
//           <input
//             aria-label="chat input"
//             required
//             className="m-0 w-full border-0 bg-transparent p-0 py-3 pl-4 pr-12 text-black"
//             placeholder="Type a message..."
//             value={input}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 handleSendMessage();
//               }
//             }}
//             onChange={(e) => {
//               setInput(e.target.value);
//             }}
//             disabled={isGeneratingQuestion}
//           />
//           <button
//             className={cx(
//               shouldShowLoadingIcon && 'hover:bg-inherit hover:text-inherit',
//               inputActive && 'bg-black hover:bg-neutral-800 hover:text-neutral-100',
//               'absolute right-2 top-2 rounded-sm p-1 text-neutral-800 opacity-60 hover:bg-neutral-200 hover:text-neutral-900 transition-colors'
//             )}
//             type="submit"
//             onClick={handleSendMessage}
//             disabled={shouldShowLoadingIcon}
//           >
//             {shouldShowLoadingIcon ? (
//               <div className="h-6 w-6 animate-spin rounded-full border-t-2 border-neutral-800 opacity-60 dark:border-neutral-100"></div>
//             ) : (
//               <div className={cx(inputActive && 'text-white', 'w-6 h-6')}>
//                 <PaperAirplaneIcon />
//               </div>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// const ChatTwin = () => {
//   const [messages, setMessages] = useState([
//     {
//       role: 'assistant',
//       content: localStorage.getItem('greet'),
//     }
//   ]);

//   const addMessage = (message) => {
//     setMessages(prevMsgs => [...prevMsgs, message]);
//   }

//   const mapMessagesToChatLines = () => {
//     return messages.map((message, index) => {
//       return <ChatLine content={message.content} role={message.role} key={`chatLine${index}`} />
//     });
//   }

//   let chatLines = mapMessagesToChatLines();

//   // Create a ref for the last chat line element
//   const lastChatLineRef = useRef(null);

//   useEffect(() => {
//     chatLines = mapMessagesToChatLines();

//     // Scroll to the last chat line when new messages are added
//     if (lastChatLineRef.current) {
//       lastChatLineRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [messages]);

//   return (
//     <div>
//       <div className='pt-[65px]' >
//         {chatLines}
//         <div style={{ height: '150px' }} />
//         <div ref={lastChatLineRef} />
//       </div>
//       <InputMessage addMessage={addMessage} />
//     </div>
//   )
// }

// export default ChatTwin;