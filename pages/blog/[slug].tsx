import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Details Page</h1>
      <p>ID: {slug}</p>
    </div>
  )
}