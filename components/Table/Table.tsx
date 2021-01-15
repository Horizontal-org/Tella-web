/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-types */

import { FunctionComponent, useEffect, useMemo } from 'react'
import { Column, useTable, useRowSelect, useSortBy } from 'react-table'
import cn from 'classnames'
import { MdExpandMore } from '@react-icons/all-files/md/MdExpandMore'
import { MdExpandLess } from '@react-icons/all-files/md/MdExpandLess'
import { IndeterminateCheckbox } from './IndeterminateCheckbox'
import { Report } from '../../domain/Report'
import { ReportsQuery } from '../../domain/ReportQuery'

type Props = {
  columns: Array<Column<{}>>
  data: Array<Report>
  onSelection?: (reports: Report[]) => void
  onFetch?: (reportQuery: ReportsQuery) => void
  reportQuery?: ReportsQuery
}

export const Table: FunctionComponent<Props> = ({
  columns,
  data,
  onSelection,
  onFetch,
  reportQuery,
}: Props) => {
  const tColumns = useMemo(() => columns, [])
  const tData = useMemo(() => data, [])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds, pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns: tColumns,
      data: tData,
      manualPagination: true,
      manualSortBy: true,
      autoResetPage: false,
      autoResetSortBy: false,
      pageCount: reportQuery.pagination.total / reportQuery.pagination.size,
    },
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((col) => [
        {
          id: 'selection',
          Header: '',
          className: 'max-w-content text-center p-2',
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

  useEffect(() => {
    const r = selectedFlatRows.map((d) => d.original) as Report[]
    onSelection(r)
  }, [selectedRowIds, onSelection])

  useEffect(() => {
    onFetch({
      ...reportQuery,
      sort: sortBy,
      pagination: {
        ...reportQuery.pagination,
        size: pageSize,
        page: pageIndex,
      },
    })
  }, [onFetch, sortBy])

  return (
    <table
      {...getTableProps()}
      className={`table-auto border-collapse w-full ${getTableProps().className}`}
    >
      <thead className="border-b border-gray-200">
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="rounded-lg text-base font-sans text-gray-300 text-left"
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps([
                  {
                    className: `${column.className} font-semibold text-base`,
                  },
                  column.getSortByToggleProps(),
                ])}
              >
                <div className="flex flex-row">
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <MdExpandMore />
                      ) : (
                        <MdExpandLess />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="text-base text-gray-700">
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

Table.defaultProps = {
  onSelection: () => null,
  onFetch: () => null,
  reportQuery: { filter: {}, sort: [], pagination: { page: 1, total: 1, size: 1 } },
}
