import type { UpdateMealValuesType } from './UpdateMeal.types';

import { auth, firestore, serverTimestamp } from '@lib/firebase';

const updateMealFirestore = async ({
  label,
  isPublic,
  color,
  date,
  time,
}: UpdateMealValuesType) => {
  const newMeal: Meal = {
    label,
    color,
    isPublic,
    startsAt: new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes()
    ),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    foods: [],
  };

  if (!auth?.currentUser?.uid)
    return { error: 'verifique se você está logado' };

  const mealsRef = firestore
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('meals');

  try {
    await mealsRef.add(newMeal);
  } catch (error) {
    return { error };
  }
};

export default updateMealFirestore;
