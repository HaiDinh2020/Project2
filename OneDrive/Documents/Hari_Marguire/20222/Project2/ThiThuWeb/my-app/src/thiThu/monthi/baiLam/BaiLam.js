import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaBook, FaClock } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { RadioGroup, Radio } from 'react-radio-group'

const formatTime = (time) => {
    let totalHour = parseInt(Math.floor(time / 3600))
    let totalMinutes = parseInt(Math.floor(time / 60))
    let hours = parseInt(totalHour % 60)
    let minutes = Math.floor(totalMinutes % 60)
    let seconds = Math.floor(time % 60);

    if (hours <= 10) hours = '0' + hours;
    if (minutes <= 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    console.log(hours + ":" + minutes + ":" + seconds, time)
    return hours + ":" + minutes + ":" + seconds
}



function BaiLam() {
    const state = useLocation()

    const [time, setTime] = useState(state.state.time);
    const [countDown, setCountDown] = useState(time * 60);


    const [point, setPoint] = useState(0);


    const handleChoice = (e) => {
        console.log(e.target)
        // tính điểm
    }
    const handleSubmit = () => {

    }


    useEffect(() => {
        setTimeout(() => {
            setCountDown(countDown - 1)
            console.log(countDown)
        }, 1000);
        if (countDown <= 0) {
            alert('Đã hết giờ làm bài')
            handleSubmit();
        }

    }, [countDown])

    useEffect(() => {
        // gọi api dữ liệu câu hỏi,....
    }, [])

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

            {/* question.map() hêre */}
            <div className='question border-top border-5 border-info m-2 ' >
                <div className='question-title d-flex '>
                    <div className='question-number '>câu hỏi : 40</div>
                    <div className='question-level' >(Độ khó: dễ)</div>
                </div>
                <div className='question-content'>Cho cấp số nhân (un) vói u1=2 và u2=6. Công bội của cấp số nhân đã cho bằng</div>
                <div className='answer ' onChange={e => handleChoice(e)}>
                    <RadioGroup name={`cau${1}`}>
                        <div>
                            <Radio value="a" />Apple
                        </div>
                        <div>
                            <Radio value="b" />Orange
                        </div>
                        <div>
                            <Radio value="c" />Watermelon
                        </div>
                        <div>
                            <Radio value="d" />Water
                        </div>
                    </RadioGroup>
                </div>
            </div>





            <div className='d-flex justify-content-end'>
                <Link to="/trang-chu" onClick={handleSubmit} className="btn btn-primary btn-sm" role="button" aria-disabled="true">nộp bài</Link>
            </div>
        </Container>
    );
}

export default BaiLam;