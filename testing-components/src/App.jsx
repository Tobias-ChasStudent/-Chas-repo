import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Button from './components/Button'
import LinkList from './components/LinkList'
import ChakraModal from './components/ChakraModal'

function App() {

  const socialLinks = [
    "Discord",
    "Instagram",
    "LinkedIn"
  ]

  const navLinks = [
    "Home",
    "About Me",
    "Contact"
  ]

  const onNormal = () => {
    console.log("Normal Button Click");
  }
  const onSubmit = () => {
    console.log("Submit Button Click");
  }

  return (
    <ChakraProvider>
      <h1>My reuseable components</h1>
      <h3>Buttons</h3>
      <Button type="button" onClick={onNormal} className="btn">Normal Button</Button>
      <Button type="submit" onClick={onSubmit} className="btn-submit">Submit Button</Button>

      <h3>Link lists</h3>
      <LinkList id="social-media" links={socialLinks} />
      <LinkList id="navbar" links={navLinks} />

      <h3>Chakra Modal</h3>
      <ChakraModal header="Modal number 1" body="This is my first modal" />
      <ChakraModal header="Modal number 2" body="And this is my second modal" />
    </ChakraProvider>
  )
}

export default App
