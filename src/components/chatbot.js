import * as React from 'react';
import Image from 'next/image';
import { Input, Button, Space, Modal } from 'antd';
import styles from '@/styles/chatbot.module.scss'

const Chatbot = () => {
  const [messages, setMessages] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };


  const handleUserMessage = () => {
    const data = [...messages];
    data.push({
      sender: 'user',
      content: inputValue,
    })
    data.push({
      sender: 'bot',
      content: '...',
    })
    setMessages([...data]);
    setInputValue('');
  };

  React.useEffect(() => {
    const conversationData = [
      { sender: 'bot', content: 'Tell me what product do you want to do?' },
      { sender: 'user', content: 'I want to create restaurant reservation website!' },
      { sender: 'bot', content: 'Who are your target users?' },
      { sender: 'user', content: 'Chinese restaurants' },
      { sender: 'bot', content: 'Will you release at?' },
      { sender: 'user', content: 'Singapore' },
      { sender: 'bot', content: 'To continue, please enter your email.' },
      { sender: 'user', content: 'ngoc@rockship.co' },
      { sender: 'bot', content: 'Click here to build your product!' },
    ];
    setMessages([...conversationData]);
  }, []);

  return (
    <div className={styles['chatbot']}>
      <div className={styles['chat-header']}>
        <Image src={'/rockship_black.svg'} alt='rockship_black' height={24} width={24} />
        <p>PLAYGROUND</p>
      </div>
      <div className={styles['chat-window']}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={styles[message.sender === 'bot' ? 'bot-message' : 'user-message']}
          >
            {message.content !== 'Click here to build your product!' ?
              <p>{message.content}</p> :
              <p>
                {' '}<><span onClick={showModal}>Click here</span> to see our feature suggestions!</>
              </p>
            }
          </div>
        ))}
      </div>
      <Space.Compact className={styles['button-group']}>
        <Input
        className={styles['custom-input']}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Chat with us your tech product idea'
        />
        <Button className={styles['send-button'] + ' ' + styles['attach-btn']} ></Button>
        <Button className={styles['send-button']+ ' ' + styles['send-btn']} ></Button>
      </Space.Compact>
      <p className={styles['privacy']}><u>Privacy Protection</u></p>
      <Modal
        open={open}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles['confirm-box']}>
          <img src='/mail_ty.png' alt='mail_ty' />
          <p>Thank you for your inquiry! We will get back to you about the timeline and quotation within 3 days.</p>
          <Button
            className={styles['confirm-button']}
            onClick={handleCancel}
          >
            Done!
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Chatbot;
