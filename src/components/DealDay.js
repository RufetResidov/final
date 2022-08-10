import React, { useEffect, useState } from 'react';
import { dealDay } from '../utils/constants';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
const DealDay = () => {
    return (
        <Wrapper>   <div className='deal-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="discount-image-details-2">
                            <div className="discount-images">
                                <img src={dealDay.image1} className="img-fluid flower-images-1 blur-up" alt="" />
                                <img src={dealDay.image2} className="img-fluid flower-images-2 blur-up" alt="" />
                            </div>
                            <div className="discunt-details mt-lg-0 mt-4">
                                <div>
                                    <div className="heart-button heart-button-light">
                                        <FaHeart />
                                    </div>
                                    <div className="discount-shop">
                                        <h2>Shop Now</h2>
                                        <h6>BUY ONE GET ONE FREE</h6>
                                    </div>

                                    <h5 className="mt-3">Special Discount <span className="theme-color">{dealDay.sale}% OFF</span></h5>
                                    <h2 className="mt-3 deal-text">Deal Of The Day <br />from <span className="theme-color">$75</span>
                                    </h2>
                                    <div className="timer-style-2 mt-xl-1 my-3 justify-content-center d-flex">
                                        <CountdownTimer />
                                    </div>
                                    <Button/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
.deal-section {
    padding: 2rem 0;
    .discount-image-details-2 {
        background-color: #eff3f7;
        position: relative;
        height: 600px;
        overflow: hidden;
        .discount-images {
            margin-right: 80px;
            .flower-images-1 {
                position: absolute;
                top: -75px;
                left: -215px;
                transform: rotate(35deg);
                width: 53%;
            }
            .flower-images-2 {
                position: absolute;
                top: -250px;
                right: -330px;
                width: 67%;
                transform: rotate(325deg);
            }
        }
    }
    .discount-image-details-2 {
        .discount-shop {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            user-select: none;
            font-weight: 500;
            color: #fff;
            background-color: #3a9943;
            padding: calc(13px + (25 - 13) * ((100vw - 320px) / (1920 - 320)));
            h2 {
                font-size: calc(15px + (25 - 15) * ((100vw - 320px) / (1920 - 320)));
            }
            h6 {
                letter-spacing: 1px;
                margin-top: calc(8px + (15 - 8) * ((100vw - 320px) / (1920 - 320)));
            }
            @media (max-width:991px) {
                display: none;
                .discount-image-details-2 .discunt-details {
                    position: relative;
                    width: 100%;
                    display: block;
                }
            }
        }
        .discunt-details {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            .heart-button {
                padding: 15px;
                border-radius: 50%;
                display: inline-block;
            }
            .heart-button-light {
                background-color: #fff;
                svg {
                    fill: #3a9943;
                    stroke: #3a9943;
                    width: 20px;
                    height: 20px;
                }
            }
            .deal-text {
                font-size: calc(22px + (45 - 22) * ((100vw - 320px) / (1920 - 320)));
                line-height: 1.1;
                font-weight: 900;
            }
            h5 {
                color: var(--clr-black)black;
                font-size: 20px;
            }
            .theme-color {
                color: #3a9943;
            }
            .timer-banner {
                display: flex !important;
                align-items: center;
                justify-content: center;
                position: relative;
            }
        }
    }
    .timer-style-2 {
        ul {
            margin: calc(-5px + (-15 - -5) * ((100vw - 320px) / (1920 - 320)));
            display: flex;
            font-weight: 600;
            align-items: center;
            li {
                margin: calc(5px + (15 - 5) * ((100vw - 320px) / (1920 - 320)));
                background-color: #fff;
                padding: 5px;
                margin-right: 0;
                color: #212529;
                @media only screen and (min-width: 350px) and (max-width: 991px) {
                    padding: calc(8px + (10 - 8) * ((100vw - 320px) / (1920 - 320)))
                        calc(12px + (20 - 12) * ((100vw - 320px) / (1920 - 320))) !important;
                }
                @media only screen and (min-width: 992px) and (max-width: 2000px) {
                    padding: calc(8px + (10 - 8) * ((100vw - 320px) / (1920 - 320)))
                        calc(12px + (20 - 12) * ((100vw - 320px) / (1920 - 320))) !important;
                }
                .countdown-amount {
                    color: #3a9943;
                    display: block;
                    font-size: 20px;
                    font-weight: 600;
                }
            }
        }
    }
     @media (max-width:1366px) {
        .discount-image-details-2 {
            height: 500px;
        }
    }
     @media (max-width:1199px) {
        .discount-image-details-2 {
            height: 410px;
        }
    }
     @media (max-width:991px) {
        .discount-image-details-2 {
            height: auto;
            padding: calc(20px + (60 - 20) * ((100vw - 320px) / (1920 - 320)));
        }
    }
     @media (max-width:991px) {
        .discount-image-details-2 .discount-images {
            margin-right: 0;
            position: relative;
        }
    }
     @media (max-width:1366px) {
        .discount-image-details-2 .discount-images .flower-images-1 {
            top: -2px;
            left: -150px;
            width: 49%;
        }
    }
     @media (max-width:1199px) {
        .discount-image-details-2 .discount-images .flower-images-1 {
            top: -2px;
            left: -150px;
            width: 49%;
        }
    }
     @media (max-width:991px) {
        .discount-image-details-2 .discount-images .flower-images-1 {
            display: none;
        }
    }
     @media (max-width:1366px) {
        .discount-image-details-2 .discount-images .flower-images-2 {
            top: -160px;
            right: -235px;
            width: 62%;
        }
    }
     @media (max-width:1199px) {
        .discount-image-details-2 .discount-images .flower-images-2 {
            top: -160px;
            right: -235px;
            width: 62%;
        }
    }
     @media (max-width:991px) {
        .discount-image-details-2 .discount-images .flower-images-2 {
            position: relative;
            transform: rotate(0);
            display: block;
            width: 100%;
            top: 0;
            left: 0;
            animation: run-shoes 15s infinite linear;
        }
    }
    @-webkit-keyframes run-shoes {
        0% {
            transform: rotate(0deg) translate(0, 0);
        }
        50% {
            transform: rotate(5deg);
            transform-origin: left;
        }
        75% {
            transform: rotate(-5deg);
            transform-origin: right;
        }
        100% {
            transform: rotate(0deg) translate(0, 0);
        }
    }
    @keyframes run-shoes {
        0% {
            transform: rotate(0deg) translate(0, 0);
        }
        50% {
            transform: rotate(5deg);
            transform-origin: left;
        }
        75% {
            transform: rotate(-5deg);
            transform-origin: right;
        }
        100% {
            transform: rotate(0deg) translate(0, 0);
        }
    }
}`
export default DealDay;
function CountdownTimer() {


    const [expiryTime, setExpiryTime] = useState(`${dealDay.time}`);
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownlMinutes: '',
            countdownSeconds: ''
        }
    );
    const countdownTimer = () => {
        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }
            setCountdownTime(runningCountdownTime);
            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }

        }, 1000);
    }

    useEffect(() => {
        countdownTimer();
    });

    return (
        <div className="countdown my-3">
            {expiryTime !== false ?
                <>
                    <ul>
                        <li>
                            <span className="countdown-section">
                                <span className="countdown-amount">{countdownTime.countdownDays}</span>
                                <span className="countdown-period">Days</span>
                            </span>
                        </li>
                        <li>
                            <span className="countdown-section">
                                <span className="countdown-amount">{countdownTime.countdownHours}</span>
                                <span className="countdown-period">Hours</span>
                            </span>
                        </li>
                        <li>
                            <span className="countdown-section">
                                <span className="countdown-amount">{countdownTime.countdownMinutes}</span>
                                <span className="countdown-period">Minutes</span>
                            </span>
                        </li>
                        <li>
                            <span className="countdown-section">
                                <span className="countdown-amount">{countdownTime.countdownSeconds}</span>
                                <span className="countdown-period">Seconds</span>
                            </span>
                        </li>
                    </ul>

                </>
                : <p>Deal has been Expired</p>}
        </div>
    )

}