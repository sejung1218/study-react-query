"use client";

import Link from "next/link";
import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();
  const onClickMoveFirstPage = async () => {
    router.push(`/test`);
  };

  return (
    <FullDiv>
      <MainDiv>
        <SubOneDiv>
          <SubManyDiv01 onClick={onClickMoveFirstPage}>First Page</SubManyDiv01>
          {/* 안되는 이유가 뭘까? */}
          {/* <SubManyDiv01 onClick={() => router.push(`/test`)}>
            Second Page
          </SubManyDiv01> */}

          <SubManyDiv01>
            <ClearLink href="/test">Third Page</ClearLink>
          </SubManyDiv01>
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
  margin: 0;
  padding: 0;
  border: 1px solid black;
  box-sizing: border-box;
  width: 100%;
  height: 98vh;
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
`;

const MainDiv = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SubOneDiv = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
`;

const SubTwoDiv = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  flex-direction: row;
  gap: 3.5rem;
`;

const SubManyDiv01 = styled.div`
  border: 1px solid black;
  width: 98%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  box-sizing: border-box;

  :first-of-type {
    border-right: 1px solid white;
  }

  :last-of-type {
    border-left: 1px solid white;
  }
`;

const SubManyDiv02 = styled.div`
  border: 1px solid black;
  display: flex;
  width: 10%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const ClearLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
