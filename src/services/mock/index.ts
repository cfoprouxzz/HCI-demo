import type { Meal, Member, MenuSlot } from '../../types';
import { dishes, getDish } from '../../data/dishes';
import { mealNames, menuDishIds } from '../../data/menuPresets';
export async function analyzeMeal(preset: Meal): Promise<Meal> { await new Promise(resolve => setTimeout(resolve, 1100)); return structuredClone(preset); }
export const normalize = (value: string) => value.trim().toLocaleLowerCase('vi');
export const allergenOverlap = (declared: string[], ingredients: string[]) => ingredients.filter(a => declared.some(b => normalize(a) === normalize(b)));
export function eligibleDishes(member: Member, preference: string, meal: MenuSlot['meal']) {
    const dislikes = member.dislikes.split(',').map(normalize).filter(Boolean);
    const likes = member.likes.split(',').map(normalize).filter(Boolean);
    const searchable = (dish: typeof dishes[number]) => normalize([dish.name, ...dish.ingredients, ...dish.tags].join(' '));
    const score = (dish: typeof dishes[number]) => likes.filter(like => searchable(dish).includes(like)).length;
    return dishes.filter(d => menuDishIds.includes(d.id) && d.meal.includes(meal) && !allergenOverlap(member.allergies, d.allergens).length && !dislikes.some(x => searchable(d).includes(x)) && (preference === 'Đa dạng món Việt' || d.tags.includes(preference))).sort((a, b) => score(b) - score(a));
}
export function generateMenu(member: Member, days: number, preference: string, revision: number, previous: MenuSlot[] = []): MenuSlot[] {
    const slots: MenuSlot[] = [];
    for (let day = 0; day < days; day++)for (const [i, meal] of mealNames.entries()) {
        const key = `${day}-${meal}`; const old = previous.find(s => s.key === key); const options = eligibleDishes(member, preference, meal);
        if (!options.length) return [];
        if (old?.locked && options.some(d => d.id === old.dishId)) { slots.push(old); continue; }
        const candidates = options.filter(d => d.id !== old?.dishId); const alternatives = candidates.length ? candidates : options;
        const varied = alternatives.filter(d => !slots.some(s => s.day === day && s.dishId === d.id)); const pool = varied.length ? varied : alternatives;
        slots.push({ key, day, meal, dishId: pool[(revision + day * 3 + i) % pool.length].id, locked: false });
    } return slots;
}
export function menuItems(slots: MenuSlot[]) { return slots.map(s => ({ id: s.key, dishId: s.dishId, name: getDish(s.dishId).name, grams: getDish(s.dishId).portion })); }
