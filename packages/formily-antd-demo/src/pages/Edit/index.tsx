import { createForm, onFieldReact } from '@formily/core';
import { createSchemaField, FormConsumer, Schema } from '@formily/react';
import { Label, Table, Link, SpaceDivider } from 'formily-antd';
import { Form, FormItem, Input, Select, Space } from '@formily/antd';
import ProCard from '@ant-design/pro-card';
import { useMemo } from 'react';
import { observable } from '@formily/reactive';

const SchemaField = createSchemaField({
    components: {
        FormItem,
        Input,
        Select,
        Table,
        Label,
        Link,
        SpaceDivider,
    },
});

let lastState = observable({
    data: [
        {
            name: 'fish',
            age: 123,
        },
        {
            name: 'edit_false',
            age: 456,
        },
        {
            name: 'dog',
            age: 789,
        },
    ],
});

export default () => {
    const form = useMemo(() => {
        return createForm({
            values: lastState,
            effects: () => {},
        });
    }, []);
    return (
        <Space
            style={{
                background: 'rgb(240, 242, 245)',
                padding: '20px',
                display: 'flex',
            }}
            direction="vertical"
            size={10}
        >
            <ProCard title="基础">
                <Form form={form} feedbackLayout="terse">
                    <SchemaField>
                        <SchemaField.Array name="data" x-component="Table">
                            <SchemaField.Void>
                                <SchemaField.Void
                                    title="序号"
                                    x-component="Table.Column"
                                    x-component-props={{}}
                                >
                                    <SchemaField.Void x-component="Table.Index" />
                                </SchemaField.Void>
                                <SchemaField.Void
                                    title="名字"
                                    x-component="Table.Column"
                                    x-component-props={{}}
                                >
                                    <SchemaField.String
                                        name="name"
                                        required={true}
                                        x-component={'Input'}
                                        x-decorator="FormItem"
                                    />
                                </SchemaField.Void>

                                <SchemaField.Void
                                    title="年龄"
                                    x-component="Table.Column"
                                    x-component-props={{}}
                                >
                                    <SchemaField.String
                                        name="age"
                                        required={true}
                                        format={'number'}
                                        x-component={'Input'}
                                        x-decorator="FormItem"
                                    />
                                </SchemaField.Void>
                                <SchemaField.Void
                                    title="操作"
                                    x-component="Table.Column"
                                    x-component-props={{}}
                                >
                                    <SchemaField.Void
                                        name="operation"
                                        x-component={'SpaceDivider'}
                                    >
                                        <SchemaField.Void
                                            x-component={'Table.MoveUp'}
                                        />
                                        <SchemaField.Void
                                            x-component={'Table.MoveDown'}
                                        />
                                        <SchemaField.Void
                                            x-component={'Table.Remove'}
                                        />
                                    </SchemaField.Void>
                                </SchemaField.Void>
                            </SchemaField.Void>
                            <SchemaField.Void
                                x-component={'Table.Addition'}
                            ></SchemaField.Void>
                        </SchemaField.Array>
                    </SchemaField>
                </Form>
            </ProCard>

            <ProCard title="数据">
                <Form form={form} feedbackLayout="terse">
                    <FormConsumer>
                        {() => <div>{JSON.stringify(form.values)}</div>}
                    </FormConsumer>
                </Form>
            </ProCard>
        </Space>
    );
};