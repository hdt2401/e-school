import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import {
//   searchTextFilter,
//   completedFilter,
//   priorityFilter,
// } from "../../redux/actions";
// import filterSlice from "./filterSlice";
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [completed, setCompleted] = useState("All");
  const [prioriry, setPrioriry] = useState();
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const handleCompleted = (e) => {
    setCompleted(e.target.value);
    dispatch(filterSlice.actions.completedFilter(e.target.value));
  };
  const handlePriority = (value) => {
    setPrioriry(value);
    dispatch(filterSlice.actions.priorityFilter(value));
  };
  const handleSearch = () => {
    dispatch(filterSlice.actions.searchTextFilter(searchText));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          onChange={handleSearchText}
          onSearch={handleSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Completed
        </Typography.Paragraph>
        <Radio.Group value={completed} onChange={handleCompleted}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={handlePriority}
          value={prioriry}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
