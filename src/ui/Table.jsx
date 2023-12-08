import { createContext } from 'react'

const TableContext = createContext()

function Table({ children, data }) {
  return (
    <TableContext.Provider value={data}>
      <div className="bg-secondary-0 overflow-x-auto">
        <table>{children}</table>
      </div>
    </TableContext.Provider>
  )
}

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  )
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>
}

function TableRow({ children }) {
  return <tr>{children}</tr>
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow

export default Table
