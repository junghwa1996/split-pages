import { useRouter } from "next/router";

export default function Movies() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Movies 페이지 #{id}</div>;
}
