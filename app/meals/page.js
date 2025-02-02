import Link from "next/link";

export default function MealsPage() {
    return <main>
        <h1>Meals Page</h1>
        <p><Link href="/meals/burgerek">Burger</Link></p>
        <Link href="/meals/carbonara">Carbonara</Link>
    </main>
}