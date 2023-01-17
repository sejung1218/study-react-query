"use client";
import styled from "styled-components";

export default function Home() {
  return (
    <FullDiv>
      <MainDiv>
        <SubOneDiv>
          <SubManyDiv01>First Page</SubManyDiv01>
        </SubOneDiv>
        <SubTwoDiv>
          <SubManyDiv02>1</SubManyDiv02>
          <SubManyDiv02>2</SubManyDiv02>
          <SubManyDiv02>3</SubManyDiv02>
          <SubManyDiv02>4</SubManyDiv02>
          <SubManyDiv02>5</SubManyDiv02>
          <SubManyDiv02>6</SubManyDiv02>
        </SubTwoDiv>
      </MainDiv>
    </FullDiv>
  );
}

const FullDiv = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
`;

const MainDiv = styled.div`
  border: 1px solid white;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SubOneDiv = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
`;

const SubTwoDiv = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  flex-direction: row;
  gap: 3.5rem;
`;

const SubManyDiv01 = styled.div`
  border: 1px solid white;
  width: 98%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubManyDiv02 = styled.div`
  border: 1px solid white;
  display: flex;
  width: 10%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;
