'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import styles from './CAFVCharts.module.css';

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

export default function CAFVCharts({ cafvData }) {
    if (!cafvData) return null;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const total = cafvData.reduce((sum, d) => sum + d.value, 0);
            return (
                <div className={styles.tooltip}>
                    <p className={styles.tooltipLabel}>{payload[0].name}</p>
                    <p className={styles.tooltipValue}>
                        {payload[0].value.toLocaleString()} vehicles
                        <span className={styles.tooltipPercent}>
                            {' '}({((payload[0].value / total) * 100).toFixed(1)}%)
                        </span>
                    </p>
                </div>
            );
        }
        return null;
    };

    const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize="14"
                fontWeight="600"
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    const simplifiedData = cafvData.map(item => ({
        ...item,
        name: item.name.includes('unknown') ? 'Unknown' :
            item.name.includes('Eligible') ? 'CAFV Eligible' :
                'Not Eligible'
    }));

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Clean Alternative Fuel Vehicle Eligibility</h2>
                    <p className={styles.subtitle}>CAFV program qualification status</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.chartContainer}>
                        <ResponsiveContainer width="100%" height={350}>
                            <PieChart>
                                <Pie
                                    data={simplifiedData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={CustomLabel}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    dataKey="value"
                                    animationDuration={800}
                                >
                                    {simplifiedData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    height={36}
                                    formatter={(value) => <span style={{ color: '#cbd5e1' }}>{value}</span>}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={styles.explanation}>
                        <h3 className={styles.explanationTitle}>What is CAFV?</h3>
                        <p className={styles.explanationText}>
                            The Clean Alternative Fuel Vehicle (CAFV) Eligibility program determines which electric vehicles qualify for certain incentives and benefits. Eligibility is primarily based on the vehicle's electric range capabilities.
                        </p>
                        <div className={styles.stats}>
                            {simplifiedData.map((item, index) => (
                                <div key={index} className={styles.statItem}>
                                    <div
                                        className={styles.statColor}
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    ></div>
                                    <div>
                                        <p className={styles.statLabel}>{item.name}</p>
                                        <p className={styles.statValue}>{item.value.toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
