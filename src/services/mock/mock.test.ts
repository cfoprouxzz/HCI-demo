import { describe, expect, it } from 'vitest';
import { generateMenu, eligibleDishes } from './index';
import { initialMembers } from '../../data/members';
import { getDish } from '../../data/dishes';
import { totalNutrition } from '../../utils/nutrition';
describe('Menu demo constraints', () => {
    it('generates nine slots for three days and excludes declared allergens', () => { const member = initialMembers[0]; const slots = generateMenu(member, 3, 'Đa dạng món Việt', 0); expect(slots).toHaveLength(9); expect(slots.every(s => !getDish(s.dishId).allergens.some(a => member.allergies.includes(a)))).toBe(true); expect(eligibleDishes(member, 'Đa dạng món Việt', 'Trưa').some(d => d.id === 'shrimp')).toBe(false); });
    it('preserves locked dishes while changing unlocked dishes', () => { const member = initialMembers[0]; const old = generateMenu(member, 3, 'Đa dạng món Việt', 0); old[0].locked = true; const next = generateMenu(member, 3, 'Đa dạng món Việt', 1, old); expect(next[0]).toEqual(old[0]); expect(next.slice(1).every((s, i) => s.dishId !== old[i + 1].dishId)).toBe(true); });
    it('returns an empty plan when conditions exclude every option', () => { const member = { ...initialMembers[0], dislikes: 'cơm, cháo, bún, phở, bánh, khoai, bắp' }; expect(generateMenu(member, 3, 'Đa dạng món Việt', 0)).toEqual([]); });
    it('keeps vegetarian preference across all meals', () => { const slots = generateMenu(initialMembers[1], 3, 'Ăn chay', 0); expect(slots).toHaveLength(9); expect(slots.every(s => getDish(s.dishId).tags.includes('Ăn chay'))).toBe(true); });
    it('is deterministic for identical inputs', () => { expect(generateMenu(initialMembers[2], 3, 'Đa dạng món Việt', 2)).toEqual(generateMenu(initialMembers[2], 3, 'Đa dạng món Việt', 2)); });
});
describe('Illustrative nutrition', () => {
    it('scales all known quantities by portion weight', () => { const total = totalNutrition([{ id: 'a', dishId: 'rice', name: 'Cơm', grams: 300 }]); expect(total.kcal).toBe(390); expect(total.carbs).toBe(86); expect(total.sodium).toBe(4); });
    it('does not report partial sodium as a complete total', () => { expect(totalNutrition([{ id: 'a', dishId: 'rice', name: 'Cơm', grams: 150 }, { id: 'b', dishId: 'fish', name: 'Cá', grams: 100 }]).sodium).toBeNull(); });
    it('returns zero nutrition for an empty meal', () => { expect(totalNutrition([]).kcal).toBe(0); });
});
it('matches allergy names regardless of case and filters disliked ingredients', () => { const options = eligibleDishes({ ...initialMembers[0], allergies: ['tôm'], dislikes: 'Thịt bò' }, 'Đa dạng món Việt', 'Trưa'); expect(options.some(d => d.id === 'shrimp' || d.id === 'rolls' || d.id === 'beef')).toBe(false); });
