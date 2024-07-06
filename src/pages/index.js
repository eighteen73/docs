import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <svg width="240" height="52" viewBox="0 0 572 123" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <title>eighteen73</title>
            <path d="M42.62,55.5c-0.13,-7.27 -5.87,-13.52 -14.55,-13.52c-8.68,0 -14.29,5.23 -16.08,13.52l30.63,0Zm10.34,8.17l-41.48,0c1.02,11.74 9.57,17.61 20.54,17.61c7.02,0 13.78,-2.81 19.27,-6.38l-3.57,12.37c-4.47,2.55 -10.72,4.34 -17.61,4.34c-16.71,-0 -30.11,-11.74 -30.11,-29.85c0,-16.84 11.87,-29.6 28.07,-29.6c16.2,-0 25.52,11.87 25.52,25.26c0,2.04 -0.26,4.08 -0.64,6.25"/>
            <path d="M68.14,33.3l11.74,0l0,57.03l-11.74,0l0,-57.03Zm-1.28,-20.93c0,-3.95 3.19,-7.14 7.15,-7.14c3.96,0 7.27,3.19 7.27,7.14c0,3.95 -3.19,7.15 -7.27,7.15c-4.08,0 -7.15,-3.06 -7.15,-7.15"/>
            <path d="M106.03,54.74c0,6.63 5.1,11.61 13.27,11.61c8.17,0 13.01,-4.85 13.01,-11.61c0,-6.76 -4.98,-11.87 -13.01,-11.87c-8.03,0 -13.27,5.11 -13.27,11.87m33.68,49.12c0,-5.74 -5.62,-6.89 -17.61,-9.31c-3.06,-0.64 -5.61,-1.28 -7.78,-1.91c-8.04,3.32 -11.48,6.76 -11.48,11.1c0,5.61 6.64,9.95 18.76,9.95c12.12,-0 18.12,-4.34 18.12,-9.83m11.23,-0.76c0,12.5 -11.1,19.78 -30.11,19.78c-19.01,-0 -29.22,-7.4 -29.22,-18.25c0,-6.51 4.21,-11.86 14.03,-16.07c-2.81,-2.17 -3.7,-4.6 -3.7,-7.15c0,-3.06 1.66,-5.74 4.98,-8.29c-7.91,-3.57 -12.12,-10.59 -12.12,-18.5c0,-13.14 10.97,-21.31 25.9,-21.31l26.29,-0l4.08,9.44l-13.14,-0l-0.13,0.13c3.32,2.94 5.74,7.15 5.74,12.63c0,11.1 -8.81,20.03 -23.99,20.03c-1.15,-0 -2.3,-0 -3.32,-0.13c-1.66,1.15 -2.55,2.55 -2.55,4.21c0,2.81 2.29,3.7 11.99,5.62c15.82,3.19 25.26,6.38 25.26,17.86"/>
            <path d="M212.19,52.44l0,37.9l-11.74,0l0,-35.6c0,-7.79 -4.97,-11.99 -11.99,-11.99c-6.12,0 -11.87,3.7 -15.31,9.82l0,37.77l-11.74,0l0,-90.34l11.74,0l0,41.09c4.85,-5.74 11.1,-8.93 18.5,-8.93c11.36,0 20.54,7.66 20.54,20.29"/>
            <path d="M267.57,75.41l-2.04,12.38c-3.83,2.42 -8.8,3.7 -14.04,3.7c-12.63,0 -18.76,-6.64 -18.76,-17.23l0,-30.62l-9.19,0l0,-3.96l17.74,-16.2l3.32,0l0,9.83l22.84,0l-2.04,10.33l-20.8,0l0,28.84c0,5.1 2.93,8.29 8.04,8.29c5.48,-0 10.46,-2.04 14.93,-5.36"/>
            <path d="M318.09,55.5c-0.13,-7.27 -5.87,-13.52 -14.54,-13.52c-8.67,0 -14.29,5.23 -16.08,13.52l30.62,0Zm10.34,8.17l-41.47,0c1.02,11.74 9.57,17.61 20.54,17.61c7.02,0 13.78,-2.81 19.27,-6.38l-3.57,12.37c-4.47,2.55 -10.72,4.34 -17.61,4.34c-16.72,0 -30.11,-11.74 -30.11,-29.86c-0,-16.84 11.87,-29.6 28.07,-29.6c16.2,0 25.52,11.87 25.52,25.26c-0,2.04 -0.25,4.08 -0.64,6.25"/>
            <path d="M382.53,55.5c-0.13,-7.27 -5.87,-13.52 -14.55,-13.52c-8.68,0 -14.29,5.23 -16.08,13.52l30.63,0Zm10.34,8.17l-41.47,0c1.02,11.74 9.57,17.61 20.54,17.61c7.02,0 13.78,-2.81 19.27,-6.38l-3.57,12.37c-4.47,2.55 -10.72,4.34 -17.61,4.34c-16.72,0 -30.11,-11.74 -30.11,-29.86c0,-16.84 11.87,-29.6 28.07,-29.6c16.2,0 25.52,11.87 25.52,25.26c0,2.04 -0.26,4.08 -0.64,6.25"/>
            <path d="M458.83,52.44l0,37.9l-11.74,0l0,-35.6c0,-7.79 -4.97,-11.99 -11.99,-11.99c-5.99,0 -11.87,3.7 -15.31,9.82l0,37.77l-11.74,0l0,-57.04l11.74,-0l0,7.78c4.85,-5.74 11.1,-8.93 18.51,-8.93c11.36,-0 20.54,7.66 20.54,20.29"/>
            <path d="M515.86,41.98l0,-0.38l-20.54,-0c-16.59,-0 -21.18,1.15 -23.48,10.46l-0.26,1.27l-1.28,-0.13l2.81,-23.09l48.49,-0l0.13,0.76l-33.56,82.94l-10.59,0l38.28,-71.84l0,0.01Z"/>
            <path d="M523.26,106.29c0,-3.7 2.81,-6.51 6.64,-6.51c5.99,0 9.95,6.38 8.8,13.27c0.13,0 3.44,0.89 5.62,0.89c8.55,0 16.33,-8.29 16.33,-19.78c0,-12.5 -7.66,-20.93 -19.14,-20.93c-3.83,0 -7.4,1.02 -10.72,2.17l-0.38,-0.89c15.56,-9.57 24.37,-13.52 24.37,-24.24c0,-8.17 -5.49,-13.78 -13.4,-13.78c-7.14,0 -12.76,3.32 -16.46,11.23l-0.89,-0.38c5.1,-11.61 13.27,-19.14 24.12,-19.14c10.85,0 18.37,7.15 18.37,16.08c0,10.59 -9.57,15.7 -18.5,20.54l0,0.26c15.31,-0.13 23.99,10.21 23.99,22.45c0,14.55 -13.78,28.46 -32.02,28.46c-10.46,0 -16.72,-4.72 -16.72,-9.7"/>
          </svg>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation For Packages & Plugins"
    >
      <HomepageHeader />
    </Layout>
  );
}
