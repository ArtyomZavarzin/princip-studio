import { Box, styled } from '@mui/system';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer'; // Убедитесь, что вы установили этот пакет

const RoundContent = styled(Box)(({ theme, deg = 0 }) => ({
  height: '100%',
  width: '100%',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: `linear-gradient(${deg}deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100% 100%)`,
  },
}));

const Wrapper = styled(Box)(({ theme, deg = 0 }) => ({
  zIndex: '-10',
  overflow: 'hidden',
  width: '400px',
  height: '400px',

  [theme.breakpoints.up('sm')]: {
    width: '600px',
    height: '600px',
  },

  [theme.breakpoints.up('md')]: {
    width: '800px',
    height: '800px',
  },
}));

export const Round = ({
  className = '',
  deg = 0,
  threshold = '0.5',
  ...other
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: threshold, // Элемент считается видимым, когда 80% находится в окне просмотра
  });
  const animation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' }, // Начальные значения
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'scale(1)' : 'scale(0.5)',
    }, // Конечные значения в зависимости от видимости
    config: { mass: 1, tension: 200, friction: 40 }, // Настройки анимации
  });

  return (
    <Wrapper {...other}>
      <animated.div
        ref={ref}
        style={{
          ...animation,
          position: 'absolute', // Необходимо для корректной работы с  position: absolute;
          width: '100%',
          height: '100%',
          //...other, // Другие параметры
        }}
        className={`round ${inView ? 'active' : ''}`}
      >
        <RoundContent className={className} deg={deg}>
          <Box
            className='changeColorAnimRound'
            sx={{ width: '100%', height: '100%', borderRadius: '50%' }}
          ></Box>
        </RoundContent>
      </animated.div>
    </Wrapper>
  );
};
