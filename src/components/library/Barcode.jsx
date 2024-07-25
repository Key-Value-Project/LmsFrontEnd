import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useZxing } from 'react-zxing';
import { addScannerIsbn } from '../../store/ScannerReducer';
import { useNavigate, useParams } from 'react-router';

export const BarcodeScanner = () => {
  const { type } = useParams();
  console.log(type);
  const [result, setResult] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      dispatch(addScannerIsbn(result.getText()));
      console.log(result);
      if (type === 'borrow') {
        navigate('/library/');
      } else {
        navigate('/library/borrow');
      }
    },
  });

  return (
    <>
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};
