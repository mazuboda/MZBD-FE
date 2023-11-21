import StoreInfo from "@components/StoreInfo";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const MapComponents = () => {
  const [selectedMarker, setSelectedMarker] = useState<boolean>(false);
  const [selecedOverlay, setSelectedOverlay] = useState<boolean>(false);

  return (
    <MapContainer>
      <Map
        center={{ lat: 36.76998, lng: 126.93150 }}
        style={{ width: '100%', height: '794px' }}
        level={3}
      >
        <MapMarker
          position={{ lat: 36.76998, lng: 126.93150 }}
          onClick={() => setSelectedMarker(true)}
        />
        {
          selectedMarker && (
            <CustomOverlayMap position={{ lat: 36.76998, lng: 126.93150 }} yAnchor={1.2}>
              <StyledOverlay>
                <CloseOutlinedIcon
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "14px",
                    cursor: "pointer",
                    width: "20",
                    height: "19",
                    color: "#FFFFFF",
                  }}
                  onClick={() => {
                    setSelectedMarker(false);
                    setSelectedOverlay(false);
                  }}
                />
                <OverlayTitle onClick={() => setSelectedOverlay(true)}>월정리 해수욕장</OverlayTitle>
                <OverlayDesc>
                  <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png" alt="" />
                  <OverlayDescAddress>제주특별자치도 제주시 구좌읍 월정리 33-3</OverlayDescAddress>
                </OverlayDesc>
              </StyledOverlay>
            </CustomOverlayMap>
          )
        }
      </Map >
      {selecedOverlay && (
        <div style={{
          position: "fixed",
          right: "128px",
          zIndex: "1"
        }}>
          <StoreInfo />
        </div>
      )}
    </MapContainer>
  );
};

const MapContainer = styled.div`
  position: relative;
  display: flex;
`;

const StyledOverlay = styled.div`
  border-radius: 6px;
  margin-bottom: 12px;
  position: relative;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  background-color: #FFFFFF;
`;

const OverlayTitle = styled.div`
  background-color: #FF679D;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: #FFFFFF;
  padding: 12px 36px 12px 14px;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
`;

const OverlayDesc = styled.div`
  padding:14px;
  position: relative;
  min-width: 190px;
  height: 56px;
`;

const OverlayDescAddress = styled.span`
font-family: Noto Sans KR;
font-size: 12px;
font-weight: 400;
color: #333;
position: absolute;
left: 80px;
right: 14px;
top: 24px;
white-space: normal;
`;

export default MapComponents;