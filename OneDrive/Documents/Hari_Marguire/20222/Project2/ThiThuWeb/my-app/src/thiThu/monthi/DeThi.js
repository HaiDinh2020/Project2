
import { Link } from 'react-router-dom'
import { FaBook, FaClock } from 'react-icons/fa'
import "./DeThi.css"
import { useState } from 'react';
import { useSelector } from 'react-redux'
import BinhLuan from '../comment/BinhLuan';
function DeThi() {
    const [examName, setExamName] = useState(' Đề thi thử THPT quốc gia 2020 - Bộ Giáo Dục - lần 2')
    const [time, setTime] = useState(50);
    const [numberQuestion, setNumberQuestion] = useState(40)

    const checkLogin = useSelector(state => state.isLogin.checkLogin);
    const checkLog = (e) => {

        if (!checkLogin) {
            e.preventDefault();
            alert("Bạn cần đăng nhập để thi thử")
        }
    }
    return (
        <div className="de-thi col-8">
            <h2>Tuyển Chọn Các Đề Thi </h2>

            <div className="subject ">
                <div className="box-header">
                    <div className="box-title text-uppercase">Môn Toán</div>
                </div>
                <div className="subject-body mt-3 ">
                    <div className="exam-box border-top border-5 border-info">
                        <Link to="/bai-lam" state={{ examName: examName, time: time, numberQuestion: numberQuestion }}
                            className='d-flex mt-1 align-items-center text-decoration-none'
                            onClick={e => checkLog(e)}>
                            <div className='exam-name me-3 col-10'>{examName} </div>
                            <button type="button" className="btn btn-primary btn-sm">Thi thử</button>
                        </Link>
                        <div className='d-flex'>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaBook />
                                <span> {numberQuestion} câu hỏi</span>
                            </div>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaClock />
                                <span> {time} phút</span>
                            </div>
                        </div>
                    </div>

                    <div className="exam-box border-top border-5 border-info">
                        <Link to="/de_thi" className='d-flex mt-1 align-items-center text-decoration-none'>
                            <div className='exam-name me-3 col-10'> Đề thi thử THPT quốc gia 2020 - Bộ Giáo Dục - lần 2 </div>
                            <button type="button" className="btn btn-primary btn-sm">Thi thử</button>
                        </Link>
                        <div className='d-flex'>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaBook />
                                <span>50 câu hỏi</span>
                            </div>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaClock />
                                <span>90 phút</span>
                            </div>
                        </div>
                    </div>

                    <div className="exam-box border-top border-5 border-info">
                        <Link to="/de_thi" className='d-flex mt-1 align-items-center text-decoration-none'>
                            <div className='exam-name me-3 col-10'> Đề thi thử THPT quốc gia 2020 - Bộ Giáo Dục - lần 2 </div>
                            <button type="button" className="btn btn-primary btn-sm">Thi thử</button>
                        </Link>
                        <div className='d-flex'>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaBook />
                                <span>50 câu hỏi</span>
                            </div>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaClock />
                                <span>90 phút</span>
                            </div>
                        </div>
                    </div>

                    <div className="exam-box border-top border-5 border-info">
                        <Link to="/de_thi" className='d-flex mt-1 align-items-center text-decoration-none'>
                            <div className='exam-name me-3 col-10'> Đề thi thử THPT quốc gia 2020 - Bộ Giáo Dục - lần 2 </div>
                            <button type="button" className="btn btn-primary btn-sm">Thi thử</button>
                        </Link>
                        <div className='d-flex'>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaBook />
                                <span>50 câu hỏi</span>
                            </div>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaClock />
                                <span>90 phút</span>
                            </div>
                        </div>
                    </div>

                    <div className="exam-box border-top border-5 border-info">
                        <Link to="/de_thi" className='d-flex mt-1 align-items-center text-decoration-none'>
                            <div className='exam-name me-3 col-10'> Đề thi thử THPT quốc gia 2020 - Bộ Giáo Dục - lần 2 </div>
                            <button type="button" className="btn btn-primary btn-sm">Thi thử</button>
                        </Link>
                        <div className='d-flex'>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaBook />
                                <span>50 câu hỏi</span>
                            </div>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaClock />
                                <span>90 phút</span>
                            </div>
                        </div>
                    </div>

                    <div className="exam-box border-top border-5 border-info">
                        <Link to="/de_thi" className='d-flex mt-1 align-items-center text-decoration-none'>
                            <div className='exam-name me-3 col-10'> Đề thi thử THPT quốc gia 2020 - Bộ Giáo Dục - lần 2 </div>
                            <button type="button" className="btn btn-primary btn-sm">Thi thử</button>
                        </Link>
                        <div className='d-flex'>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaBook />
                                <span>50 câu hỏi</span>
                            </div>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaClock />
                                <span>90 phút</span>
                            </div>
                        </div>
                    </div>

                    <div className="exam-box border-top border-5 border-info">
                        <Link to="/de_thi" className='d-flex mt-1 align-items-center text-decoration-none'>
                            <div className='exam-name me-3 col-10'> Đề thi thử THPT quốc gia 2020 - Bộ Giáo Dục - lần 2 </div>
                            <button type="button" className="btn btn-primary btn-sm">Thi thử</button>
                        </Link>
                        <div className='d-flex'>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaBook />
                                <span>50 câu hỏi</span>
                            </div>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaClock />
                                <span>90 phút</span>
                            </div>
                        </div>
                    </div>

                    <div className="exam-box border-top border-5 border-info">
                        <Link to="/de_thi" className='d-flex mt-1 align-items-center text-decoration-none'>
                            <div className='exam-name me-3 col-10'> Đề thi thử THPT quốc gia 2020 - Bộ Giáo Dục - lần 2 </div>
                            <button type="button" className="btn btn-primary btn-sm">Thi thử</button>
                        </Link>
                        <div className='d-flex'>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaBook />
                                <span>50 câu hỏi</span>
                            </div>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaClock />
                                <span>90 phút</span>
                            </div>
                        </div>
                    </div>

                    <div className="exam-box border-top border-5 border-info">
                        <Link to="/de_thi" className='d-flex mt-1 align-items-center text-decoration-none'>
                            <div className='exam-name me-3 col-10'> Đề thi thử THPT quốc gia 2020 - Bộ Giáo Dục - lần 2 </div>
                            <button type="button" className="btn btn-primary btn-sm">Thi thử</button>
                        </Link>
                        <div className='d-flex'>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaBook />
                                <span>50 câu hỏi</span>
                            </div>
                            <div className='mr-3 p-1 d-flex align-items-center'>
                                <FaClock />
                                <span>90 phút</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BinhLuan/>
        </div>
    );
}

export default DeThi;