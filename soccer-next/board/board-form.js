import style from "./style/board-form.module.css";
import React,{useState} from 'react' 

export default function BoardhtmlForm(){
    const [inputs, setInputs] = useState({})
    const {passengerId,name,teamId,subject} = inputs;

    const handleSubmit = e => {
        e.preventDefault()
        const Request = {passengerId,name,teamId,subject}
        alert(`데이터셋 출력 : ${JSON.stringify(Request)}`)
    }
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setInputs({...inputs, [name]:value})
    }
    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <htmlForm action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">PassengerId</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} id="passengerId" 
                name="passengerId" placeholder="사용자 id 입력" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">Name</label>
                </div>
                <div className={style.col75}>
                <input type="text" id="name" name="name" 
                placeholder="사용자 이름 입력" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">Team</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange}>
                    <option value="K09" selected>서울 FC서울</option>
                    <option value="K02">수원 삼성블루윙즈</option>
                    <option value="K04">인천 유나이티드</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">Subject</label>
                </div>
                <div className={style.col75}>
                <textarea id="subject" name="subject" placeholder="게시글 입력" 
                style={{height:200 + "px"}} onChange={handleChange}></textarea>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </div>
            </htmlForm>
            </div>
    </>);
}