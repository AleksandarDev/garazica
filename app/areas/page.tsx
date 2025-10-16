import AreaItem from '../../components/Areas/AreaItem';
import areas from '../../src/Areas';

export default function AreasPage() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {areas.map((area) => (
                    <div key={area.id}>
                        <AreaItem area={area} />
                    </div>
                ))}
            </div>
        </div>
    );
}
