export interface Member { id: string; name: string; age: number; gender: string; height: number; weight: number; conditions: string[]; allergies: string[]; likes: string; dislikes: string; goal: string; notes: string; color: string; avatar: string }
export interface Nutrition { kcal: number; carbs: number; protein: number; fat: number; sodium: number | null }
export interface Dish { id: string; name: string; image: string; portion: number; nutrition: Nutrition; ingredients: string[]; allergens: string[]; tags: string[]; meal: ('Sáng'|'Trưa'|'Tối')[]; description: string }
export interface MealItem { id: string; dishId: string; name: string; grams: number; confidence?: number }
export interface Meal { id: string; name: string; image: string; items: MealItem[]; date: string; memberId: string }
export interface MenuSlot { key: string; day: number; meal: 'Sáng'|'Trưa'|'Tối'; dishId: string; locked: boolean }
export interface SavedMenu { id: string; date: string; memberId: string; slots: MenuSlot[]; preference: string }
export interface AppData { members: Member[]; history: Meal[]; savedMenus: SavedMenu[]; currentMeal: Meal | null; selectedMember: string; consent: boolean }
