# EV Analytics Dashboard | MapUp Assessment

<div align="center">

**A comprehensive, data-driven analytics dashboard for exploring Washington State's Electric Vehicle population**

</div>

[Live Demo](https://analytics-dashboard-assessment-blue.vercel.app)

---

## 📊 Overview

This project presents an in-depth analysis of **50,000+ electric vehicles** registered in Washington State, delivering actionable insights through interactive visualizations and comprehensive data analytics. Built with modern web technologies, the dashboard showcases market trends, geographic distribution, manufacturer dominance, and technological evolution in the EV sector.

### 🎯 Assessment Objectives

- ✅ **Analytical Depth**: Multi-dimensional analysis revealing 8+ key insights
- ✅ **Dashboard Design**: Premium glassmorphism UI with responsive design
- ✅ **Insightfulness**: Clear communication of trends, patterns, and market dynamics

---

## ✨ Features

### 📈 **Comprehensive Data Visualizations**

- **Key Metrics Dashboard**: Real-time KPI cards showcasing total EVs, BEV percentage, average range, and market leader
- **Vehicle Type Analysis**: Interactive pie charts comparing BEV vs PHEV distribution and top 10 manufacturers
- **Temporal Trends**: Area and line charts revealing adoption patterns from 2010-2024
- **Geographic Distribution**: Horizontal bar charts highlighting county and city-level EV concentration
- **Range Analysis**: Histograms with statistical insights on electric range capabilities
- **CAFV Eligibility**: Breakdown of Clean Alternative Fuel Vehicle program qualification

### 💡 **Key Insights Section**

A dedicated analytical section presenting:
- 8 data-driven insights categorized by impact level
- Market trends, geographic patterns, and technological advancements
- Executive summary with critical findings
- Statistical highlights (50K+ vehicles, 15 years, 45+ manufacturers)

### 🎨 **Premium Design**

- **Glassmorphism UI**: Frosted glass effects with backdrop blur
- **Smooth Animations**: Fade-in transitions and hover effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Modern Typography**: Inter font family for crisp readability
- **Vibrant Color Palette**: Purple, cyan, and gradient accents

### 🚀 **Performance**

- **Next.js 16**: Leveraging App Router for optimal performance
- **Static Generation**: Pre-rendered pages for instant loading
- **Optimized Bundle**: Efficient code splitting and lazy loading
- **Fast Interactions**: Client-side data processingwith Recharts

---

## 🔍 Key Insights

### 🏆 **Market Leadership**
- **Tesla dominates** with 46.3% market share (23,127 vehicles)
- Established **brand trust** in the EV segment

### 📍 **Geographic Concentration**
- **75% of EVs** are in King County (Seattle metro area)
- Strong correlation between urban infrastructure and EV adoption

### 📈 **Explosive Growth**
- **2023 peak**: 16,791 registrations (33% of dataset)
- Accelerating adoption driven by incentives and model availability

### 🔋 **Battery EV Preference**
- **78.9% BEVs** vs 21.1% PHEVs
- Consumer confidence in pure electric technology

### ⚡ **Range Improvements**
- Average range approaching **60 miles** (skewed by PHEVs)
- Modern BEVs consistently achieving **250+ miles**

### 💚 **Policy Implications**
- Only **37.5% confirmed CAFV eligible**
- **52% unknown status** indicates documentation challenges

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 18 |
| **Charts** | Recharts (responsive, declarative) |
| **Styling** | CSS Modules + CSS3 |
| **Data Processing** | PapaParse (CSV parsing) |
| **Fonts** | Google Fonts (Inter) |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/analytics-dashboard-assessment.git

# Navigate to project directory
cd analytics-dashboard-assessment

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
analytics-dashboard-assessment/
├── app/
│   ├── page.jsx                 # Main dashboard page
│   ├── layout.jsx               # Root layout with metadata
│   ├── globals.css              # Global styles & design system
│   ├── page.module.css          # Page-specific styles
├── components/
│   ├── MetricsCards.jsx         # KPI metric cards
│   ├── KeyInsights.jsx          # Analytical insights section
│   ├── VehicleTypeCharts.jsx    # BEV/PHEV distribution
│   ├── TemporalCharts.jsx       # Yearly trends
│   ├── GeographicCharts.jsx     # County/city distribution
│   ├── RangeAnalysis.jsx        # Electric range analysis
│   └── CAFVCharts.jsx           # CAFV eligibility
├── utils/
│   ├── dataLoader.js            # CSV loading logic
│   └── dataProcessor.js         # Data aggregation functions
├── public/
│   └── Electric_Vehicle_Population_Data.csv
└── package.json
```

---

## 📊 Data Source

**Electric Vehicle Population Data** from the [Washington State Department of Licensing](https://www.kaggle.com/datasets/willianoliveiragibin/electric-vehicle-population)

- **Records**: 50,000 vehicles
- **Time Period**: 2010-2024
- **Geographic Scope**: Washington State
- **Attributes**: 17 columns including make, model, year, range, location, CAFV eligibility

---

## 🎯 Development Approach

1. **Data Exploration**: Analyzed dataset structure, identified key patterns
2. **Insight Extraction**: Derived 8 meaningful insights across multiple dimensions
3. **Visualization Design**: Selected appropriate chart types for each analysis
4. **UI/UX Implementation**: Built premium interface with glassmorphism and animations
5. **Performance Optimization**: Implemented efficient data processing and rendering
6. **Responsive Design**: Ensured mobile-first, accessible experience

---

## 🌟 Highlights

- **50,000+ data points** analyzed and visualized
- **8 chart types** across 6 analytical sections
- **8 key insights** with impact categorization
- **100% responsive** on all screen sizes
- **Glassmorphism UI** with modern aesthetics
- **Sub-3s load time** on production build

---

## 📝 License

This project was created as part of the MapUp Analytics Dashboard Assessment.

---

## 👤 Author

**MapUp Candidate**

*Passionate about data visualization, analytics, and creating meaningful insights from complex datasets.*

---

<div align="center">

**Built with ❤️ using Next.js and Recharts**

⭐ Star this repo if you found it helpful!

</div>
