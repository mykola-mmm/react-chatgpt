import React from 'react'
import { useState, useEffect, useRef } from 'react'

export default function RunningMessage({ messages, messagesIntervalMs, textRenderSpeedMs }) {
  const [isMessageText, setMessageText] = useState("")
  const [isMessageIndex, setMessageIndex] = useState(0)
  // const [isMessageRendered, setMessageRendered] = useState(null)
  const index = useRef(0)

  function addLetter() {
    setMessageText(isMessageText + messages[isMessageIndex].msgbody[index.current])
    // setMessageText(prev => prev + messages[isMessageIndex].msgbody[index.current]) // not working

    console.log('index current - ', index.current, ' letter - ', messages[isMessageIndex].msgbody[index.current])
    console.log('isMessageText - ', isMessageText)
    index.current++
  }

  useEffect(() => {
    if (index.current < messages[isMessageIndex].msgbody.length) {
      let addChar = setInterval(addLetter, 10);
      return () => clearInterval(addChar);
    }

    // clearTimeout(timeout);
    setTimeout(() => {
      setMessageIndex(prev => (prev + 1) % messages.length)
      setMessageText('')
      index.current = 0
    }, 1000);

    return (
    console.log('cleanup')
    // setTimeout(()=>{console.log('delay')}, 1000)
    // setMessageIndex(prev => (prev + 1) % messages.length)
    // setMessageText('')
    // index.current = 0
  )

    

  }, [isMessageText])
  
  return (
    <div className="running-message">
      <div className="message">
        <div className="title">
          {messages[isMessageIndex].title}
        </div>
        <div className="text">
          {isMessageText}
        </div>
      </div>
    </div>
  )
}
