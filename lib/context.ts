import type firebase from 'firebase/app';

import { createContext } from 'react';

export const UserContext = createContext({
  user: null,
  loading: null,
  userDetails: null,
} as {
  user: firebase.User | null | undefined;
  loading: boolean | null;
  userDetails: UserDetails | null;
});

export const CalendarContext = createContext({
  selectedDateTime: null,
  setSelectedDateTime: null,
});

export const MealsContext = createContext({ meals: null });
