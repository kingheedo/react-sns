/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useCallback, useEffect } from 'react';
import { FormControl, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { ADD_REPORT_REQUEST } from '../reducers/post';

const Report = ({ post, show, handleModalForm }) => {
    const { addReportLoading } = useSelector((state) => state.post);
    const [report, onChangeReport] = useInput(''); 
    const dispatch = useDispatch();
    useEffect(() => {
      if (addReportLoading) {
          alert('신고 접수되었습니다.');
      }
    }, []);
    
    const onReport = useCallback(
      (e) => {
          e.preventDefault();
          handleModalForm();
        dispatch({
            type: ADD_REPORT_REQUEST,
            data: { postId: post.id, content: report },
        });
      },
      [post.id, report],
    );
    
    return (
        <>
             <Modal
               show={show}
               onHide={handleModalForm}
               aria-labelledby="Edit Content"
             >
              <Modal.Header closeButton>
                <Modal.Title id="eEdit Content">
                  Report
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <FormControl as="textarea" rows={3} value={report} onChange={onChangeReport} />
                    <Button onClick={onReport} style={{ float: 'right' }} variant="primary" >수정</Button>
              </Modal.Body>
             </Modal>
        </>
    );
};
Report.propTypes = {
  post: propTypes.object.isRequired,
  show: propTypes.bool.isRequired,
  handleModalForm: propTypes.func.isRequired,
};
export default Report;
