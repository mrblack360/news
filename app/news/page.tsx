"use client";
import { useRouter } from "next/navigation";

function NewsPage() {
  const router = useRouter();
  router.push("/");
}

export default NewsPage;
