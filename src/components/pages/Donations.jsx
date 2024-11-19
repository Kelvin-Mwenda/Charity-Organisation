

export default function Donations() {
    return (
        <>
            <h1>My Donations</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Method</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>PayPal</td>
                        <td>$50</td>
                        <td>2022-01-01</td>
                        <td>10:00 AM</td>
                        <td>Completed</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Credit Card</td>
                        <td>$100</td>
                        <td>2022-02-15</td>
                        <td>12:30 PM</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
