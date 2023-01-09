import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

function Thankyou(props) {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Thank You!</p>
          <p className="thanks-subtext">
            You should receive an email with the details of your reservation.
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default Thankyou;
