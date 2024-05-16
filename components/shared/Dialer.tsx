import { useState } from "react";

interface DialerProps {
	onAccept: () => void;
	onDecline: () => void;
}

const Dialer: React.FC<DialerProps> = ({ onAccept, onDecline }) => {
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleAccept = () => {
		setShowConfirmation(true);
		onAccept();
	};

	const handleDecline = () => {
		setShowConfirmation(true);
		onDecline();
	};

	return (
		<div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
			<div className="bg-white p-8 rounded-lg shadow-md max-w-xs w-full">
				<h2 className="text-xl font-semibold mb-4">Incoming Call</h2>
				<p className="mb-4">Would you like to accept the call?</p>
				{!showConfirmation && (
					<div className="flex justify-between">
						<button
							className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
							onClick={handleAccept}
						>
							Accept
						</button>
						<button
							className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ml-2"
							onClick={handleDecline}
						>
							Decline
						</button>
					</div>
				)}
				{showConfirmation && (
					<p className="text-center text-gray-600 mt-4">Call declined.</p>
				)}
			</div>
		</div>
	);
};

export default Dialer;
