import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
const Statistic = () => {
    const donetedItem = JSON.parse(localStorage.getItem('donateDetails'));
    const donetedItemLength = donetedItem.length;

    const totalDonetedItem = useLoaderData();
    const totalDonetedLength = totalDonetedItem.length

    console.log(donetedItemLength, totalDonetedLength);

    const data = [
        { name: "Group A", value: donetedItemLength },
        { name: "Group B", value: totalDonetedLength - donetedItemLength }
    ];

    const COLORS = ["#00C49F", "#FF444A"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="md:flex justify-center my-20">
            <PieChart PieChart width={500} height={500}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie >

            </PieChart>
        </div>
    );

};

export default Statistic;