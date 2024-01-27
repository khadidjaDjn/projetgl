import './messages.css'

import Navbar from './HomePage/Navbar';


const Messages = () => {
    const messages = [
        { name: 'John Doe', email: 'john@example.com', message: 'Hello there!' },
        { name: 'John Doe', email: 'john@example.com', message: 'Hello there!' },
        { name: 'John Doe', email: 'john@example.com', message: 'Hello there!' },
        { name: 'John Doe', email: 'john@example.com', message: 'Hello there!' },
        { name: 'John Doe', email: 'john@example.com', message: 'Hello there!' },
        // Add more messages as needed
      ];
    return ( 
        <div className='containerMsg'>
            <Navbar></Navbar>
        <div className='mssages'>

            <h1> your messages</h1>
            <div className='container'>
            <table className='message-table'>
          <thead>
            <tr>
              <th className='name'>Name</th>
              <th className='email'>Email</th>
              <th className='msg'>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index}>
                <td className='name'>{message.name}</td>
                <td className='email'>{message.email}</td>
                <td className='msg'>{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>

            </div>
            
        </div>
        </div>
     );
}
 
export default Messages;