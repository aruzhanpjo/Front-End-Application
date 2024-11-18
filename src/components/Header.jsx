import { Nav, Container, Link, Button } from 'react-bootstrap'

const Header = () => {
  const date = new Date()
  return (
    <Nav className='bg-primary p-2 '>
      <Container className='d-flex justify-content-between align-items-center'>
        <h3 className='fw-bold'>75 Hard</h3>
        <span>{date.toDateString()}</span>
        <Button variant='outline-light'>Log In</Button>


      </Container>
    </Nav>
  )
}

export default Header
