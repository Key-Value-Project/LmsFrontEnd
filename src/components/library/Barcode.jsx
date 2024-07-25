import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useZxing } from 'react-zxing';
import { addScannerIsbn } from '../../store/ScannerReducer';
import { useNavigate } from 'react-router';

export const BarcodeScanner = () => {
  const [result, setResult] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      dispatch(addScannerIsbn(result.getText()));
      console.log(result);
      navigate('/library');
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
