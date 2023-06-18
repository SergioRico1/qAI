'use client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonEn from './lang/common.en';
import commonZh from './lang/common.zh';
import commonEs from './lang/common.es';
import loginEn from './lang/login.en';
import loginZh from './lang/login.zh';
import loginEs from './lang/login.es';
import registerEn from './lang/register.en';
import registerZh from './lang/register.zh';
import registerEs from './lang/register.es';
import layoutEn from './lang/layout.en';
import layoutZh from './lang/layout.zh';
import layoutEs from './lang/layout.es';
import appEn from './lang/app.en';
import appZh from './lang/app.zh';
import appEs from './lang/app.es';
import appOverviewEn from './lang/app-overview.en';
import appOverviewZh from './lang/app-overview.zh';
import appOverviewEs from './lang/app-overview.es';
import appDebugEn from './lang/app-debug.en';
import appDebugZh from './lang/app-debug.zh';
import appDebugEs from './lang/app-debug.es';
import appApiEn from './lang/app-api.en';
import appApiZh from './lang/app-api.zh';
import appApiEs from './lang/app-api.es';
import appLogEn from './lang/app-log.en';
import appLogZh from './lang/app-log.zh';
import appLogEs from './lang/app-log.es';
import shareEn from './lang/share-app.en';
import shareZh from './lang/share-app.zh';
import shareEs from './lang/share-app.es';
import datasetEn from './lang/dataset.en';
import datasetZh from './lang/dataset.zh';
import datasetEs from './lang/dataset.es';
import datasetDocumentsEn from './lang/dataset-documents.en';
import datasetDocumentsZh from './lang/dataset-documents.zh';
import datasetDocumentsEs from './lang/dataset-documents.es';
import datasetHitTestingEn from './lang/dataset-hit-testing.en';
import datasetHitTestingZh from './lang/dataset-hit-testing.zh';
import datasetHitTestingEs from './lang/dataset-hit-testing.es';
import datasetSettingsEn from './lang/dataset-settings.en';
import datasetSettingsZh from './lang/dataset-settings.zh';
import datasetSettingsEs from './lang/dataset-settings.es';
import datasetCreationEn from './lang/dataset-creation.en';
import datasetCreationZh from './lang/dataset-creation.zh';
import datasetCreationEs from './lang/dataset-creation.es';
import exploreEn from './lang/explore.en';
import exploreZh from './lang/explore.zh';
import exploreEs from './lang/explore.es';
import { getLocaleOnClient } from '@/i18n/client'

const resources = {
  'en': {
    translation: {
      common: commonEn,
      layout: layoutEn,
      login: loginEn,
      register: registerEn,
      app: appEn,
      appOverview: appOverviewEn,
      appDebug: appDebugEn,
      appApi: appApiEn,
      appLog: appLogEn,
      share: shareEn,
      dataset: datasetEn,
      datasetDocuments: datasetDocumentsEn,
      datasetHitTesting: datasetHitTestingEn,
      datasetSettings: datasetSettingsEn,
      datasetCreation: datasetCreationEn,
      explore: exploreEn,
    },
  },
  'zh-Hans': {
    translation: {
      common: commonZh,
      layout: layoutZh,
      login: loginZh,
      register: registerZh,
      app: appZh,
      appOverview: appOverviewZh,
      appDebug: appDebugZh,
      appApi: appApiZh,
      appLog: appLogZh,
      share: shareZh,
      dataset: datasetZh,
      datasetDocuments: datasetDocumentsZh,
      datasetHitTesting: datasetHitTestingZh,
      datasetSettings: datasetSettingsZh,
      datasetCreation: datasetCreationZh,
      explore: exploreZh,
    },
  },
  'es': {
    translation: {
      common: commonEs,
      layout: layoutEs,
      login: loginEs,
      register: registerEs,
      app: appEs,
      appOverview: appOverviewEs,
      appDebug: appDebugEs,
      appApi: appApiEs,
      appLog: appLogEs,
      share: shareEs,
      dataset: datasetEs,
      datasetDocuments: datasetDocumentsEs,
      datasetHitTesting: datasetHitTestingEs,
      datasetSettings: datasetSettingsEs,
      datasetCreation: datasetCreationEs,
      explore: exploreEs,
    },
  },
}


i18n.use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: getLocaleOnClient(),
    fallbackLng: 'en',
    // debug: true,
    resources,
  })

export const changeLanguage = i18n.changeLanguage
export default i18n
