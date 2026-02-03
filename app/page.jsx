'use client';

import { useState, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';
import styles from './page.module.css';
import Sidebar from '@/components/Sidebar';
import MetricsCards from '@/components/MetricsCards';
import KeyInsights from '@/components/KeyInsights';
import VehicleTypeCharts from '@/components/VehicleTypeCharts';
import TemporalCharts from '@/components/TemporalCharts';
import GeographicCharts from '@/components/GeographicCharts';
import RangeAnalysis from '@/components/RangeAnalysis';
import CAFVCharts from '@/components/CAFVCharts';
import { loadEVData } from '@/utils/dataLoader';
import {
    calculateMetrics,
    getEVTypeDistribution,
    getTopMakes,
    getTopModels,
    getYearlyTrend,
    getYearlyTrendByType,
    getCountyDistribution,
    getCityDistribution,
    getRangeDistribution,
    getCAFVDistribution
} from '@/utils/dataProcessor';

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const evData = await loadEVData();
                setData(evData);
            } catch (err) {
                setError(err.message);
                console.error('Error loading data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p className={styles.loadingText}>Loading EV data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.error}>
                <h2>Error Loading Data</h2>
                <p>{error}</p>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className={styles.error}>
                <h2>No Data Available</h2>
                <p>Please check the CSV file</p>
            </div>
        );
    }

    const metrics = calculateMetrics(data);
    const evTypeData = getEVTypeDistribution(data);
    const topMakes = getTopMakes(data);
    const topModels = getTopModels(data);
    const yearlyTrend = getYearlyTrend(data);
    const yearlyByType = getYearlyTrendByType(data);
    const counties = getCountyDistribution(data);
    const cities = getCityDistribution(data);
    const rangeData = getRangeDistribution(data);
    const cafvData = getCAFVDistribution(data);

    return (
        <>
            <Sidebar />
            <main className={styles.main}>
                <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Electric Vehicle
                            <span className={styles.heroGradient}> Analytics</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Comprehensive insights into Washington State's electric vehicle population
                        </p>
                        <div className={styles.heroBadge}>
                            <BarChart3 size={20} strokeWidth={2.5} className={styles.badgeIcon} />
                            <span>{data.length.toLocaleString()} Vehicles Analyzed</span>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <section id="metrics" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Key Metrics Overview</h2>
                            <p className={styles.sectionDescription}>
                                Essential statistics and performance indicators at a glance
                            </p>
                        </div>
                        <MetricsCards metrics={metrics} />
                    </section>

                    <section id="insights" className={styles.section}>
                        <KeyInsights data={data} metrics={metrics} />
                    </section>

                    <section id="vehicle-types" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Vehicle Type Analysis</h2>
                            <p className={styles.sectionDescription}>
                                Breaking down the electric vehicle ecosystem by type and manufacturer
                            </p>
                        </div>
                        <VehicleTypeCharts evTypeData={evTypeData} topMakes={topMakes} />
                    </section>

                    <section id="temporal" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Temporal Trends</h2>
                            <p className={styles.sectionDescription}>
                                How EV adoption has evolved over the years
                            </p>
                        </div>
                        <TemporalCharts yearlyTrend={yearlyTrend} yearlyByType={yearlyByType} />
                    </section>

                    <section id="geographic" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Geographic Distribution</h2>
                            <p className={styles.sectionDescription}>
                                Where electric vehicles are most prevalent
                            </p>
                        </div>
                        <GeographicCharts counties={counties} cities={cities} />
                    </section>

                    <section id="range" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Electric Range Analysis</h2>
                            <p className={styles.sectionDescription}>
                                Understanding the capabilities of today's electric vehicles
                            </p>
                        </div>
                        <RangeAnalysis rangeData={rangeData} />
                    </section>

                    <section id="cafv" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>CAFV Eligibility</h2>
                            <p className={styles.sectionDescription}>
                                Clean Alternative Fuel Vehicle program qualification status
                            </p>
                        </div>
                        <CAFVCharts cafvData={cafvData} />
                    </section>
                </div>

                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <p className={styles.footerText}>
                            Data Source:{' '}
                            <a
                                href="https://www.kaggle.com/datasets/willianoliveiragibin/electric-vehicle-population"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footerLink}
                            >
                                Electric Vehicle Population Data (Kaggle)
                            </a>
                        </p>
                        <p className={styles.footerCopyright}>
                            © 2024 EV Analytics Dashboard | MapUp Assessment
                        </p>
                    </div>
                </footer>
            </main>
        </>
    );
}
