import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FAQ() {
    return (
        <div className="container mx-auto">
            <div className="p-4">
                <div className="mb-8 bg-gray-100 text-start">
                    <h3 className="p-2">Home/ <span className="opacity-90">F.A.Q</span></h3>
                </div>
                <div className="mt-4">
                    <h1 className="text-3xl font-bold text-primary">F.A.Q</h1>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </div>
    )
}