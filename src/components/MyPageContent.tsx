import OrderCard from "@components/OrderCard";
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
  }

  return (
    <div>

    </div>
  );
};

export default MyPageContent;