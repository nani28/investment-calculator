import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.tableData &&
          props.tableData.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  item.savingsEndOfYear -
                    props.initialAmount -
                    item.yearlyContribution * item.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialAmount + item.yearlyContribution * item.year
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
