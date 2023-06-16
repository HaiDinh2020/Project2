import Navibar from "../navigation/Navibar";
import { Route, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ThiThu.css"
import VerticalNavibar from "../navigation/VerticalNavibar";
import DeThi from "./monthi/DeThi";
import BaiLam from "./monthi/baiLam/BaiLam";
import Login from "../login/Login";
import BangDiem from "./bangdiem/BangDiem";
import TrangCaNhan from "./trangcanhan/TrangCaNhan";
import SignUp from "../signup/SignUp";
function ThiThu() {
    return (
        <div className="thithu">
            <Navibar />
            <Container fluid className="g-0">
                <Row >
                    <Col xs={2} className="bg-dark">
                        <VerticalNavibar />
                    </Col>
                    <Col >
                        <Routes>
                            <Route path="/" element={<DeThi />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/trang-chu" element={<DeThi />} />
                            <Route path="/bai-lam" element={<BaiLam />} />
                            <Route path="/bang-diem" element={<BangDiem />} />
                            <Route path="/trang-ca-nhan" element={<TrangCaNhan />} />
                        </Routes>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default ThiThu;