/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-types */

import { FunctionComponent, useMemo } from 'react'
import { Column, HeaderPropGetter, useTable } from 'react-table'

type Props = {
  columns: Column[]
  data: object[]
  getHeaderProps?: HeaderPropGetter<object>
}

export const Table: FunctionComponent<Props> = ({ columns, data, getHeaderProps }: Props) => {
  const tColumns = useMemo(() => columns, [])
  const tData = useMemo(() => data, [])
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: tColumns,
    data: tData,
  })

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
                    className: `${column.className} px-4 py-2 font-medium`,
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
            <tr {...row.getRowProps()} className="hover:bg-gray-100 border-b border-gray-200 py-10">
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps([{ className: `${cell.column.className} px-4 py-4` }])}>
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
