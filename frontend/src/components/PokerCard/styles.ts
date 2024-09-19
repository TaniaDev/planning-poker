import styled from '@emotion/styled';

export const Container = styled.button<{ disabled: boolean }>`
  all: unset;
  position: relative;
  perspective: 1000px;
  font-family: Arial;
  font-size: 32px;
  width: 80px;
  height: 120px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    font-size: 24px;    
    width: 72px;
    height: 72px;
  }
`;

export const Card = styled.div<{ turned: boolean }>`
  color: #4546D9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  ${props => (props.turned && 'transform: rotateY(-180deg)')};
  };
`;

export const Content = styled.div<{ turned: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: -1px 1px 3px 1px rgba(0,0,0,0.40);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.turned ? '#FFF' : '#4546D9')};
  backface-visibility: hidden;
  
  ${props => (!props.turned && 'background: linear-gradient(24deg, rgba(37,37,115,1) 0%, rgba(69,70,217,1) 100%)')};
  ${props => (props.turned && 'transform: rotateY(-180deg)')};
`;

export const InnerRectangle = styled.div`
  z-index: 1;
  position: absolute;
  width: 68px;
  height: 108px;
  border-radius: 4px;
  border: 2px solid #4546D9;

  @media (max-width: 600px) {
    width: 62px;
    height: 62px;
  }
`;

export const Overlay = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: rgba(200, 200, 200, 0.85);
  pointer-events: none;
`;

export const Pending = styled.button`
  all: unset;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 2px dashed #4546D9;
  background-color: transparent;
  pointer-events: none;
`;
