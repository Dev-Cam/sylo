import { styled } from "styled-components";
import Nav from "./Nav";

const HeaderStyles = styled.div`
background-color: #feeaa5;

`
export default function Header() {
  return <HeaderStyles>
    <Nav />
  </HeaderStyles>
}