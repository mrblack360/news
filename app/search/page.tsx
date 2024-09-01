"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SearchPage() {
  const [seconds, setSeconds] = useState(10);
  const router = useRouter();

  useEffect(() => {
    if (seconds > 0) {
      let count = 0;
      let timer = setInterval(() => {
        if (count < 10) {
          count++;
          setSeconds(10 - count);
        } else {
          clearInterval(timer);
        }
      }, 1000);
    }
    setTimeout(() => router.push("/"), 10000);
  }, []);

  return (
    <div className="py-5">
      <h1 className="text-center mb-5 title">
        You can not search at the moment, we'll take you back to the main page
        in {seconds} seconds
      </h1>
      <Link href="/" target="_blank">
        <article className="text-center article">Go now!</article>
      </Link>
    </div>
  );
}

export default SearchPage;
