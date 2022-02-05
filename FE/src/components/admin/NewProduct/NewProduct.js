import React, {useEffect, useState} from 'react';
import { Input, Button, Upload, Form, Select, Spin } from 'antd';

import './NewProduct.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {createProductRequest } from '../redux/action';

export default function NewProduct() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    values.categoryId = 3;
    const formData = new FormData();
    for (const name in values) {
      if (name !== 'productsImg') {
        formData.append(name, values[name] || "");
      }
    }
    for (let i = 0; i < values.productsImg.length; i++) {
      formData.append(`productsImg`, values.productsImg[i].originFileObj);
    };
    dispatch(createProductRequest(formData));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  return (
    <>
      <Row>
        <Col span={24}>
          <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="horizontal"
          colon={false}
          >
             <Form.Item
              label="Tên sản phẩm"
              name="name"
              rules={[{ required: true, message: 'Tên sản phẩm không được để trống' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mã sản phẩm"
                name="code"
                rules={[{ required: true, message: 'Mã sản phẩm không được để trống' }]}
                >
                  <Input />
              </Form.Item>
              <Form.Item name="categoryId" label="Danh mục">
                <Select
                  placeholder="Lựa chọn danh mục"
                  // onChange={onGenderChange}
                  options={[]}
                >
                </Select>
              </Form.Item>
              <Form.Item
                label="Số lượng"
                name="amount"
                rules={[{ required: true, message: 'Số lượng không được để trống' }]}
                >
                  <Input />
              </Form.Item>
              <Form.Item
                label="Mô tả"
                name="description"
                >
                  <Input />
              </Form.Item>
              <Form.Item
                label="Giá"
                name="price"
                rules={[{ required: true, message: 'Giá không được để trống' }]}
                >
                  <Input />
              </Form.Item>
              <Form.Item
                label="Sale Off"
                name="saleOffPrice"
                >
                  <Input />
              </Form.Item>
              <Form.Item name="producerId" label="NSX" >
                <Select
                  placeholder="Lựa chọn NSX"
                  // onChange={onGenderChange}
                  options={[]}
                >
                </Select>
              </Form.Item>
              <Form.Item
                label="Ghi chú"
                name="note"
                >
                  <Input />
              </Form.Item>
              <Form.Item
                label="Ảnh sản phẩm"
                name="productsImg"
                valuePropName="fileList"
                rules={[{ required: true, message: 'Ảnh sản phẩm không được để trống' }]}
                getValueFromEvent={normFile}
                >
                 <Upload
                  listType="picture"
                  maxCount={5}
                  beforeUpload={() => false}
                  multiple
                >
                  <Button icon={<UploadOutlined />}>Upload (Max: 5)</Button>
                </Upload>
              </Form.Item>
              <Form.Item wrapperCol={{  offset: 8, span: 6  }} style={{textAlign: "center"}}>
                <Button type="primary" htmlType="submit">
                  Thêm mới
                </Button>
              </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}
