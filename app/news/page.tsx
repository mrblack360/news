"use client";
import { useRouter } from "next/navigation";

function NewsPage() {
  const router = useRouter();
  router.push("/");
  return <div></div>;
}

export default NewsPage;
