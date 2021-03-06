import {Navigation} from 'react-native-navigation';
import {SFSymbols} from '@assets/symbols/SFSymbols';

import {Pages} from './constants/allPages';
import {MainTab} from './constants/mainTab';
import {getPlatformTabsIcon} from './helpers/navigationIconHelpers';
import translate from '@helpers/translator';
import {store} from '../store';
import {Language} from '../interfaces';

let language: Language = store.getState().language;

export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        id: Pages.splashScreen.id,
        name: Pages.splashScreen.name,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export function setAuthRoot() {
  Navigation.setRoot({
    root: {
      stack: {
        id: Pages.loginScreen.id,
        children: [
          {
            component: {
              id: Pages.loginScreen.id,
              name: Pages.loginScreen.name,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
}

export function setTabsRoot() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: Pages.mainTab.id,
        children: [
          {
            stack: {
              id: MainTab.home.id,
              children: [
                {
                  component: {
                    id: Pages.homeScreen.id,
                    name: Pages.homeScreen.name,
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: MainTab.group.id,
              children: [
                {
                  component: {
                    id: Pages.createGroupScreen.id,
                    name: Pages.createGroupScreen.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: translate(
                    {
                      en: 'Group',
                      id: 'Group',
                    },
                    language,
                  ),
                  ...getPlatformTabsIcon(
                    SFSymbols.person,
                    SFSymbols['person.fill'],
                    'group',
                  ),
                },
              },
            },
          },
          {
            stack: {
              id: MainTab.profile.id,
              children: [
                {
                  component: {
                    id: Pages.profileScreen.id,
                    name: Pages.profileScreen.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: translate(
                    {
                      en: 'You',
                      id: 'Kamu',
                    },
                    language,
                  ),
                  ...getPlatformTabsIcon(
                    SFSymbols.person,
                    SFSymbols['person.fill'],
                    'person-pin',
                  ),
                },
              },
            },
          },
        ],
      },
    },
  });
}
