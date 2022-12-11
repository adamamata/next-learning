import { useRouter } from 'next/router';

function FoodDetails() {
    const router = useRouter();
    const foodId = router.query.foodId; 
  return (
    <div>
        Details about food {foodId}
    </div>
  )
}

export default FoodDetails