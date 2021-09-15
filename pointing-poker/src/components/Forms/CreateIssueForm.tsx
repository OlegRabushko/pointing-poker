/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';

import {
  setIssueLink,
  setIssuePriority,
  setIssueTitle,
  showIssuesForm,
} from '../../redux/FormRedux/FormActions';
import Button from '../Button/Button';
import { ICreateIssueForm } from './FormTypes';
import { StyledInput } from './StyledInput';
import { StyledLabel } from './StyledLabel';
import { StyledConnectForm } from './StyledForm';
import { StyledPopupWrapper } from './StyledPopupWrapper';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { StyledSelect } from './StyledSelect';

const CreateIssueForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateIssueForm>({ mode: 'onChange' });

  // erferferfrf

  const dispatch = useDispatch();
  const { isIssuesForm } = useSelector((state: RootState) => state.showForms);

  const onSubmit: SubmitHandler<ICreateIssueForm> = (data) => {
    dispatch(showIssuesForm(!isIssuesForm));
    dispatch(setIssueTitle(data.title));
    dispatch(setIssueLink(data.link));
    dispatch(setIssuePriority(data.priority));
    reset();
  };

  const onShowConnectForm = () => {
    dispatch(showIssuesForm(!isIssuesForm));
  };

  return (
    <StyledPopupWrapper onMouseDown={onShowConnectForm}>
      <StyledConnectForm
        justifyContent="center"
        textAlign="center"
        padding="30px 0 50px"
        onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="legend-wrapper">
          <legend>Create Issue</legend>
        </div>
        <div className="create-issue-form-wrapper">
          <StyledLabel display="flex" maxWidth="570px" padding="0 0 40px 0">
            Title:
            <StyledInput
              maxWidth="420px"
              borderRadius="0px"
              margin="0 0 0 30px"
              {...register('title', { required: true, maxLength: 10 })}
            />
            {errors.title && <p className="error">Title is required</p>}
          </StyledLabel>

          <StyledLabel display="flex" maxWidth="570px" padding="0 0 40px 0">
            Link:
            <StyledInput
              maxWidth="420px"
              borderRadius="0px"
              margin="0 0 0 30px"
              {...register('link', { required: true, maxLength: 10 })}
            />
            {errors.link && <p className="error">Link is required</p>}
          </StyledLabel>

          <StyledLabel display="flex" maxWidth="415px">
            Priority:
            <StyledSelect {...register('priority')}>
              <option value="Low">Low</option>
              <option value="Middle">Middle</option>
              <option value="Hight">Hight</option>
            </StyledSelect>
          </StyledLabel>
        </div>
        <div className="connect-buttons-container">
          <Button text="Yes" color={whiteColor} colorBG={blueColor} onClick={() => onSubmit} />
          <Button colorBG={whiteColor} color={blueColor} text="No" onClick={onShowConnectForm} />
        </div>
      </StyledConnectForm>
    </StyledPopupWrapper>
  );
};

export default CreateIssueForm;
