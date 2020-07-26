import React from "react";
import { Table, Row, Col } from "antd";

const List = props => {
  const { columns, data, onSelected} = props;
  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1500, y: 600 }}
            onRow={(record) => ({
              onClick: () => onSelected(record)
            })}
          />
        </Col>
      </Row>
    </div>
  );
};

export default List;