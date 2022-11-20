import React from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import secondData from "../../mock/secondData";
import {
  Wrapper,
  Container,
  UserData,
  UserContent,
  Left,
  Right,
  Wrap,
} from "./style";
import Input from "../../components/Generic/Input";
import GenericTextArea from "../../components/Generic/Textarea";
import UploadImg from "../../components/Generic/Upload";

const SecondPage = () => {
  let { id } = useParams();
  return (
    <div>
      {secondData
        .filter((e) => e.id == +id.replace(":", ""))
        .map((value, index) => {
          return (
            <Wrapper key={index}>
              <Container>
                <div>
                  <Navbar send />
                </div>
                <UserData>
                  <div>
                    <label>작성자 ID</label>
                    <Input defaultValue={value.name} />
                  </div>
                  <div>
                    <label>작성자 이름</label>
                    <Input defaultValue={value.name} />
                  </div>
                  <div>
                    <label>회원 등급</label>
                    <Input width="40px" defaultValue={value.number} />
                  </div>
                  <div>
                    <label>등록일</label>
                    <Input defaultValue={value.date} />
                  </div>
                  <div>
                    <label>남은 일수</label>
                    <Input width="80px" defaultValue={value.leftDayNumber} />
                  </div>
                </UserData>
                <UserContent>
                  <Left>
                    <UploadImg />
                  </Left>
                  <Right>
                    <Wrap flex>
                      <span>검사 결과</span>
                      <GenericTextArea margin row="5" />
                    </Wrap>
                  </Right>
                </UserContent>
                <Wrap>
                  <span>질문 내용</span>
                  <GenericTextArea row="3" />
                </Wrap>
                <Wrap>
                  <span>답변</span>
                  <GenericTextArea row="4" />
                </Wrap>
              </Container>
            </Wrapper>
          );
        })}
    </div>
  );
};

export default SecondPage;
