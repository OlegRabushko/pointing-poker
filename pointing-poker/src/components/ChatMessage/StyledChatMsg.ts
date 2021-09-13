import styled, { css } from 'styled-components';
import { vME } from '../../types/globalVirables';

export const StyledMsg = styled.div`
  display: flex;
  ${({ viewType }: { viewType: string }) =>
    viewType === vME
      ? css`
          flex-direction: row-reverse;
          align-items: flex-end;
        `
      : css`
          flex-direction: row;
          align-items: flex-start;
        `};
  margin: 0.5rem 0;

  .text-bubble {
    ${({ viewType }: { viewType: string }) =>
      viewType === vME
        ? css`
            justify-content: flex-end;
            margin: 0 7px 0 15px;
          `
        : css`
            justify-content: flex-start;
            margin: 0 15px 0 7px;
          `};
  }

  .chat-username {
    color: ${({ viewType }: { viewType: string }) => (viewType === vME ? 'yellowgreen' : 'orange')};
  }

  .msg-txt {
    background-color: ${({ viewType }: { viewType: string }) =>
      viewType === vME ? '#248bf5' : '#248bf5'};
    color: #fff;
  }

  .msg-txt::before {
    border-right: ${({ viewType }: { viewType: string }) =>
      viewType === vME ? '1rem solid #248bf5; ' : '1rem solid #e5e5ea;'};
    border-bottom-left-radius: 0.8rem 0.7rem;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  .msg-txt::after {
    ${({ viewType }: { viewType: string }) =>
      viewType === vME
        ? css`
            right: -40px;
          `
        : css`
            left: 20px;
          `};
    background-color: #fff;
    border-bottom-left-radius: 0.5rem;

    transform: translate(-30px, -2px);
    width: 10px;
  }
`;
