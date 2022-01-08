import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Search Over 45K Icons Included',
    image: './icon-menu-builder-docs/img/home-screen.png',
    description: (
      <>
        Find inspiration by searching all iconsets and receiving a single set of search results.
      </>
    ),
  },
  {
    title: 'Save you favourites!',
    image: './icon-menu-builder-docs/img/myfavs.png',
    description: (
      <>
        Save your favourite icons for easy retrieval, the My Favourites page is the home page on loading!
      </>
    ),
  },
  {
    title: 'Create Menu Collections',
    image: './icon-menu-builder-docs/img/mymenus.png',
    description: (
      <>
        Create, save and export Power Fx collection code to speed up development.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
