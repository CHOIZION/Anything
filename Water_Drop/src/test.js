import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  to {
    transform: rotate(360deg) translate3d(0, 0, 0);
  }
`;

const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  background: #fff;
  filter: contrast(25);
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Ball = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  background: #000;
  border-radius: 50%;
  filter: blur(15px);
`;

const Blubb = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 50px;
    height: 50px;
    background: #000;
    border-radius: 50%;
    filter: blur(5px);
  }
`;

const Blubb2 = styled(Blubb)`
  transform: rotate(181deg);
  &::after {
    transform-origin: 34px 34px;
    animation: ${rotateAnimation} 2.9s ease-in-out 0.4s infinite;
  }
`;

const Blubb3 = styled(Blubb)`
  transform: rotate(266deg);
  &::after {
    transform-origin: 31px 31px;
    animation: ${rotateAnimation} 3.1s ease-in-out 0.6s infinite;
  }
`;

const Blubb4 = styled(Blubb)`
  transform: rotate(21deg);
  &::after {
    animation: ${rotateAnimation} 3.3s ease-in-out 0.8s infinite;
  }
`;

// Blubb5 컴포넌트
const Blubb5 = styled(Blubb)`
  transform: rotate(57deg);
  &::after {
    transform-origin: 25px 25px;
    animation: ${rotateAnimation} 3.5s ease-in-out 1s infinite;
  }
`;

// Blubb6 컴포넌트
const Blubb6 = styled(Blubb)`
  transform: rotate(58deg);
  &::after {
    transform-origin: 22px 22px;
    animation: ${rotateAnimation} 3.7s ease-in-out 1.2s infinite;
  }
`;

// Blubb7 컴포넌트
const Blubb7 = styled(Blubb)`
  transform: rotate(192deg);
  &::after {
    transform-origin: 19px 19px;
    animation: ${rotateAnimation} 3.9s ease-in-out 1.4s infinite;
  }
`;

// Blubb8 컴포넌트
const Blubb8 = styled(Blubb)`
  transform: rotate(75deg);
  &::after {
    transform-origin: 16px 16px;
    animation: ${rotateAnimation} 4.1s ease-in-out 1.6s infinite;
  }
`;

const SparkleBase = styled.div`
  position: absolute;
  top: 38px;
  left: 38px;
  &::after {
    position: absolute;
    display: block;
    content: "";
    background: #000;
    border-radius: 50%;
    filter: blur(3px);
  }
`;

// Sparkle 컴포넌트 생성
const makeSparkle = (size, rotation, originX, originY, duration, delay) => styled(SparkleBase)`
  width: ${size}px;
  height: ${size}px;
  transform: rotate(${rotation}deg);
  &::after {
    width: ${size}px;
    height: ${size}px;
    transform-origin: ${originX}px ${originY}px;
    animation: ${rotateAnimation} ${duration}s ease-in-out ${delay}s infinite;
  }
`;

// 캬 개깔끔하네
const Sparkle1 = makeSparkle(8, 255, 58, 58, 3.7, 0.2);
const Sparkle2 = makeSparkle(9, 286, 56, 56, 3.9, 0.4);
const Sparkle3 = makeSparkle(10, 277, 54, 54, 4.1, 0.6);
const Sparkle4 = makeSparkle(11, 248, 52, 52, 4.3, 0.8);
const Sparkle5 = makeSparkle(12, 14, 50, 50, 4.5, 1.0);
const Sparkle6 = makeSparkle(13, 143, 48, 48, 4.7, 1.2);
const Sparkle7 = makeSparkle(14, 29, 46, 46, 4.9, 1.4);
const Sparkle8 = makeSparkle(15, 279, 44, 44, 5.1, 1.6);
const Sparkle9 = makeSparkle(16, 122, 42, 42, 5.3, 1.8);
const Sparkle10 = makeSparkle(17, 122, 40, 40, 5.5, 2.0);


const MainLayout = () => {
    return (
      <Frame>
        <Center>
          <Ball />
          <Blubb />
          <Blubb2 />
          <Blubb3 />
          <Blubb4 />
          <Blubb5 />
          <Blubb6 />
          <Blubb7 />
          <Blubb8 />
          <Sparkle1 />
          <Sparkle2 />
          <Sparkle3 />
          <Sparkle4 />
          <Sparkle5 />
          <Sparkle6 />
          <Sparkle7 />
          <Sparkle8 />
          <Sparkle9 />
          <Sparkle10 />
        </Center>
      </Frame>
    );
  };
  
  export default MainLayout;