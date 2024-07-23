import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import getRole from '../../utils/TokenDecode';

const ListCardHead = () => {
  const [roleState] = useState(getRole());
  return (
    <div className="employee-list-head">
      <div className="item">Employee Name</div>
      <div className="item">Employee ID</div>
      <div className="item">Joining Date</div>
      <div className="item">Role</div>
      <div className="item">Status</div>
      <div className="item">Experience</div>
      {roleState === 'ADMIN' ? <div className="item Action">Action</div> : <></>}
    </div>
  );
};

export default ListCardHead;
