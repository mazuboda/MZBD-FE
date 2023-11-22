import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface SubMenuProps {
  onSelectedMenu: (menu: string) => void;
}

const SubMenu: React.FC<SubMenuProps> = ({
  onSelectedMenu
}) => {
  const navigate = useNavigate();

  const handleMenuClick = (menu: string) => {
    onSelectedMenu(menu);
  };

  return (
    <MenuContainer>
      <MenuGroupContainer>
        <MenuGroup>
          <MenuTitle>고객님</MenuTitle>
          <MenuList>
            <MenuItem onClick={() => handleMenuClick("회원정보")}>회원정보</MenuItem>
            <MenuItem onClick={() => handleMenuClick("주문내역 조회")}>주문내역 조회</MenuItem>
            <MenuItem onClick={() => handleMenuClick("문의내역 조회")}>문의내역 조회</MenuItem>
            <MenuItem onClick={() => handleMenuClick("포인트/쿠폰내역")}>포인트/쿠폰내역</MenuItem>
          </MenuList>
        </MenuGroup>
        <MenuGroup>
          <MenuTitle>사장님</MenuTitle>
          <MenuList>
            <MenuItem onClick={() => handleMenuClick("프로필 조회")}>프로필 조회</MenuItem>
            <MenuItem onClick={() => handleMenuClick("의뢰요청 조회")}>의뢰요청 조회</MenuItem>
            <MenuItem onClick={() => handleMenuClick("후기 조회")}>후기 조회</MenuItem>
            <MenuItem onClick={() => handleMenuClick("사업자 인증")}>사업자 인증</MenuItem>
          </MenuList>
        </MenuGroup>
      </MenuGroupContainer>
      <LeaveButton onClick={() => navigate("/resign")}>
        탈퇴하기
      </LeaveButton>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 160px;
  border: 1px #FF679D solid;
`;

const MenuGroupContainer = styled.div`
  margin-top: 31px;
  margin-left: 14px;
  padding-bottom: 20px;
`;

const MenuGroup = styled.div`
  margin-bottom: 42px;
`;

const MenuTitle = styled.h3`
  margin-bottom: 19px;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.2em;
  text-align: left;
  color: #4A4A4A;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 13px;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -0.2em;
  text-align: left;
  color: #4A4A4A;
  cursor: pointer;
`;

const LeaveButton = styled.div`
  transition: 0.3s;
  font-family: Noto Sans KR;
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #4A4A4A;
  cursor: pointer;
  margin-bottom: 5px;
`;

export default SubMenu;