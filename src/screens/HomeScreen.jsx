import React from 'react'
import ContactsMenu from '../components/ContactsMenu'
import MessagesMenu from '../components/MessagesMenu'

export const HomeScreen = () => {
  return (
    <div id='home-screen'>
        <div id='contacts-section'> <ContactsMenu /> </div>

        <div id='messages-section'> <MessagesMenu /> </div>
    </div>
  )
}
