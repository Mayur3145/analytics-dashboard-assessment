'use client';

import { useState, useEffect } from 'react';
import {
    Menu,
    X,
    BarChart3,
    Lightbulb,
    PieChart,
    TrendingUp,
    MapPin,
    Zap,
    ShieldCheck
} from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const sections = [
        { id: 'metrics', label: 'Key Metrics', icon: BarChart3 },
        { id: 'insights', label: 'Key Insights', icon: Lightbulb },
        { id: 'vehicle-types', label: 'Vehicle Types', icon: PieChart },
        { id: 'temporal', label: 'Temporal Trends', icon: TrendingUp },
        { id: 'geographic', label: 'Geographic', icon: MapPin },
        { id: 'range', label: 'Range Analysis', icon: Zap },
        { id: 'cafv', label: 'CAFV Eligibility', icon: ShieldCheck }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        // Close sidebar on mobile after clicking
        if (window.innerWidth < 768) {
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                className={styles.toggleButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.sidebarHeader}>
                    <h3 className={styles.sidebarTitle}>Navigation</h3>
                </div>

                <nav className={styles.nav}>
                    {sections.map((section) => {
                        const IconComponent = section.icon;
                        return (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
                            >
                                <IconComponent size={20} strokeWidth={2} className={styles.navIcon} />
                                <span className={styles.navLabel}>{section.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <div className={styles.sidebarFooter}>
                    <p className={styles.footerText}>Scroll or click to navigate</p>
                </div>
            </aside>
        </>
    );
}
