import React, { useState } from 'react';
import { Heart } from 'react-feather';

import {
  Card,
  Container,
  Content,
  InnerRectangle,
  Overlay,
  Pending,
} from './styles';

interface PokerCardProps {
  content: string | number;
  turned: boolean;
  disabled: boolean;
  pending: boolean;
  onClick: () => void;
}

const PokerCard: React.FC<PokerCardProps> = ({
  content,
  turned,
  disabled = false,
  pending = false,
  onClick,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();
    setIsClicked((prev) => !prev);
  };

  return (
    <Container clicked={isClicked} disabled={disabled} onClick={handleClick}>
      {pending ? (
        <Pending />
      ) : (
        <>
          {disabled && <Overlay />}
          <Card turned={turned}>
            <Content turned>
              <InnerRectangle />
              {content}
            </Content>
            <Content turned={false}>
              {<Heart fill="white" color="transparent" />}
            </Content>
          </Card>
        </>
      )}
    </Container>
  );
};

export default PokerCard;
