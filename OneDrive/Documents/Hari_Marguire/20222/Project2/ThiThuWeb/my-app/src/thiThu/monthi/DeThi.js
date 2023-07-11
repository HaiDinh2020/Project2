
import { Link } from 'react-router-dom'
import { FaBook, FaClock } from 'react-icons/fa'
import "./DeThi.css"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import BinhLuan from '../comment/BinhLuan';
import { getDeThi } from './DeThiSlice';
import axios from 'axios';
import { showCauHoi } from './baiLam/BaiLamSlice';

function DeThi() {

    const dethi = useSelector(state => state.dethi.dethi);

    // const [exam, setExam] = useSelector([])
    const [examName, setExamName] = useState()
    const [time, setTime] = useState(50);
    const [numberQuestion, setNumberQuestion] = useState(40)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDeThi());
    }, [dispatch])

    const checkLogin = useSelector(state => state.isLogin.checkLogin);

    const checkLog = (e) => {

        if (!checkLogin) {
            e.preventDefault();
            alert("Bạn cần đăng nhập để thi thử")
        }
    }

    const handleThiThu = (ID_DE_THI) =>  {
        axios.post('http://localhost:5000/id-de-thi',
        {ID_DE_THI}
        
        ).then((res) => {
            if (res.data.message === "success") {
                // dispatch(showCauHoi())
                dispatch(showCauHoi(res.data.cauhoi))
                // notify();
            } else {
                alert(res.data.message);
            }
            
        })
    }

    return (
        <div className="de-thi col-8">
            <h2>Tuyển Chọn Các Đề Thi </h2>

            <div className="subject ">
                <div className="box-header">
                    <div className="box-title text-uppercase">Môn Toán</div>
                </div>
                <div className="subject-body mt-3 ">
                    {dethi.map((items, index) => {
                        return (
                            <div className="exam-box border-top border-5 border-info" key={index}>
                                <Link to="/bai-lam" state={{ examName: items.TEN, time: items.THOI_GIAN, numberQuestion: items.SO_CAU }}
                                    className='d-flex mt-1 align-items-center text-decoration-none'
                                    onClick={e => checkLog(e)}>
                                    <div className='exam-name me-3 col-10'>{items.TEN} </div>
                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => handleThiThu(items.ID_DE_THI)}>Thi thử</button>
                                </Link>
                                <div className='d-flex'>
                                    <div className='mr-3 p-1 d-flex align-items-center'>
                                        <FaBook />
                                        <span> {items.SO_CAU} câu hỏi</span>
                                    </div>
                                    <div className='mr-3 p-1 d-flex align-items-center'>
                                        <FaClock />
                                        <span> {items.THOI_GIAN} phút</span>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
            <BinhLuan />
        </div>
    );
}

export default DeThi;