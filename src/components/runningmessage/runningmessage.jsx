import React from 'react'
import { useState, useEffect, useRef } from 'react'

export default function RunningMessage({ messages, messagesIntervalMs, textRenderSpeedMs }) {
  const [isMessageText, setMessageText] = useState("")
  const [isMessageIndex, setMessageIndex] = useState(0)
  const [isRenderFinished, setRenderFinished] = useState(false)
  const [isAnimation, setAnimation] = useState(false)
  const index = useRef(0)

  function addLetter() {
    setMessageText(isMessageText + messages[isMessageIndex].msgbody[index.current])
    console.log('index current - ', index.current, ' letter - ', messages[isMessageIndex].msgbody[index.current])
    console.log('isMessageText - ', isMessageText)
    index.current++
  }

  useEffect(() => {
    setRenderFinished(false)
    setAnimation(false)
    
    if (index.current < messages[isMessageIndex].msgbody.length) {
      // let addChar = setInterval(addLetter, textRenderSpeedMs);
      let addChar = setTimeout(addLetter, textRenderSpeedMs);

      return () => clearInterval(addChar);
    }

    setTimeout(() => {
      setRenderFinished(true)
      console.log('render finished')
    }, messagesIntervalMs / 2);

    setTimeout(() => {
      setAnimation(true)
      console.log('set animation true')
    }, messagesIntervalMs * 0.75);

    setTimeout(() => {
      setMessageIndex(prev => (prev + 1) % messages.length)
      setMessageText('')
      index.current = 0
      console.log('timeout')
    }, messagesIntervalMs);

    return () => {
      console.log('cleanup')
    }
  }, [isMessageText, isMessageIndex])
  
  return (
    <div className="running-message">
      <div className={"message " + (isAnimation ? "transition" : "")}>
        <div className="title">
          {messages[isMessageIndex].title}
        </div>
        <span className="text">
          {isMessageText}
          {/* <div className={"circle " + (isRenderFinished ? "inactive" : "")}></div> */}

        </span>
        <div className={"circle " + (isRenderFinished ? "inactive" : "")}></div>

      </div>
    </div>
  )
}
