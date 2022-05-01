import styled from 'styled-components';

export const Panel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    gap: 1rem;
    border: 1px solid #000000;
    border-radius: 10px;
`;

export const Form = styled.div`
    width: 50%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`;

export const WrapperInputText = styled.div`
    display: flex;
`;  

export const WrapperInputCheckbox = styled.div`
    display: flex;
`;