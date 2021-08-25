// import type { FieldValue } from 'firebase';

interface UserDetails {
  email?: string;
  firstName?: string;
  lastName?: string;
  photoURL?: string;
  verifiedEmail?: boolean;
  activityLevel?: 1 | 2 | 3 | 4 | 5;
  birthdate?: Date;
  height?: {
    current?: number;
  };
  weight?: {
    current?: number;
    desired?: number;
  };
  goals?: {
    general?: {
      buildMuscle?: boolean;
      loseWeight?: boolean;
      lastName?: boolean;
    };
    nutrition?: {
      carb?: number;
      prot?: number;
      fat?: number;
      kcal?: number;
    };
  };
  gender?: 'M' | 'F' | 'O';
}

interface Meal {
  color: HexColor;
  startsAt: Date;
  createdAt: FieldValue;
  updatedAt: FieldValue;
  label: string;
  isPublic: boolean;
  foods: Food[];
}

type MealWithRef = Meal & {
  ref: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
};

interface Food {
  amount: number;
  carb: number;
  prot: number;
  fat: number;
  kcal: number;
  foodId: string;
  label: string;
  unit: 'g';
}

interface FormattedFood {
  amount: string;
  carb: number;
  prot: number;
  fat: number;
  kcal: number;
  foodId: string;
  label: string;
  unit: 'g';
}
