import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineLogout } from "react-icons/ai";
import { BsSearch } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './NavibarSlice';
import { defaultInfor } from '../thiThu/trangcanhan/TrangCaNhanSlice';
import { Button, Form } from "react-bootstrap";

function Navibar() {
  const userName = useSelector((state) => state.userInfo.userName)
  const checkLogin = useSelector(state => state.isLogin.checkLogin)
  const avatar = useSelector((state) => state.userInfo.avatar)
 
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!checkLogin) {
      navigate('/login')
    }
  }

  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container fluid >
        <Navbar.Brand as={Link} to="/trang-chu" >THI THU ONLINE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button >
                <BsSearch />
              </Button>
            </Form>

          </Nav>
        </Navbar.Collapse>
        <Nav className='align-items-center'>
          <Navbar className='me-2'><img src={avatar} alt='' width='30' height='30' style={{ borderRadius: 50 }}></img></Navbar>
          <Navbar.Text className='me-2 text-white' style={{ cursor: 'pointer' }} onClick={handleLogin}>
            {checkLogin ? userName : "Login"}
          </Navbar.Text>
          <Nav.Link as={Link} to="/trang-chu" onClick={() => {
             dispatch(logout())
             dispatch(defaultInfor())
            }}><AiOutlineLogout /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navibar;