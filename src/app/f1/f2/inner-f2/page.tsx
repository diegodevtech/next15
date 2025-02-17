import Link from "next/link";

export default function InnerF2() {
  return (
    <>
      <div>Inner F2 Page</div>
      <div>
        <Link href={"/f5"}>F5</Link>
      </div>
    </>
  )
}