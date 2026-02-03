'use client';

import {
    Battery,
    Trophy,
    MapPin,
    TrendingUp,
    Zap,
    ShieldCheck,
    Users,
    Plug,
    Lightbulb,
    BarChart3
} from 'lucide-react';
import styles from './KeyInsights.module.css';

export default function KeyInsights({ data, metrics }) {
    if (!data || !metrics) return null;

    const insights = [
        {
            icon: Battery,
            title: 'Battery EV Dominance',
            description: `Battery Electric Vehicles (BEVs) make up ${metrics.bevPercentage}% of the market, showing strong consumer preference for pure electric over plug-in hybrids.`,
            impact: 'high',
            category: 'Market Trend'
        },
        {
            icon: Trophy,
            title: 'Tesla Market Leadership',
            description: `Tesla leads with ${metrics.topMake.count.toLocaleString()} vehicles (${((metrics.topMake.count / metrics.totalEVs) * 100).toFixed(1)}% market share), demonstrating the brand's dominance in EV adoption.`,
            impact: 'high',
            category: 'Manufacturer'
        },
        {
            icon: MapPin,
            title: 'Geographic Concentration',
            description: 'King County accounts for 75% of all EVs in the dataset, indicating strong urban adoption in the Seattle metropolitan area.',
            impact: 'high',
            category: 'Geography'
        },
        {
            icon: TrendingUp,
            title: 'Rapid Growth Period',
            description: '2023 saw the highest registrations (16,791 vehicles), representing explosive growth in EV adoption driven by increased model availability and incentives.',
            impact: 'high',
            category: 'Temporal'
        },
        {
            icon: Zap,
            title: 'Range Improvement Trend',
            description: `Average electric range of ${metrics.avgRange} miles shows modern EVs are increasingly practical for daily use, with many models exceeding 250+ miles.`,
            impact: 'medium',
            category: 'Technology'
        },
        {
            icon: ShieldCheck,
            title: 'CAFV Eligibility Gap',
            description: 'Only 37.5% of vehicles are confirmed CAFV eligible, with 52% having unknown status - indicating potential issues with range documentation.',
            impact: 'medium',
            category: 'Policy'
        },
        {
            icon: Users,
            title: 'Diverse Manufacturer Ecosystem',
            description: 'While Tesla dominates, we see healthy competition from traditional automakers (Nissan, Chevrolet, BMW) entering the EV space.',
            impact: 'medium',
            category: 'Market Structure'
        },
        {
            icon: Plug,
            title: 'PHEV Market Segment',
            description: 'Plug-in Hybrids (21.1%) serve as an important bridge technology, offering flexibility for consumers not ready for full-electric vehicles.',
            impact: 'medium',
            category: 'Consumer Behavior'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.badge}>
                    <Lightbulb size={18} strokeWidth={2.5} className={styles.badgeIcon} />
                    <span>Data-Driven Insights</span>
                </div>
                <h2 className={styles.title}>Key Findings & Analysis</h2>
                <p className={styles.subtitle}>
                    Critical insights derived from comprehensive analysis of {metrics.totalEVs.toLocaleString()} electric vehicles
                </p>
            </div>

            <div className={styles.insightsGrid}>
                {insights.map((insight, index) => {
                    const IconComponent = insight.icon;
                    return (
                        <div
                            key={index}
                            className={`${styles.insightCard} ${styles[insight.impact]}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardHeader}>
                                <IconComponent className={styles.icon} size={32} strokeWidth={2} />
                                <span className={styles.category}>{insight.category}</span>
                            </div>
                            <h3 className={styles.insightTitle}>{insight.title}</h3>
                            <p className={styles.insightDescription}>{insight.description}</p>
                            <div className={styles.impactBadge}>
                                <span className={styles.impactDot}></span>
                                {insight.impact === 'high' ? 'High Impact' : 'Important'}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.summary}>
                <div className={styles.summaryCard}>
                    <h3 className={styles.summaryTitle}>
                        <BarChart3 size={20} strokeWidth={2.5} style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                        Analysis Summary
                    </h3>
                    <p className={styles.summaryText}>
                        The Washington State EV market shows strong growth momentum with clear urban concentration.
                        Tesla's market dominance is evident, but increasing competition from traditional automakers
                        signals market maturation. The high percentage of BEVs over PHEVs indicates consumer confidence
                        in pure electric technology, supported by improving range capabilities. Geographic concentration
                        in King County suggests infrastructure and policy effectiveness in urban areas, which could
                        serve as a model for broader adoption.
                    </p>
                </div>

                <div className={styles.summaryStats}>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>{metrics.totalEVs.toLocaleString()}</div>
                        <div className={styles.statLabel}>Total EVs Analyzed</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>15</div>
                        <div className={styles.statLabel}>Years of Data</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>45+</div>
                        <div className={styles.statLabel}>Manufacturers</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>10</div>
                        <div className={styles.statLabel}>Counties</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
