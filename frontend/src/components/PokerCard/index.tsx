import React, { useEffect, useState } from 'react';
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
  const [isTurned, setIsTurned] = useState(turned);

  useEffect(() => {
    setIsTurned(turned);
  }, [turned]);

  const handleClick = () => {
    if (!disabled && !pending) {
      setIsTurned((prev) => !prev);
    }
    if (onClick) onClick();
  };

  return (
    <Container disabled={disabled} onClick={handleClick}>
      {pending ? (
        <Pending />
      ) : (
        <>
          {disabled && <Overlay />}
          <Card turned={isTurned}>
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
