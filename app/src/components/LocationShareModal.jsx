import Modal from './Modal'

export default function LocationShareModal({ open, onClose, coordinates }) {
  return (
    <Modal open={open} onClose={onClose} title="Location Shared">
      <p>
        Your current location is being shared with your family contacts . They can view your location updates and route status on their dashboard.
      </p>
      <p className="mt-2 text-xs text-emerald-700 dark:text-emerald-200">
        This is mock data only and does not use real GPS sharing.
      </p>
      {coordinates ? (
        <p className="mt-3 text-xs text-emerald-700 dark:text-emerald-200">
          Latitude: {coordinates.latitude.toFixed(5)}
          <br />
          Longitude: {coordinates.longitude.toFixed(5)}
        </p>
      ) : null}
    </Modal>
  )
}