import styled from "styled-components";
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string; // required
  borderColor?: string; // ? 붙이면: optional
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  // 만약 이 prop(optional)이 존재하지 않을 시 이 값(default text)을 넣어주세요
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;

/* interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({ name: "nico", age: 12 });
sayHello({ name: "hi", age: 12, hello: 1 });
 */
