import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
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
        percent
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
        <div>
            <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={500} >
                    <PieChart height={500}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={160}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie >
                    </PieChart>
                </ResponsiveContainer>

            </div>
            <div className="flex justify-center gap-14 md:mb-20">
                <span className="md:flex flex-row gap-4 items-center">
                    <p className="py-3 md:py-0">Your Donation</p>
                    <div className="w-24 h-3 bg-[#00C49F] rounded"></div>
                </span>
                <span className="md:flex flex-row gap-4 items-center">
                    <p className="py-3 md:py-0"> Total Donation</p>
                    <div className="w-24 h-3 bg-[#FF444A] rounded"></div>
                </span>
            </div>
        </div>

    );

};

export default Statistic;