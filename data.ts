
import { type MenuItem } from './types';

export const menuItems: MenuItem[] = [
  {
    id: 'chicken',
    title: 'Chicken & Veggies',
    description: 'Fresh Chicken, White Rice, Carrots, Sweet Potato, Pumpkin, Spinach, Broccoli, Eggs, Turmeric & Coconut Oil.',
    protein: '12g',
    fat: '6g',
    fiber: '3g',
    price: 149,
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5098/5098962.png',
    imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-amber-100',
    ingredients: [
      { name: 'Fresh Chicken', benefit: 'Lean, high-quality protein for muscle development.' },
      { name: 'White Rice', benefit: 'Easily digestible carbohydrate for quick energy.' },
      { name: 'Carrots', benefit: 'Rich in Vitamin A for eye health and immunity.' },
      { name: 'Sweet Potato', benefit: 'High in fiber and Vitamin B6 for digestion.' },
      { name: 'Pumpkin', benefit: 'Excellent for stool consistency and gut health.' },
      { name: 'Spinach', benefit: 'Loaded with iron, vitamins, and antioxidants.' },
      { name: 'Broccoli', benefit: 'Provides fiber and calcium for strong bones.' },
      { name: 'Eggs (with Shell)', benefit: 'Complete protein source with calcium for bones.' },
      { name: 'Turmeric', benefit: 'Natural anti-inflammatory and joint support.' },
      { name: 'Coconut Oil', benefit: 'Promotes healthy skin, coat, and brain function.' }
    ]
  },
  {
    id: 'lamb',
    title: 'Lamb & Veggies',
    description: 'Tender Lamb, Broccoli, Carrots, Pumpkin, White Rice, Spinach, Sweet Potato, Eggs, Turmeric & Coconut Oil.',
    protein: '13g',
    fat: '9g',
    fiber: '2.5g',
    price: 199,
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/4900/4900656.png',
    imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-red-100',
    ingredients: [
      { name: 'Tender Lamb', benefit: 'Rich source of iron and zinc for a strong immune system.' },
      { name: 'Broccoli', benefit: 'Contains cancer-fighting antioxidants.' },
      { name: 'Carrots', benefit: 'Supports dental health and vision.' },
      { name: 'Pumpkin', benefit: 'Soluble fiber helps regulate digestion.' },
      { name: 'White Rice', benefit: 'Gentle on the stomach.' },
      { name: 'Spinach', benefit: 'Packed with vitamins A, B, C, and K.' },
      { name: 'Sweet Potato', benefit: 'Supports healthy blood pressure.' },
      { name: 'Eggs (with Shell)', benefit: 'Amino acids for repair and calcium for teeth.' },
      { name: 'Turmeric', benefit: 'Boosts heart health and fights inflammation.' },
      { name: 'Coconut Oil', benefit: 'Improves digestion and nutrient absorption.' }
    ]
  },
  {
    id: 'fish',
    title: 'Fish & Veggies',
    description: 'Fish, White Rice, Spinach, Broccoli, Pumpkin, Carrots, Sweet Potato, Eggs, Turmeric & Coconut Oil.',
    protein: '14g',
    fat: '5g',
    fiber: '2g',
    price: 179,
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/450/450138.png',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a3a277d?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-blue-100',
    ingredients: [
      { name: 'Whole Fish', benefit: 'Omega-3 fatty acids for a shiny coat and healthy skin.' },
      { name: 'White Rice', benefit: 'Hypoallergenic energy source.' },
      { name: 'Spinach', benefit: 'Magnesium and potassium for nerve function.' },
      { name: 'Broccoli', benefit: 'High in fiber to aid weight management.' },
      { name: 'Pumpkin', benefit: 'Soots upset stomachs.' },
      { name: 'Carrots', benefit: 'Beta-carotene antioxidant protection.' },
      { name: 'Sweet Potato', benefit: 'Slow-release energy and vitamins.' },
      { name: 'Eggs (with Shell)', benefit: 'Bioavailable protein for active dogs.' },
      { name: 'Turmeric', benefit: 'Helps relieve allergy symptoms.' },
      { name: 'Coconut Oil', benefit: 'Antibacterial and antifungal properties.' }
    ]
  },
  {
    id: 'eggs',
    title: 'Eggs & Veggies',
    description: 'Farm Fresh Eggs, White Rice, Broccoli, Carrots, Sweet Potato, Spinach, Pumpkin, Turmeric & Coconut oil.',
    protein: '11g',
    fat: '8g',
    fiber: '3.5g',
    price: 129,
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/4424/4424195.png',
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-orange-100',
    ingredients: [
      { name: 'Farm Fresh Eggs', benefit: 'The gold standard for protein quality.' },
      { name: 'Eggshells', benefit: 'Natural, highly absorbable calcium.' },
      { name: 'White Rice', benefit: 'Low-fiber carb for sensitive tummies.' },
      { name: 'Broccoli', benefit: 'Vitamin C for immune defense.' },
      { name: 'Carrots', benefit: 'Crunchy texture supports dental hygiene.' },
      { name: 'Sweet Potato', benefit: 'Potassium for muscle function.' },
      { name: 'Spinach', benefit: 'Folate and iron for blood health.' },
      { name: 'Pumpkin', benefit: 'Prebiotic fiber feeds good gut bacteria.' },
      { name: 'Turmeric', benefit: 'Pain relief for arthritic joints.' },
      { name: 'Coconut Oil', benefit: 'Reduces dry skin and hot spots.' }
    ]
  },
  {
    id: 'veg',
    title: 'Veggie Bowl',
    description: 'Chickpeas, White Rice, Sweet Potato, Pumpkin, Carrots, Broccoli, Spinach, Turmeric & Coconut oil.',
    protein: '7g',
    fat: '4g',
    fiber: '5g',
    price: 119,
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-green-100',
    ingredients: [
      { name: 'Chickpeas', benefit: 'Protein-packed legume high in fiber.' },
      { name: 'White Rice', benefit: 'Fuel for daily activities.' },
      { name: 'Sweet Potato', benefit: 'Complex carbs for sustained energy.' },
      { name: 'Pumpkin', benefit: 'Essential micronutrients and digestive aid.' },
      { name: 'Carrots', benefit: 'Supports eye health in aging dogs.' },
      { name: 'Broccoli', benefit: 'Sulforaphane helps cellular health.' },
      { name: 'Spinach', benefit: 'Vitamins for overall vitality.' },
      { name: 'Turmeric', benefit: 'Anti-inflammatory super spice.' },
      { name: 'Coconut Oil', benefit: 'Medium-chain triglycerides (MCTs) for energy.' }
    ]
  }
];
