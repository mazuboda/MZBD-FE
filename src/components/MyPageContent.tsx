import BusinessCert from "@components/BusinessCert";
import OrderCard from "@components/OrderCard";
import ProfileView from "@components/ProfileView";
import Tables from "@components/Tables";
import UserInfo from "@components/UserInfo";
import React from "react";

interface MyPageContentProps {
  selectedMenu: string;
}

const MyPageContent: React.FC<MyPageContentProps> = ({
  selectedMenu
}) => {
  switch (selectedMenu) {
    case "문의내역 조회":
      return <Tables menu={selectedMenu} small />;
    case "포인트/쿠폰내역":
      return <Tables menu={selectedMenu} small />;
    case "주문내역 조회":
      return (
        <>
          <Tables menu={selectedMenu} small />
          <OrderCard />
        </>
      );
    case "회원정보":
      return <UserInfo />;
    case "프로필 조회":
      return <ProfileView />;
    case "의뢰요청 조회":
      return null;
    case "후기 조회":
      return null;
    case "사업자 인증":
      return <BusinessCert />;
  }

  return (
    <div>

    </div>
  );
};

export default MyPageContent;