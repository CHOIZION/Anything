import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Test = () => {
  const containerRef = useRef(null);
  const orangeRef = useRef(null);
  const violetRef = useRef(null);
  const yoyoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(orangeRef.current.children[0], {
      scrollTrigger: {
        trigger: orangeRef.current,
        start: "top center",
        toggleActions: "restart pause reverse pause",
        scroller: containerRef.current,
      },
      duration: 2,
      repeat: -1,
      rotation: 360,
    });

    // 변경: ref 대상을 div로 하고, backgroundColor 애니메이션 적용
    gsap.to(violetRef.current, {
      scrollTrigger: {
        trigger: violetRef.current,
        start: "top center",
        toggleActions: "restart pause reverse pause",
        scroller: containerRef.current,
      },
      duration: 5,
      backgroundColor: "rgb(255, 165, 0)",
      ease: "none",
    });

    gsap.to(yoyoRef.current.children[0], {
      scrollTrigger: {
        trigger: yoyoRef.current,
        start: "top center",
        toggleActions: "restart pause reverse pause",
        scroller: containerRef.current,
      },
      scale: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Panel className="orange" ref={orangeRef}>
        <p>This element will spin.</p>
      </Panel>
      <Panel className="violet" ref={violetRef}>
        <p>This background color will change.</p>
      </Panel>
      <Panel className="blue yoyo" ref={yoyoRef}>
        <p>Yoyo Text!</p>
      </Panel>
    </Container>
  );
};

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Panel = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  text-align: center;
  &.orange {
    background-color: #ff983e;
  }
  &.violet {
    background-color: #7c68ee;
  }
  &.blue {
    background-color: #2773c9;
  }
  p {
    font-size: 32px;
    color: #fff;
  }
`;

export default Test;
