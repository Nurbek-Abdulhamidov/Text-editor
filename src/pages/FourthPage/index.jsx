import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/Generic/Input";
import Selection from "../../components/Generic/Select";
import GenericTextArea from "../../components/Generic/Textarea";
import Navbar from "../../components/Navbar";
import secondData from "../../mock/secondData";
import { UserData, Wrap } from "../SecondPage/style";
import { Box, Container, Left, Right, Wrapper } from "./style";

const FourthPage = () => {
  let { id } = useParams();
  return (
    <Wrapper>
      <div>
        <Navbar send />
      </div>
      {secondData
        .filter((e) => e.id === +id.replace(":", ""))
        .map((item, index) => {
          return (
            <Container key={index}>
              <Left>
                <UserData>
                  <div>
                    <label>작성자 이름</label>
                    <Input width="120px" defaultValue={item.name} />
                  </div>
                  <div>
                    <label>회원 등급</label>
                    <Input width="120px" defaultValue={item.number} />
                  </div>
                  <div>
                    <label>등록일</label>
                    <Input width="120px" defaultValue={item.date} />
                  </div>
                  <div>
                    <label>남은 일수</label>
                    <Input width="120px" defaultValue={item.leftDayNumber} />
                  </div>
                </UserData>
                <Wrap>
                  <span>최근 증상</span>
                  <GenericTextArea row="4" />
                </Wrap>
                <Wrap>
                  <span>검사 및 게시글 제안</span>
                  <Selection />
                </Wrap>
                <Wrap>
                  <span>답변</span>
                  <GenericTextArea row="7" />
                </Wrap>
              </Left>
              <Right>
                <p className="text">상담 내용</p>
                <div>
                  {item.advices?.map((val, index) => {
                    return <Box key={index}>{val.advice}</Box>;
                  })}
                </div>
              </Right>
            </Container>
          );
        })}
    </Wrapper>
  );
};

export default FourthPage;
