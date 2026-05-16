import { QrCode } from 'lucide-react'

export default function QRScannerPlaceholder() {
  return (
    <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-emerald-300 bg-emerald-50/60 text-emerald-700">
      <QrCode className="h-6 w-6" />
      <p className="text-xs font-semibold">QR Scanner Placeholder</p>
      <p className="text-[11px] text-emerald-600">
        Activate camera to scan driver QR
      </p>
    </div>
  )
}
