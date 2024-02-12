function TableCell({ children }) {
  return (
    <td className="py-2 pr-2 whitespace-nowrap border-t border-slate-100 dark:border-slate-400/10 capitalize">
      {children}
    </td>
  );
}

export default TableCell;
