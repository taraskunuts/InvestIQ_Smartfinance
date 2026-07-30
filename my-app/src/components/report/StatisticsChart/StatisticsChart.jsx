import "./StatisticsChart.css";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell
} from "recharts";

import { useSelector } from "react-redux";

import { selectTransactions } from "../../../redux/transactions/transactionsSlice";

function StatisticsChart({

    category,
    mode,
    month,
    year

}) {

    const transactions = useSelector(selectTransactions);

    const filteredTransactions = transactions.filter(item => {

        const [, itemMonth, itemYear] = item.date.split(".");

        return (
            Number(itemMonth) - 1 === month &&
            Number(itemYear) === year
        );

    });

    const chartData = filteredTransactions

        .filter(item =>
            item.type === mode &&
            item.category === category
        )

        .map(item => ({
            name: item.description,
            amount: item.amount
        }))

        .sort((a, b) => b.amount - a.amount);

    if (chartData.length === 0) {

        return (

            <div className="empty-chart">

                Немає {mode === "expense" ? "витрат" : "доходів"} для відображення

            </div>

        );

    }

    return (

        <div className="statistics-chart">

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <BarChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: 60
                    }}
                >

                    <XAxis
                        dataKey="name"
                        interval={0}
                        angle={-35}
                        textAnchor="end"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="amount"
                        radius={[8, 8, 0, 0]}
                    >

                        {chartData.map((entry, index) => (

                            <Cell
                                key={index}
                                fill={
                                    index === 0
                                        ? "#FF751D"
                                        : "#FFDAC0"
                                }
                            />

                        ))}

                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default StatisticsChart;