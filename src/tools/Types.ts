export type UserType = {
  id: number;
  keyData: {
    calorieCount: number;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
  };
  userInfos: {
    age: number;
    firstName: string;
    lastName: string;
  };
  todayScore: number;
};
