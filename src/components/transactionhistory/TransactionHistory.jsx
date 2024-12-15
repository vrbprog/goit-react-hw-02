import css from "./TransactionHistory.module.css";
import Transe from '../transe/Transe';

export default function TransactionHistory({ transactions }) {

  return (
    <table className={css.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

          <tbody>
              {
                transactions.map(transaction =>
                    <Transe
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
              )}
        </tbody>
    </table>
  );
};