import styled from 'styled-components';

interface IPropsAvatar {
  background?: string;
  width?: string;
  height?: string;
}

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((w) => w.slice(0, 1))
    .join('')
    .toUpperCase();
};

export const ImageContainer = styled.div<IPropsAvatar>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '55px'};
  height: ${({ height }) => height || '55px'};
  border-radius: 50%;
  background: #60dabf ${({ background }) => background || ''} center / cover no-repeat;

  .initials {
    font-weight: bold;
    font-size: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
