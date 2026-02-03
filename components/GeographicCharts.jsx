'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import styles from './GeographicCharts.module.css';

const COLORS = ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe', '#06b6d4', '#22d3ee', '#67e8f9', '#a5f3fc'];

export default function GeographicCharts({ counties, cities }) {
    if (!counties || !cities) return null;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltip}>
                    <p className={styles.tooltipLabel}>{payload[0].payload.name}</p>
                    <p className={styles.tooltipValue}>
                        {payload[0].value.toLocaleString()} vehicles
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Top 10 Counties</h2>
                    <p className={styles.subtitle}>Geographic distribution by county</p>
                </div>
                <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={counties} layout="vertical" margin={{ left: 80 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis
                                type="number"
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                                tickFormatter={(value) => value.toLocaleString()}
                            />
                            <YAxis
                                type="category"
                                dataKey="name"
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar
                                dataKey="value"
                                radius={[0, 8, 8, 0]}
                                animationDuration={1000}
                            >
                                {counties.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Top 10 Cities</h2>
                    <p className={styles.subtitle}>Urban EV adoption hotspots</p>
                </div>
                <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={cities} layout="vertical" margin={{ left: 80 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis
                                type="number"
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                                tickFormatter={(value) => value.toLocaleString()}
                            />
                            <YAxis
                                type="category"
                                dataKey="name"
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar
                                dataKey="value"
                                radius={[0, 8, 8, 0]}
                                animationDuration={1000}
                                animationBegin={200}
                            >
                                {cities.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
