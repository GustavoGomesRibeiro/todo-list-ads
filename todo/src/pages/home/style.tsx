import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 0px;

    @media (max-width: 425px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 50px 0px
    }
`;

export const MainContent = styled.div`
    padding: 30px;
    background: #131111;
    height: auto;
    width: auto;
    border-radius: 10px;

    @media (max-width: 425px) {
        width: 330px;
        height: auto;
    }
`;

export const ContentTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;
`;

export const ContentInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ContentLabel = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding: 20px;
`;

export const Label = styled.label`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const LabelTask = styled.label`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
`;

export const ContentTodos = styled.div``;

export const TodoList = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: auto;
    height: auto;
    background: #242323;
    margin: 10px;
    border: 1px solid #fff;

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
    }
`;

export const TaskDescription = styled.div``;

export const Icon = styled.div`

@media (max-width: 425px) {
    display: flex;
    justify-content: center;
}
`;

export const Text = styled.p`
    word-break: break-all;
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    margin-left: 10px;

    &:hover {
        border-color: #646cff;
    }
    &:focus,
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    & {
      background-color: #f9f9f9;
    }
  }
`;

export const BuyMeACoffe = styled.div`
  padding: 20px;
`;