import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaBook, FaClock } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { RadioGroup, Radio } from 'react-radio-group'
import { useSelector } from 'react-redux';
import anh from '../../sasuke_mks.jpg'
var Latex = require('react-latex');

const formatTime = (time) => {
    let totalHour = parseInt(Math.floor(time / 3600))
    let totalMinutes = parseInt(Math.floor(time / 60))
    let hours = parseInt(totalHour % 60)
    let minutes = Math.floor(totalMinutes % 60)
    let seconds = Math.floor(time % 60);

    if (hours <= 10) hours = '0' + hours;
    if (minutes <= 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return hours + ":" + minutes + ":" + seconds
}



function BaiLam() {
    const state = useLocation()

    const cauhoi = useSelector(state => state.cauhoi.cauhoi)

    const [time, setTime] = useState(state.state.time);
    const [countDown, setCountDown] = useState(time * 60);
    const [anhdethi, setanhdethi] = useState()



    const [point, setPoint] = useState(0);


    const handleAnh = (buferanh) => {
        if (buferanh != null && buferanh.data != null) {
            // setanhdethi(btoa(String.fromCharCode(...new Uint8Array(buferanh.data))))

        }
    }
    const handleChoice = (e) => {
        console.log(e.target)
        // tính điểm
    }
    const handleSubmit = () => {

    }

    const _arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }




    useEffect(() => {
        setTimeout(() => {
            setCountDown(countDown - 1)
        }, 1000);
        if (countDown <= 0) {
            alert('Đã hết giờ làm bài')
            handleSubmit();
        }
    }, [countDown])


    return (
        <Container className='p-3 '>
            <div className="exam-name text-center text-primary ">{state.state.examName}</div>
            <div className='text-center text-primary'>Người làm bài: UserName</div>
            <div className='d-flex'>
                <div className='col-9 d-flex'>
                    <div className='mr-3 p-1 d-flex align-items-center'>
                        <FaBook />
                        <span> {state.state.numberQuestion} câu hỏi</span>
                    </div>
                    <div className='mr-3 p-1 d-flex align-items-center'>
                        <FaClock />
                        <span> {time} phút</span>
                    </div>
                </div>
                <button className='col-2 disabled'>{formatTime(countDown)}</button>
            </div>

            {cauhoi.map((items, index) => {
                return (
                    <div className='question border-top border-5 border-info m-2 ' >
                        <div className='question-title d-flex '>
                            <div className='question-number '>câu hỏi : 40</div>
                            <div className='question-level' >(Độ khó: dễ)</div>
                        </div>
                        <div className='question-content'><Latex>{items.NOI_DUNG}</Latex></div>
                        {
                            items.NOI_DUNG_ANH && items.NOI_DUNG_ANH.data
                                ?
                                <img style={{ height: '200px' }} src={`data:image/${items.NOI_DUNG_ANH.contentType};base64,${_arrayBufferToBase64(items.NOI_DUNG_ANH.data)}`} alt='noi_dung_anh' ></img>
                                :
                                null
                        }
                        <div className='answer ' onChange={e => handleChoice(e)}>
                            <RadioGroup name={items.ID_CAU_HOI}>
                                <div>
                                    <Radio value="a" /><Latex>{items.DAP_AN_A}</Latex>
                                    {
                                        items.DAP_AN_A_ANH && items.DAP_AN_A_ANH.data
                                            ?
                                            <img style={{ height: '200px' }} src={`data:image/${items.DAP_AN_A_ANH.contentType};base64,${_arrayBufferToBase64(items.DAP_AN_A_ANH.data)}`} alt='noi_dung_anh' ></img>
                                            :
                                            null
                                    }
                                </div>
                                <div>
                                    <Radio value="b" /><Latex>{items.DAP_AN_B}</Latex>
                                    {
                                        items.DAP_AN_B_ANH && items.DAP_AN_B_ANH.data
                                            ?
                                            <img style={{ height: '200px' }} src={`data:image/${items.DAP_AN_B_ANH.contentType};base64,${_arrayBufferToBase64(items.DAP_AN_B_ANH.data)}`} alt='noi_dung_anh' ></img>
                                            :
                                            null
                                    }
                                </div>
                                <div>
                                    <Radio value="c" /><Latex>{items.DAP_AN_C}</Latex>
                                    {
                                        items.DAP_AN_C_ANH && items.DAP_AN_C_ANH.data
                                            ?
                                            <img style={{ height: '200px' }} src={`data:image/${items.DAP_AN_C_ANH.contentType};base64,${_arrayBufferToBase64(items.DAP_AN_C_ANH.data)}`} alt='noi_dung_anh' ></img>
                                            :
                                            null
                                    }
                                </div>
                                <div>
                                    <Radio value="d" /><Latex>{items.DAP_AN_D}</Latex>
                                    {
                                        items.DAP_AN_D_ANH && items.DAP_AN_D_ANH.data
                                            ?
                                            <img style={{ height: '200px' }} src={`data:image/${items.DAP_AN_D_ANH.contentType};base64,${_arrayBufferToBase64(items.DAP_AN_D_ANH.data)}`} alt='noi_dung_anh' ></img>
                                            :
                                            null
                                    }
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                )
            })}





            <div className='d-flex justify-content-end'>
                <Link to="/trang-chu" onClick={handleSubmit} className="btn btn-primary btn-sm" role="button" aria-disabled="true">nộp bài</Link>
            </div>
        </Container>
    );
}

export default BaiLam;