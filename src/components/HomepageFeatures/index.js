// import React from 'react';
// import clsx from 'clsx';
// import styles from './styles.module.css';

// const FeatureList = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';


const TrackList = [
  {
    title: 'Getting Started with CUDOS',
    Svg: require('@site/static/img/cs.svg').default,
    to: 'docs/getting_started_with_cudos',
    description: (
      <>
        Dive into the world of CUDOS, understanding the fundamentals of this groundbreaking Layer-1 blockchain, its purpose, and the features it offers.
      </>
    ),
  },
  {
    title: 'CUDOS Blockchain Development',
    Svg: require('@site/static/img/cs.svg').default,
    to: 'docs/cudos_blockchain_development',
    description: (
      <>
        Become proficient in developing on the CUDOS blockchain. Learn the ins and outs of the blockchain structure, smart contracts, DApps, and more.
      </>
    ),
  },
  {
    title: 'Harnessing CUDOS Blockchain Compute',
    Svg: require('@site/static/img/cs.svg').default,
    to: 'docs/harnessing_cudos_blockchain_compute',
    description: (
      <>
        Master the development on CUDOS Blockchain Compute, the cloud platform for decentralized applications. Discover its features, use cases, and how to effectively deploy and manage your applications.
      </>
    ),
  },
  {
    title: 'Node Operation on CUDOS Network',
    Svg: require('@site/static/img/cs.svg').default,
    to: 'docs/node_operation_on_cudos_network',
    description: (
      <>
        Get hands-on experience running a CUDOS node. Learn about node setup, maintenance, problem-solving, and the importance of nodes in maintaining network health and security.
      </>
    ),
  },
];


function Track({Svg, title, description, to}) {
  const trackUrl = useBaseUrl(to);
  return (
    <div className={clsx('col col--6')}>
      <Link to={trackUrl} className="text--center">
        <div>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}



export default function HomepageTracks() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {TrackList.map((props, idx) => (
            <Track key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

