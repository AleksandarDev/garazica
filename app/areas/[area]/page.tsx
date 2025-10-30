export default function AreaPage({ params }: { params: { area: string } }) {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <p>
                Area:
                {' '}
                {params.area}
            </p>
        </div>
    );
}
