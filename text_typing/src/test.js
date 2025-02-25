import React from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0188c7; /* 여기에 파란색 배경 추가 */
`;

const TextEditor = styled.div`
    background: #000;
    width: 60%;
    padding: 15px 15px 100px;
    border-radius: 8px;
    border-top: 20px solid #e8e8e8;
`;

const TextBody = styled.div`
    font-size: 24px;
    color: #fff;
`;

const Test = () => {
    React.useEffect(() => {
        const options = {
            strings: ['안녕하세요!', '잘 지내셨나요?'],
            typeSpeed: 35,
            startDelay: 500,
            backDelay: 1000,
            backSpeed: 35,
            loop: true,
            loopCount: 2,
        };

        new Typed('#typed', options);
    }, []);

    return (
        <Container>
            <TextEditor>
                <TextBody>$&nbsp;<span id="typed"></span></TextBody>
            </TextEditor>
        </Container>
    );
};

export default Test;
