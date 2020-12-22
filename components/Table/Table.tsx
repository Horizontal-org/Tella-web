/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-types */

import { FunctionComponent, useMemo } from 'react'
import { Column, HeaderPropGetter, useTable, useRowSelect } from 'react-table'
import cn from 'classnames'
import { IndeterminateCheckbox } from './IndeterminateCheckbox'

type Props = {
  columns: Column[]
  data: object[]
  getHeaderProps?: HeaderPropGetter<object>
}

export const Table: FunctionComponent<Props> = ({ columns, data, getHeaderProps }: Props) => {
  const tColumns = useMemo(() => columns, [])
  const tData = useMemo(() => data, [])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns: tColumns,
      data: tData,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((col) => [
        {
          id: 'selection',
          Header: '',
          // eslint-disable-next-line react/display-name
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...col,
      ])
    }
  )

  return (
    <table
      {...getTableProps()}
      className={`table-auto border-collapse w-full ${getTableProps().className}`}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="rounded-lg text-base font-osans text-gray-500 text-left"
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps([
                  {
                    className: `px-3 py-2 font-medium ${column.className}`,
                  },
                ])}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="text-sm font-normal text-gray-700">
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr
              {...row.getRowProps()}
              className={cn('border-b border-gray-200 hover:border-transparent', {
                'bg-blue-light': row.isSelected,
                'hover:bg-gray-200': !row.isSelected,
              })}
            >
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps([{ className: cell.column.className || 'px-3 py-3' }])}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

// Create a default prop getter
const defaultPropGetter = () => ({})

Table.defaultProps = {
  getHeaderProps: defaultPropGetter,
}
