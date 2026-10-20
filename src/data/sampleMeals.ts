import type { Meal } from '../types';
import { foodImages, getDish } from './dishes';
export const sampleMeals: Meal[] = [{id:'sample-1',name:'Bữa cơm nhà',image:foodImages.bowl,date:'2026-10-21T05:00:00.000Z',memberId:'lan',items:['rice','fish','greens','soup','chicken'].map((id,i)=>({id:`item-${i}`,dishId:id,name:getDish(id).name,grams:getDish(id).portion,confidence:i===3?68:97-i*2}))},
 {id:'sample-2',name:'Bữa sáng nhẹ nhàng',image:foodImages.soup,date:'2026-10-21T00:00:00.000Z',memberId:'minh',items:[{id:'breakfast',dishId:'porridge',name:'Cháo gà',grams:300,confidence:96}]}];
