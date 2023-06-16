import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import {MdGTranslate} from "react-icons/md"
import {FaSnowflake} from "react-icons/fa"
import {BsFillHSquareFill, BsFillCalculatorFill, BsReverseLayoutTextSidebarReverse, BsFillPersonVcardFill} from "react-icons/bs"
import { Link } from 'react-router-dom';

function VerticalNavibar() {
  return (
    <div className='sidebar min-vh-100 ' style={{position: 'sticky', top: 62}}  >
        <Navbar  bg="dark" variant="dark" className="justify-content-center " >
            <Nav defaultActiveKey="/home" className="flex-column  ">
                <Nav.Link as={Link} className="me-3" to="/bang-diem"><BsReverseLayoutTextSidebarReverse className="me-2"/>Bảng điểm</Nav.Link>
                <Nav.Link as={Link} className="me-3" to="/trang-ca-nhan"><BsFillPersonVcardFill className="me-2"/>Trang cá nhân</Nav.Link>
                <Nav.Link as={Link} className="me-3" to="/toan"><BsFillCalculatorFill className="me-2"/>Toán</Nav.Link>
                <Nav.Link as={Link} className="me-3" to="/ly"><AiFillSetting className="me-2"/>Lý</Nav.Link>
                    
                <Nav.Link as={Link} className="me-3" to="/hoa"><BsFillHSquareFill className="me-2"/>Hóa</Nav.Link>
                
                <Nav.Link as={Link} className="me-3" to="/sinh"><FaSnowflake className="me-2"/>Sinh</Nav.Link>
                
                <Nav.Link as={Link} className="me-3" to="/tieng-anh"><MdGTranslate className="me-2"/>Tiếng anh</Nav.Link>
                <Nav.Link as={Link} className="me-3" to="/dang-xuat"><AiOutlineLogout className="me-2"/>Đăng xuất</Nav.Link>
                <Nav.Link as={Link} className="me-3" to="/lien-he"><BsFillCalculatorFill className="me-2"/>Liên hệ</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default VerticalNavibar;