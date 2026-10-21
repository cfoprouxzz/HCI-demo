import type { MealItem, Nutrition } from '../types';
import { getDish } from '../data/dishes';
export function totalNutrition(items: MealItem[]): Nutrition {
    const total: Nutrition = { kcal: 0, carbs: 0, protein: 0, fat: 0, sodium: 0 };
    for (const item of items) { const dish = getDish(item.dishId); const ratio = item.grams / dish.portion; for (const key of ['kcal', 'carbs', 'protein', 'fat'] as const) total[key] += dish.nutrition[key] * ratio; total.sodium = total.sodium === null || dish.nutrition.sodium === null ? null : total.sodium + dish.nutrition.sodium * ratio; }
    return total;
}
export const formatDate = (date: string) => new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date(date));
export const uid = () => crypto.randomUUID();
