"use client";

import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export interface Row {
  title: string;
  year: string;
}


const columns = [
  {
    name: 'Title',
    selector: (row: Row) => row.title,
  },
  {
    name: 'Year',
    selector: (row: Row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
    code: 'code1',
    name: 'name1',
    category: 'cata1',
    quantity: 'Quantity1',

  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1988',
    code: 'code2',
    name: 'name2',
    category: 'cata2',
    quantity: 'Quantity2',
  },
  {
    id: 3,
    title: 'Ghostbusters',
    year: '1988',
    code: 'code3',
    name: 'name3',
    category: 'cata3',
    quantity: 'Quantity3',

  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1988',
    code: 'code4',
    name: 'name4',
    category: 'cata4',
    quantity: 'Quantity4',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1988',
    code: 'code5',
    name: 'name5',
    category: 'cata5',
    quantity: 'Quantity5',
  },
]

export default function MessageItemTable() {

  const [isComponentReady, setComponentReady] = useState(false);

  return (
    <>
      <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </>
  );
}
