import styled from "@emotion/styled";
import {Container} from "./Container";

const Wrapper = styled.div`
  height: 60px;
  background: #C8C8C8;
`
const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 36px;
  color: #272323;
`

export const Header = () => {
  return (
    <Wrapper>
      <StyledContainer>
        e-stroi.kz
      </StyledContainer>
    </Wrapper>
  )
}
