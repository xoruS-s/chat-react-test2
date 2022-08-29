import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';
import classNames from "classnames";
import { Time, IconReaded, Avatar } from "../";
// import avatar from "../DialogItem"
// import waveSvg from "../../assets/img/wave.svg";
// import playSvg from "../../assets/img/play.svg";
// import pauseSvg from "../../assets/img/pause.svg";

const Message = ({
    avatar,
    user,
    text,
    date,
    audio,
    isMe,
    isReaded,
    attachments,
    isTyping}) => {

    // const [isPlaying, setIsPlaying] = useState(false);
    // const audioElem = useRef(null);
    //
    // useEffect(() => {
    //     audioElem.current.addEventListener('playing', () => {
    //         setIsPlaying(true)
    //     }, false);
    //
    //     audioElem.current.addEventListener('ended', () => {
    //         setIsPlaying(false)
    //     }, false);
    // }, []);
    //
    // const togglePlay = () => {
    //   audioElem.current.volume = "0.5";
    //   audioElem.current.play();
    // };



    return (
        <div className={classNames(
            'message', {
                'message--isme' : isMe,
                "message--is-typing": isTyping,
                "message--image": attachments && attachments.length === 1,
                "message--is-audio": audio
            })}>
            <div className="message__avatar">
                <Avatar user={user}/>
                {/*<img src={avatar} alt=""/>*/}
            </div>
            <div className="message__content">
                {
                    (audio || text || isTyping) && (
                    <div className="message__bubble">
                        { text && <p className="message__text">{text}</p> }
                        {
                            isTyping &&
                                <div className="message__typing">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                        }
                        {/*{*/}
                        {/*    audio &&*/}
                        {/*        <div className={"message__audio"}>*/}
                        {/*            <audio ref={audioElem} src={audio} preload={"auto"}/>*/}
                        {/*            <div className="message__audio-progress"></div>*/}
                        {/*            <div className="message__audio-info">*/}
                        {/*                <div className="message__audio-btn">*/}
                        {/*                    <button onClick={togglePlay}>*/}
                        {/*                        { isPlaying ? (<img src={pauseSvg}/>) : (<img src={playSvg}/>) }*/}
                        {/*                    </button>*/}
                        {/*                </div>*/}
                        {/*                <div className="message__audio-wave">*/}
                        {/*                    /!*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">*!/*/}
                        {/*                    /!*    <path fill="#0099ff" fill-opacity="1" d="M0,0L6.2,26.7C12.3,53,25,107,37,154.7C49.2,203,62,245,74,229.3C86.2,213,98,139,111,112C123.1,85,135,107,148,96C160,85,172,43,185,74.7C196.9,107,209,213,222,224C233.8,235,246,149,258,133.3C270.8,117,283,171,295,176C307.7,181,320,139,332,101.3C344.6,64,357,32,369,64C381.5,96,394,192,406,197.3C418.5,203,431,117,443,122.7C455.4,128,468,224,480,266.7C492.3,309,505,299,517,266.7C529.2,235,542,181,554,176C566.2,171,578,213,591,202.7C603.1,192,615,128,628,138.7C640,149,652,235,665,240C676.9,245,689,171,702,154.7C713.8,139,726,181,738,176C750.8,171,763,117,775,90.7C787.7,64,800,64,812,101.3C824.6,139,837,213,849,240C861.5,267,874,245,886,218.7C898.5,192,911,160,923,170.7C935.4,181,948,235,960,261.3C972.3,288,985,288,997,250.7C1009.2,213,1022,139,1034,117.3C1046.2,96,1058,128,1071,154.7C1083.1,181,1095,203,1108,192C1120,181,1132,139,1145,101.3C1156.9,64,1169,32,1182,53.3C1193.8,75,1206,149,1218,181.3C1230.8,213,1243,203,1255,197.3C1267.7,192,1280,192,1292,181.3C1304.6,171,1317,149,1329,128C1341.5,107,1354,85,1366,74.7C1378.5,64,1391,64,1403,96C1415.4,128,1428,192,1434,224L1440,256L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path>*!/*/}
                        {/*                    /!*</svg>*!/*/}
                        {/*                    <img src={waveSvg} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <span className="message__audio-duration">00:15</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*}*/}
                        <div className={"message__text-button"}>
                            <IconReaded isMe={isMe} isReaded={isReaded}/>
                            <div className={'message__date'}>
                                {date &&
                                    <Time date={date} />
                                }
                            </div>
                        </div>
                    </div>
                )}
                {attachments && (
                    <div className="message__attachments">
                        {
                            attachments.map((item, index) => (
                                <div key={index} className={"message__attachments-item"}>
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
};

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    audio: PropTypes.string
};

export default Message;