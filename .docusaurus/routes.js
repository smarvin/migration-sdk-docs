import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/migration-sdk-docs/blog',
    component: ComponentCreator('/migration-sdk-docs/blog', '440'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/archive',
    component: ComponentCreator('/migration-sdk-docs/blog/archive', '026'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/first-blog-post',
    component: ComponentCreator('/migration-sdk-docs/blog/first-blog-post', 'ca7'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/long-blog-post',
    component: ComponentCreator('/migration-sdk-docs/blog/long-blog-post', '92c'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/mdx-blog-post',
    component: ComponentCreator('/migration-sdk-docs/blog/mdx-blog-post', '4e9'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/tags',
    component: ComponentCreator('/migration-sdk-docs/blog/tags', '052'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/tags/docusaurus',
    component: ComponentCreator('/migration-sdk-docs/blog/tags/docusaurus', '7c3'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/tags/facebook',
    component: ComponentCreator('/migration-sdk-docs/blog/tags/facebook', 'c71'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/tags/hello',
    component: ComponentCreator('/migration-sdk-docs/blog/tags/hello', 'c95'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/tags/hola',
    component: ComponentCreator('/migration-sdk-docs/blog/tags/hola', '35b'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/blog/welcome',
    component: ComponentCreator('/migration-sdk-docs/blog/welcome', '64f'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/markdown-page',
    component: ComponentCreator('/migration-sdk-docs/markdown-page', '2b4'),
    exact: true
  },
  {
    path: '/migration-sdk-docs/docs',
    component: ComponentCreator('/migration-sdk-docs/docs', '8e0'),
    routes: [
      {
        path: '/migration-sdk-docs/docs/category/overview-of-the-migration-sdk',
        component: ComponentCreator('/migration-sdk-docs/docs/category/overview-of-the-migration-sdk', '36c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/category/reference',
        component: ComponentCreator('/migration-sdk-docs/docs/category/reference', '6db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/category/using-the-migration-sdk',
        component: ComponentCreator('/migration-sdk-docs/docs/category/using-the-migration-sdk', 'f2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/help_about',
        component: ComponentCreator('/migration-sdk-docs/docs/help_about', '2d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/intro',
        component: ComponentCreator('/migration-sdk-docs/docs/intro', '000'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/overview/',
        component: ComponentCreator('/migration-sdk-docs/docs/overview/', '5f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/overview/best_practices',
        component: ComponentCreator('/migration-sdk-docs/docs/overview/best_practices', '452'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/overview/intro',
        component: ComponentCreator('/migration-sdk-docs/docs/overview/intro', '543'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/overview/planning',
        component: ComponentCreator('/migration-sdk-docs/docs/overview/planning', '661'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/reference/api_ref',
        component: ComponentCreator('/migration-sdk-docs/docs/reference/api_ref', 'c49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/reference/architecture',
        component: ComponentCreator('/migration-sdk-docs/docs/reference/architecture', '6b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/using/installation',
        component: ComponentCreator('/migration-sdk-docs/docs/using/installation', '1dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/using/migration_tasks',
        component: ComponentCreator('/migration-sdk-docs/docs/using/migration_tasks', '8ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/using/requirements',
        component: ComponentCreator('/migration-sdk-docs/docs/using/requirements', '9cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/migration-sdk-docs/docs/using/troubleshooting',
        component: ComponentCreator('/migration-sdk-docs/docs/using/troubleshooting', '2e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/migration-sdk-docs/',
    component: ComponentCreator('/migration-sdk-docs/', '857'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
