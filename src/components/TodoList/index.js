import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { todoListByFilter } from '../../redux/selectors';
import todoSlice from './todoSlice';

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListByFilter);
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('Medium');
  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }
  const handlePrioritySelect = (value) => {
    setPriority(value);
  }
  const handleAddTodoClick = () => {
    dispatch(todoSlice.actions.addTodo({
      id: uuidv4(),
      name: todo,
      priority: priority,
      completed: false,
    }))
    setTodo('');
    setPriority('Medium');
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todo} onChange={handleTodoChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handlePrioritySelect}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodoClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
