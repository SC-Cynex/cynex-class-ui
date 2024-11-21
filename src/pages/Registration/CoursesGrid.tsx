import React from 'react';
import { Modal, Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  id: string;
  course: string;
  tags: string;
  status: string;
}

export const openModalRegistration = (course: DataType) => {
    Modal.confirm({
      title: `Inscrição no curso: ${course.course}`,
      content: (
        <div>
          <p>
            Você está prestes a se inscrever no curso <strong>{course.course}</strong>.
          </p>
          <p>Categoria: {course.tags}</p>
        </div>
      ),
      onOk() {
        console.log(`Inscrito no curso: ${course.course}`);
      },
      onCancel() {
        console.log('Inscrição cancelada');
      },
    });
  };

const categoryColors: { [key: string]: string } = {
  Saúde: 'green',
  'Ciências Humanas e Sociais': 'blue',
  'Ciências Sociais Aplicadas': 'volcano',
  'Artes, Design e Cultura': 'purple',
  Engenharia: 'geekblue',
  Administração: 'cyan',
  Psicologia: 'magenta',
  Medicina: 'green',
};

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Identificador',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Curso',
    dataIndex: 'course',
    key: 'course'
  },
  {
    title: 'Categoria',
    key: 'category',
    dataIndex: 'category',
    render: (_, record) => {
        const color = categoryColors[record.tags] || 'gray';
        return (
          <Tag color={color} key={record.tags}>
            {record.tags}
          </Tag>
        )
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render(_, record) {
            const colorStatus = record.status === 'Disponível' ? 'darkgreen' : 'darkred'
        return (
            <Tag color={colorStatus} key={record.key}>
                {record.status}
            </Tag>
        )        
    }
  },
  {
    title: 'Ações',
    key: 'action',
    align: 'center',
    render: (_, record) => (
      <Space size="middle">
        <Button onClick={() => openModalRegistration(record)}>Inscrever-se em {record.course}</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    id: 'CY00001',
    course: "Engenharia de Software",
    tags: 'Engenharia',
    status: 'Indisponível'
  },
  {
    key: '2',
    id: 'CY00002',
    course: "Biomedicina",
    tags: 'Saúde',
    status: 'Disponível'
  },
  {
    key: '3',
    id: 'CY00003',
    course: "Psicologia",
    tags: 'Ciências Humanas e Sociais',
    status: 'Disponível'
  },
  {
    key: '4',
    id: 'CY00004',
    course: "Administração",
    tags: 'Ciências Sociais Aplicadas',
    status: 'Disponível'
  },
  {
    key: '5',
    id: 'CY00005',
    course: "Arquitetura",
    tags: 'Artes, Design e Cultura',
    status: 'Disponível'
  },
  {
    key: '6',
    id: 'CY00006',
    course: "Medicina",
    tags: 'Saúde',
    status: 'Disponível'
  },
];

const CoursesGrid: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default CoursesGrid;
