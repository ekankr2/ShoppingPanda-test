import React, {FC} from 'react';
import Badge from "../../../UI/badge/Badge";
import {Divider} from "@mui/material";
import Button from "../../../UI/Button";

const BuyerInfoPage: FC = () => {
    return (
        <>
            <div className="container">
                <div className="custom-card">
                    <div className="card__header mb-3">
                        <h3 className="mb-4">김진동님 안녕하세요!</h3>
                    </div>
                    <Divider/>
                    <div className="card__body">
                        <div className="mb-4">
                            <h4 className="mb-3"><i className='bx bx-user mr-2'></i>회원 분류</h4>
                            <span className="mr-2 ml-2">
                            <Badge type={"info"} content={"일반"}/>
                            </span>
                            <span className="mr-2">
                            <Badge type={"danger"} content={"판다"}/>
                            </span>
                            <span className="mr-2">
                            <Badge type={"primary"} content={"판매자"}/>
                        </span>
                        </div>
                        <Divider/>
                        <div className="mb-4 mt-4">
                            <h4 className="mb-3"><i className='bx bxl-gmail mr-2'></i>이메일</h4>
                            <div className="mr-2 ml-3">
                                <Badge type={"info"} content={"Jimong@gmail.com"}/>
                            </div>
                        </div>
                        <Divider/>
                        <div className="mb-4 mt-4">
                            <h4 className="mb-3"><i className='bx bx-leaf mr-2'></i>닉네임</h4>
                            <div className="mr-2 ml-3">
                                <Badge type="primary" content="페이커"/>
                                <span className="float-end">
                                    <Button text="수정하기" className="is-info is-small is-outlined"/>
                                </span>
                            </div>
                        </div>
                        <Divider/>
                        <div className="mb-4 mt-4">
                            <h4 className="mb-3"><i className='bx bx-calendar mr-2'></i>가입일</h4>
                            <div className="mr-2 ml-2">
                                <Badge type="warning" content="2020년 12월 11일"/>
                            </div>
                        </div>
                        <Divider/>
                        <div className="card__footer mt-4">
                            <Button text={"홈으로"} className="is-primary is-large is-rounded is-outlined mr-5"/>
                            <Button text={"로그아웃"} className="is-danger is-large is-rounded"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyerInfoPage;
