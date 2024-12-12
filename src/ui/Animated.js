import { Box, styled } from '@mui/system';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer'; // Убедитесь, что вы установили этот пакет

const Wrapper = styled(Box)(({ theme }) => ({}));

export const Animated = ({
  threshold = '0.2',
  from = 'left',
  children,
  ...other
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: threshold, // Элемент считается видимым, когда 80% находится в окне просмотра
  });
  const animation = useSpring({
    from: {
      opacity: 0,
      transform: `scale(1) translateX(${from === 'left' ? '-' : ''}70px)`,
    }, // Начальные значения
    to: {
      opacity: inView ? 1 : 0,
      transform: inView
        ? 'scale(1)  translateX(0)'
        : `scale(1) translateX(${from === 'left' ? '-' : ''}70px)`,
    }, // Конечные значения в зависимости от видимости
    config: { mass: 1, tension: 200, friction: 40 }, // Настройки анимации
    delay: 500,
  });

  return (
    <Wrapper {...other}>
      <animated.div
        ref={ref}
        style={{
          ...animation,
        }}
        className={`${inView ? 'active' : ''}`}
      >
        {children}
      </animated.div>
    </Wrapper>
  );
};
