'use client';

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './TemporalCharts.module.css';

export default function TemporalCharts({ yearlyTrend, yearlyByType }) {
    if (!yearlyTrend || !yearlyByType) return null;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltip}>
                    <p className={styles.tooltipLabel}>Year: {label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className={styles.tooltipValue} style={{ color: entry.color }}>
                            {entry.name}: {entry.value.toLocaleString()}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.header}>
                    <h2 className={styles.title}>EV Registration Trend</h2>
                    <p className={styles.subtitle}>Total registrations by model year (2010-2024)</p>
                </div>
                <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart data={yearlyTrend}>
                            <defs>
                                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis
                                dataKey="year"
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                                tickFormatter={(value) => value.toLocaleString()}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="count"
                                stroke="#6366f1"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorCount)"
                                animationDuration={1000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.header}>
                    <h2 className={styles.title}>BEV vs PHEV Trend</h2>
                    <p className={styles.subtitle}>Adoption patterns over time</p>
                </div>
                <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={yearlyByType}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis
                                dataKey="year"
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                                tickFormatter={(value) => value.toLocaleString()}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend
                                wrapperStyle={{ paddingTop: '1rem' }}
                                formatter={(value) => <span style={{ color: '#cbd5e1' }}>{value}</span>}
                            />
                            <Line
                                type="monotone"
                                dataKey="BEV"
                                stroke="#10b981"
                                strokeWidth={3}
                                dot={{ fill: '#10b981', r: 4 }}
                                activeDot={{ r: 6 }}
                                animationDuration={1000}
                            />
                            <Line
                                type="monotone"
                                dataKey="PHEV"
                                stroke="#f59e0b"
                                strokeWidth={3}
                                dot={{ fill: '#f59e0b', r: 4 }}
                                activeDot={{ r: 6 }}
                                animationDuration={1000}
                                animationBegin={200}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
