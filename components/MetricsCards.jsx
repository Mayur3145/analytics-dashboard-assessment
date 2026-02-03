'use client';

import { Car, Battery, Zap, Trophy } from 'lucide-react';
import styles from './MetricsCards.module.css';

export default function MetricsCards({ metrics }) {
    if (!metrics) return null;

    const cards = [
        {
            title: 'Total Electric Vehicles',
            value: metrics.totalEVs.toLocaleString(),
            icon: Car,
            gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
        },
        {
            title: 'Battery EV %',
            value: `${metrics.bevPercentage}%`,
            icon: Battery,
            gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)'
        },
        {
            title: 'Avg Electric Range',
            value: `${metrics.avgRange} mi`,
            icon: Zap,
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
        },
        {
            title: 'Top Manufacturer',
            value: metrics.topMake.name,
            subtitle: `${metrics.topMake.count.toLocaleString()} vehicles`,
            icon: Trophy,
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
        }
    ];

    return (
        <div className={styles.container}>
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={styles.card}
                    style={{
                        animationDelay: `${index * 0.1}s`,
                        '--gradient': card.gradient
                    }}
                >
                    <div className={styles.iconWrapper}>
                        <card.icon className={styles.icon} size={28} strokeWidth={2.5} />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{card.title}</h3>
                        <p className={styles.value}>{card.value}</p>
                        {card.subtitle && <p className={styles.subtitle}>{card.subtitle}</p>}
                    </div>
                    <div className={styles.glow}></div>
                </div>
            ))}
        </div>
    );
}
