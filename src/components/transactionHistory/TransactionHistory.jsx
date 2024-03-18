import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className={css["title"]}>Type</th>
            <th className={css["title"]}>Amount</th>
            <th className={css["title"]}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, amount, type, currency }) => {
            return (
              <>
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}