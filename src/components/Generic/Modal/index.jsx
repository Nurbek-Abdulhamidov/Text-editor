import React, { useState } from "react";
import { Modal } from "antd";
import axios from "axios";
import { Container, ModalWrap } from "./style";
import Input from "../Input";
import Button from "../Button";
import ChangePsw from "../ChangePassword";

export const LocalizedModal = ({ title, id, removeBtn, ok, getClick }) => {
  const [open, setOpen] = useState(false);
  const { REACT_APP_BASE_URL: url } = process.env;
  let token = localStorage.getItem("token");

  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const getById = async () => {
    let body = {
      manager_id: id,
    };

    try {
      // setLoading(true);
      await axios
        .post(`${url}/admin/terminate-manager`, body, {
          headers: {
            Authentication: token,
          },
        })
        .then((res) => alert(res.data.message));
    } catch (error) {
      alert(error?.data?.data?.message);
    }
  };

  const handleOk = () => {
    getClick && getClick();
    getById();
    setOpen(false);
  };
  return (
    <Container>
      <Button width={"100px"} type="outlined" onClick={showModal}>
        {title}
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={hideModal}
        okText={ok}
        cancelText="아니요"
        cancelButtonProps={
          removeBtn
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
          {title === "비밀번호 변경하기" ? (
            <div>
              <ChangePsw />
            </div>
          ) : title === "검색" ? (
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
