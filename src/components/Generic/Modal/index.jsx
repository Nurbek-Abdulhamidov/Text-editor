import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Container, ModalWrap } from "./style";
import Input from "../Input";

export const LocalizedModal = ({ title }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Button type="primary" onClick={showModal}>
        {title}
      </Button>
      <Modal
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="예"
        cancelText="아니요"
        cancelButtonProps={
          title == "검색"
            ? {
                style: {
                  display: "none",
                },
              }
            : {
                style: {
                  width: "100%",
                },
              }
        }
        okButtonProps={{
          style: {
            width: "100%",
            margin: "auto",
          },
        }}
      >
        <ModalWrap>
          {title == "검색" ? (
            <form action="">
              <label>ID</label>
              <Input placeholder="id" />
              <label>전화번호</label>
              <Input placeholder="전화번호" />
            </form>
          ) : (
            <p className="text">상담 내용을 업로드하시겠습니까?</p>
          )}
        </ModalWrap>
      </Modal>
    </Container>
  );
};

export default LocalizedModal;
