'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import styles from './VehicleTypeCharts.module.css';

const COLORS = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#14b8a6', '#f97316', '#a855f7'];

export default function VehicleTypeCharts({ evTypeData, topMakes }) {
    if (!evTypeData || !topMakes) return null;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltip}>
                    <p className={styles.tooltipLabel}>{payload[0].name}</p>
                    <p className={styles.tooltipValue}>
                        {payload[0].value.toLocaleString()} vehicles
                        <span className={styles.tooltipPercent}>
                            {' '}({((payload[0].value / evTypeData.reduce((sum, d) => sum + d.value, 0)) * 100).toFixed(1)}%)
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

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Vehicle Type Distribution</h2>
                    <p className={styles.subtitle}>Battery Electric vs Plug-in Hybrid</p>
                </div>
                <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height={350}>
                        <PieChart>
                            <Pie
                                data={evTypeData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={CustomLabel}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                                animationBegin={0}
                                animationDuration={800}
                            >
                                {evTypeData.map((entry, index) => (
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
            </div>

            <div className={styles.section}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Top 10 Manufacturers</h2>
                    <p className={styles.subtitle}>Leading EV brands by volume</p>
                </div>
                <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height={350}>
                        <PieChart>
                            <Pie
                                data={topMakes}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                                animationBegin={200}
                                animationDuration={800}
                            >
                                {topMakes.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend
                                verticalAlign="bottom"
                                height={36}
                                formatter={(value) => <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{value}</span>}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
