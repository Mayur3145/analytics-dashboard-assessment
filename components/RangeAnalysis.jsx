'use client';

import { BarChart2, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import styles from './RangeAnalysis.module.css';

const COLORS = ['#ef4444', '#f59e0b', '#f59e0b', '#10b981', '#10b981', '#06b6d4', '#6366f1'];

export default function RangeAnalysis({ rangeData }) {
    if (!rangeData) return null;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltip}>
                    <p className={styles.tooltipLabel}>{payload[0].payload.name} miles</p>
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
                    <h2 className={styles.title}>Electric Range Distribution</h2>
                    <p className={styles.subtitle}>Breakdown of vehicle range capabilities</p>
                </div>
                <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={rangeData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis
                                dataKey="name"
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                style={{ fontSize: '0.875rem' }}
                                tickFormatter={(value) => value.toLocaleString()}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar
                                dataKey="value"
                                radius={[8, 8, 0, 0]}
                                animationDuration={1000}
                            >
                                {rangeData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className={styles.insights}>
                    <div className={styles.insightCard}>
                        <BarChart2 size={32} strokeWidth={2} className={styles.insightIcon} />
                        <div>
                            <p className={styles.insightLabel}>Key Insight</p>
                            <p className={styles.insightText}>
                                Most EVs (0-50 miles) are likely PHEVs with limited electric-only range
                            </p>
                        </div>
                    </div>
                    <div className={styles.insightCard}>
                        <Zap size={32} strokeWidth={2} className={styles.insightIcon} />
                        <div>
                            <p className={styles.insightLabel}>Modern EVs</p>
                            <p className={styles.insightText}>
                                250+ mile range becoming standard for new battery electric vehicles
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
