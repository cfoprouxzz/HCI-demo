import type { Dish } from '../types';
export const foodImages = {
 bowl:'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1000&q=85',
 rice:'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=700&q=80',
 greens:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
 soup:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80',
 chicken:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80',
 fish:'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=700&q=80'
};
type Row = [string,string,number,number,number,number,number,number|null,string[],string[],string[],('Sáng'|'Trưa'|'Tối')[],keyof typeof foodImages];
const rows: Row[] = [
 ['rice','Cơm trắng',150,195,43,4,0.5,2,['Gạo'],[],['Món Việt'],['Trưa','Tối'],'rice'],
 ['fish','Cá kho tộ',100,180,5,22,8,null,['Cá','Nước mắm','Đường'],['Cá'],['Món Việt'],['Trưa','Tối'],'fish'],
 ['greens','Rau muống luộc',100,30,4,3,0.4,20,['Rau muống'],[],['Ăn chay','Món Việt'],['Trưa','Tối'],'greens'],
 ['soup','Canh bí xanh',150,45,6,3,1,null,['Bí xanh','Gia vị'],[],['Ăn chay','Món Việt'],['Trưa','Tối'],'soup'],
 ['chicken','Thịt gà luộc',100,165,0,31,4,70,['Thịt gà'],[],['Món Việt'],['Trưa','Tối'],'chicken'],
 ['pho','Phở gà',350,390,52,25,9,null,['Bánh phở','Thịt gà','Hành'],[],['Món Việt'],['Sáng'],'bowl'],
 ['oats','Cháo yến mạch rau củ',300,265,42,10,7,120,['Yến mạch','Cà rốt','Nấm'],[],['Ăn chay','Món mềm'],['Sáng'],'soup'],
 ['banhmi','Bánh mì trứng',180,340,42,15,12,410,['Bánh mì','Trứng'],['Trứng','Lúa mì'],['Món Việt'],['Sáng'],'rice'],
 ['bun','Bún cá',350,375,55,23,7,null,['Bún','Cá','Cà chua'],['Cá'],['Món Việt'],['Sáng'],'bowl'],
 ['porridge','Cháo gà',300,280,39,18,6,240,['Gạo','Thịt gà'],[],['Món mềm','Món Việt'],['Sáng'],'soup'],
 ['sweetpotato','Khoai lang và sữa đậu nành',250,285,48,10,6,85,['Khoai lang','Đậu nành'],['Đậu nành'],['Ăn chay'],['Sáng'],'rice'],
 ['tofu','Đậu hũ sốt cà chua',200,230,15,16,12,300,['Đậu nành','Cà chua'],['Đậu nành'],['Ăn chay','Món Việt'],['Trưa','Tối'],'greens'],
 ['brownrice','Cơm gạo lứt rau củ',300,350,63,9,7,170,['Gạo lứt','Cà rốt','Bông cải'],[],['Ăn chay','Món Việt'],['Trưa','Tối'],'rice'],
 ['steamedfish','Cá hấp gừng và cơm',320,425,53,30,10,null,['Cá','Gạo','Gừng'],['Cá'],['Món Việt'],['Trưa','Tối'],'fish'],
 ['chickenrice','Cơm gà rau củ',350,480,60,34,11,310,['Gạo','Thịt gà','Rau củ'],[],['Món Việt'],['Trưa','Tối'],'chicken'],
 ['shrimp','Canh rau ngót nấu tôm',250,150,9,20,4,null,['Rau ngót','Tôm'],['Tôm'],['Món Việt'],['Trưa','Tối'],'soup'],
 ['beef','Bò xào bông cải và cơm',350,485,57,32,14,390,['Thịt bò','Bông cải','Gạo'],[],['Món Việt'],['Trưa','Tối'],'greens'],
 ['mushroom','Nấm kho tiêu và cơm',300,360,60,12,8,330,['Nấm','Gạo','Tiêu'],[],['Ăn chay','Món Việt'],['Trưa','Tối'],'rice'],
 ['pumpkin','Canh bí đỏ đậu hũ',250,180,22,11,6,190,['Bí đỏ','Đậu nành'],['Đậu nành'],['Ăn chay','Món mềm'],['Trưa','Tối'],'soup'],
 ['salad','Gỏi gà rau củ',280,310,18,29,13,280,['Thịt gà','Bắp cải','Đậu phộng'],['Đậu phộng'],['Món Việt'],['Trưa','Tối'],'greens'],
 ['rolls','Gỏi cuốn tôm thịt',250,320,40,22,8,400,['Bánh tráng','Tôm','Thịt heo'],['Tôm'],['Món Việt'],['Trưa','Tối'],'greens'],
 ['noodles','Bún rau củ đậu hũ',320,370,55,15,10,260,['Bún','Đậu nành','Rau củ'],['Đậu nành'],['Ăn chay','Món Việt'],['Sáng','Trưa','Tối'],'bowl'],
 ['eggrice','Cơm trứng hấp và canh',350,430,55,20,14,280,['Gạo','Trứng','Rau củ'],['Trứng'],['Món mềm','Món Việt'],['Trưa','Tối'],'rice'],
 ['pork','Thịt nạc luộc và cơm',320,450,54,32,11,180,['Thịt heo','Gạo','Dưa leo'],[],['Món Việt'],['Trưa','Tối'],'chicken'],
 ['vegetableporridge','Cháo nấm hạt sen',300,260,43,9,6,140,['Gạo','Nấm','Hạt sen'],[],['Ăn chay','Món mềm'],['Sáng','Tối'],'soup'],
 ['fishporridge','Cháo cá rau thì là',300,295,41,20,6,null,['Gạo','Cá','Thì là'],['Cá'],['Món mềm','Món Việt'],['Sáng','Tối'],'soup'],
 ['corn','Bắp luộc và trứng',250,300,43,14,9,100,['Bắp','Trứng'],['Trứng'],['Món Việt'],['Sáng'],'rice'],
 ['vegetables','Rau củ hấp và cơm nấm',320,340,62,10,6,130,['Rau củ','Gạo','Nấm'],[],['Ăn chay','Món Việt'],['Trưa','Tối'],'greens']
];
export const dishes: Dish[] = rows.map(([id,name,portion,kcal,carbs,protein,fat,sodium,ingredients,allergens,tags,meal,img]) => ({id,name,portion,nutrition:{kcal,carbs,protein,fat,sodium},ingredients,allergens,tags,meal,image:foodImages[img],description:`${name}, khẩu phần mẫu ${portion} g. Ảnh minh họa có thể khác cách chế biến thực tế. Các số liệu được soạn cho prototype, chưa xác minh chuyên môn.`}));
export const getDish = (id: string) => dishes.find(d=>d.id===id)!;
