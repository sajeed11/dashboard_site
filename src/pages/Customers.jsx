import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Filter, Sort, Toolbar } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className="m-2 sm:mt-24 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header title='Customers' category='Page' />
      <GridComponent id="gridcomp" dataSource={customersData} allowPaging allowSorting toolbar={['Delete']} editSettings={{ allowDeleting: true, allowEditing: true }} width='auto'>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Filter, Edit, Sort, Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers