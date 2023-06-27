import './dashboard.css';
import { Col, Row } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const UserDashBoard = (prop) => {
  let user = prop.userDetails;
  return (

    <div>
      <div>
        <Row>
          <Col
            span={6}
            xs={{
              order: 1,
            }}
            sm={{
              order: 2,
            }}
            md={{
              order: 3,
            }}
            lg={{
              order: 4,
            }}
          >
            <Card
              hoverable
              style={{
                width: 240,
                margin: "1rem",
              }}
              cover={<img alt="example" src={user.avatar} />}
            >
              <Meta title={`${user.first_name} ${user.last_name}`} description={user.email} />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default UserDashBoard;
