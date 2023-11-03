import Tables from "@components/Tables";
import React from "react";
import UserInfo from "./UserInfo";

interface MyPageContentProps {
  selectedMenu: string | null;
}

const MyPageContent: React.FC<MyPageContentProps> = ({
  selectedMenu
}) => {
  switch (selectedMenu) {
    case "문의내역 조회":
      return <Tables search button />;
    case "포인트/쿠폰내역":
      return <Tables />;
    case "회원정보":
      return <UserInfo />;
  }

  return (
    <div>

    </div>
  );
};

export default MyPageContent;