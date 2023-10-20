import React, { useState } from "react";
import { Form, Input, Button, Space } from "antd";

const ContentUpdateEditor = (props) => {
  const [content, setContent] = useState(props.originalContent);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (values) => {
    const content = values.content;
    let error = null;

    if (props.validate) {
      error = props.validate(content);
    }

    if (error && error.length !== 0) {
      setError(error);
    } else {
      props.handleSubmit(values);
    }
  };

  return (
    <Form onFinish={handleSubmit} initialValues={{ content }}>
      <Form.Item
        name="content"
        validateStatus={error ? "error" : ""}
        help={error}
      >
        <Input.TextArea
          value={content}
          autoSize={{ minRows: 3, maxRows: 6 }}
          placeholder="Content"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ContentUpdateEditor;
