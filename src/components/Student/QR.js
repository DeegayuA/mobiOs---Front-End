import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import QRImage from "../../assets/QR_image.png";
const QRScannerComponent = ({ onScan }) => {
    const [scanner, setScanner] = useState(null);
    const [isScanning, setIsScanning] = useState(false); // 👈 Controls camera activation
    useEffect(() => {
        if (isScanning && !scanner) {
            const newScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: { width: 250, height: 250 } }, false);
            newScanner.render((decodedText) => {
                onScan(decodedText);
                setIsScanning(false); // Stop scanning after success
            }, (errorMessage) => {
                console.warn("QR Scan Error:", errorMessage);
            });
            setScanner(newScanner);
        }
        return () => {
            if (scanner) {
                scanner.clear().catch((err) => console.warn("Scanner Cleanup Error:", err));
                setScanner(null);
            }
        };
    }, [onScan, isScanning, scanner]);
    return (_jsx("div", { className: "flex flex-col items-center", children: isScanning ? (_jsx("div", { id: "qr-reader", className: "border-2 border-gray-300 rounded-lg" })) : (_jsx("img", { src: QRImage, alt: "Tap to Scan", className: "w-32 h-32 cursor-pointer hover:opacity-80 transition", onClick: () => setIsScanning(true) })) }));
};
export default QRScannerComponent;
