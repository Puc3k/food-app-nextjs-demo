export default function MealDetailsPage({params}) {
    return (
        <>
            <main>
                Meal: {params.slug}
            </main>
        </>
    );
}
